import { uiStrings } from './ui-strings-part1.mjs';
import { uiStringsPart2 } from './ui-strings-part2.mjs';
import { mergeSiteSectionsIntoUi } from './site-sections.mjs';
import { LOCALES } from './constants.mjs';

const base = { ...uiStrings, ...uiStringsPart2 };

export const allUiStrings = Object.fromEntries(
	LOCALES.map((locale) => [locale, mergeSiteSectionsIntoUi(locale, base[locale])]),
);
