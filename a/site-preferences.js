(() => {
  'use strict';

  const defaults = Object.freeze({ locale: 'zh-Hans', theme: 'light' });
  document.documentElement.dataset.siteLoading = '';
  const languages = Object.freeze([
    ['zh-Hans', '简体中文', 'zh-Hans'], ['zh-Hant', '繁體中文', 'zh-Hant'], ['en', 'English', 'en'],
    ['ja', '日本語', 'ja'], ['ko', '한국어', 'ko'], ['fr', 'Français', 'fr'], ['de', 'Deutsch', 'de'],
    ['es', 'Español', 'es'], ['pt', 'Português', 'pt'], ['nl', 'Nederlands', 'nl'], ['it', 'Italiano', 'it'],
    ['el', 'Ελληνικά', 'el'], ['et', 'Eesti', 'et'], ['ms', 'Bahasa Melayu', 'ms'], ['fil', 'Filipino', 'fil'],
    ['vi', 'Tiếng Việt', 'vi'], ['tr', 'Türkçe', 'tr']
  ].map(([locale, name, tag]) => Object.freeze({ locale, name, tag })));
  const themes = Object.freeze(['dark', 'graphite', 'light', 'sky']);
  const themeColors = Object.freeze({ dark: '#0c1921', graphite: '#191e1d', light: '#f3f7f4', sky: '#f2f9fd' });
  const themeIcons = Object.freeze({ dark: '◐', graphite: '◑', light: '☼', sky: '◉' });
  const localeKeys = ['dali-locale', 'dali-legal-locale', 'dali-download-locale'];

  function read(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function write(key, value) {
    try { localStorage.setItem(key, value); } catch { /* The page remains usable without storage. */ }
  }

  function normalizeLocale(value) {
    if (typeof value !== 'string') return null;
    const tag = value.trim().replace(/_/g, '-').toLowerCase();
    if (tag === 'zh' || /^zh-(hans|cn|sg)(-|$)/.test(tag)) return 'zh-Hans';
    if (/^zh-(hant|tw|hk|mo)(-|$)/.test(tag)) return 'zh-Hant';
    const base = tag.split('-')[0];
    return languages.find(({ locale }) => locale.toLowerCase() === tag || locale === base)?.locale || (base === 'tl' ? 'fil' : null);
  }

  function storedLocale() {
    return localeKeys.map((key) => normalizeLocale(read(key))).find(Boolean) || defaults.locale;
  }

  function storedTheme() {
    const value = read('dali-theme');
    return themes.includes(value) ? value : defaults.theme;
  }

  function locationPreferences() {
    const query = new URLSearchParams(location.search);
    return { locale: normalizeLocale(query.get('lang') || query.get('locale')), theme: query.get('theme') };
  }

  const requested = locationPreferences();
  const state = {
    locale: requested.locale || storedLocale(),
    theme: themes.includes(requested.theme) ? requested.theme : storedTheme()
  };

  function applyDocument() {
    document.documentElement.lang = state.locale;
    document.documentElement.dataset.locale = state.locale;
    document.documentElement.dataset.theme = state.theme;
    if (document.body) document.body.dataset.theme = state.theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = themeColors[state.theme];
  }

  function notify() {
    window.dispatchEvent(new CustomEvent('dali-preferences-change', { detail: { ...state } }));
  }

  function setLocale(value, { persist = true } = {}) {
    const locale = normalizeLocale(value) || defaults.locale;
    const changed = locale !== state.locale;
    state.locale = locale;
    if (persist) localeKeys.forEach((key) => write(key, locale));
    applyDocument();
    if (changed) notify();
    return locale;
  }

  function setTheme(value, { persist = true } = {}) {
    const theme = themes.includes(value) ? value : defaults.theme;
    const changed = theme !== state.theme;
    state.theme = theme;
    if (persist) write('dali-theme', theme);
    applyDocument();
    if (changed) notify();
    return theme;
  }

  globalThis.DaliSitePreferences = Object.freeze({
    defaults, languages, themes, themeColors, themeIcons, normalizeLocale, setLocale, setTheme,
    get locale() { return state.locale; },
    get theme() { return state.theme; }
  });

  // Migrate valid existing choices without resetting them when the site is updated.
  localeKeys.forEach((key) => write(key, storedLocale()));
  write('dali-theme', storedTheme());
  applyDocument();
  document.addEventListener('DOMContentLoaded', () => {
    applyDocument();
    delete document.documentElement.dataset.siteLoading;
  }, { once: true });
  window.addEventListener('storage', (event) => {
    if (event.key === null || localeKeys.includes(event.key)) setLocale(storedLocale(), { persist: false });
    if (event.key === null || event.key === 'dali-theme') setTheme(storedTheme(), { persist: false });
  });
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    const currentRequest = locationPreferences();
    setLocale(currentRequest.locale || storedLocale(), { persist: false });
    setTheme(themes.includes(currentRequest.theme) ? currentRequest.theme : storedTheme(), { persist: false });
  });
})();
