#!/usr/bin/env node
/**
 * Downloads the product preview MP4 and extracts the 5th frame as a WebP poster.
 */
import { execFileSync } from 'node:child_process';
import { createWriteStream, unlinkSync, existsSync } from 'node:fs';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import ffmpegPath from 'ffmpeg-static';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const VIDEO_URL =
	'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/ef/fafa.mp4';
const outDir = join(root, 'public', 'images');
const tmpVideo = join(outDir, '.tmp-product-preview.mp4');
const tmpFrame = join(outDir, '.tmp-product-poster.png');
const outWebp = join(outDir, 'war-thunder-hacks-video-poster.webp');

mkdirSync(outDir, { recursive: true });

async function downloadVideo() {
	const res = await fetch(VIDEO_URL);
	if (!res.ok) throw new Error(`Failed to download video: ${res.status} ${res.statusText}`);
	await pipeline(Readable.fromWeb(res.body), createWriteStream(tmpVideo));
}

function extractFifthFrame() {
	if (!ffmpegPath) throw new Error('ffmpeg-static binary not found');
	// Frame index 4 = the 5th frame (0-based).
	execFileSync(
		ffmpegPath,
		['-y', '-i', tmpVideo, '-vf', 'select=eq(n\\,4)', '-frames:v', '1', '-update', '1', tmpFrame],
		{ stdio: 'inherit' },
	);
}

async function toWebp() {
	await sharp(tmpFrame).webp({ quality: 86 }).toFile(outWebp);
}

function cleanup() {
	for (const file of [tmpVideo, tmpFrame]) {
		if (existsSync(file)) unlinkSync(file);
	}
}

try {
	console.log('Downloading product preview video…');
	await downloadVideo();
	console.log('Extracting 5th frame…');
	extractFifthFrame();
	console.log('Optimizing poster WebP…');
	await toWebp();
	cleanup();
	console.log(`✓ Poster saved → ${outWebp}`);
} catch (err) {
	cleanup();
	console.error(err);
	process.exitCode = 1;
}
