// Database of letter replacements
// Add or modify replacements here
// You can use:
// 1. Direct Unicode characters: 'α', '℃', '→'
// 2. Unicode escapes: '\u03B1', '\u{2192}'
export const replacementsDB = [
  // Cyrillic and similar looking characters
  { from: 'a', to: '\u0430' },  // Cyrillic 'а'
  { from: 'c', to: '\u0441' },  // Cyrillic 'с'
  { from: 'd', to: '\u0501' },  // Cyrillic 'ԁ'
  { from: 'e', to: '\u0435' },  // Cyrillic 'е'
  { from: 'h', to: '\u04bb' },  // Cyrillic 'һ'
  { from: 'i', to: '\u0456' },  // Cyrillic 'і'
  { from: 'l', to: '\u04cf' },  // Cyrillic 'ӏ'
  { from: 'o', to: '\u043e' },  // Cyrillic 'о'
];
