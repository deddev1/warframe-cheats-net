/**
 * Lazy-loads video sources only after explicit user interaction — no autoplay.
 */
(function () {
	function hydrateSrc(video) {
		if (!(video instanceof HTMLVideoElement)) return false;
		var dataSrc = video.getAttribute('data-src');
		if (!dataSrc) return Boolean(video.getAttribute('src') || video.querySelector('source'));

		if (video.getAttribute('src') !== dataSrc) {
			video.setAttribute('src', dataSrc);
		}

		var sources = video.querySelectorAll('source[data-src]');
		for (var i = 0; i < sources.length; i++) {
			var source = sources[i];
			var sourceSrc = source.getAttribute('data-src');
			if (sourceSrc && source.getAttribute('src') !== sourceSrc) {
				source.setAttribute('src', sourceSrc);
			}
		}
		return true;
	}

	function bindUserPlay(videos) {
		videos.forEach(function (video) {
			video.addEventListener(
				'play',
				function onPlay() {
					if (!hydrateSrc(video)) return;
					try {
						video.load();
					} catch (_) {
						/* ignore */
					}
				},
				{ once: true },
			);
		});
	}

	bindUserPlay(
		Array.prototype.slice.call(
			document.querySelectorAll('[data-war-thunder-hacks-video="lazy"]'),
		),
	);
})();
