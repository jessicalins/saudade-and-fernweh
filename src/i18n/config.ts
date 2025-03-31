// Global Language Map
export const langMap: Record<string, string[]> = {
  en: ['en-US'],
  de: ['de-DE'],
  pt: ['pt-BR'],
}

// Waline Language Map
// https://waline.js.org/guide/i18n.html
export const walineLocaleMap: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  pt: 'pt-BR',
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()
