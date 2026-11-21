(() => {
  'use strict';

  const copy = globalThis.daliDownloadCopy || {};
  const languageOptions = [
    ['zh-Hans', '简体中文'], ['zh-Hant', '繁體中文'], ['en', 'English'], ['ja', '日本語'], ['ko', '한국어'],
    ['fr', 'Français'], ['de', 'Deutsch'], ['es', 'Español'], ['pt', 'Português'], ['nl', 'Nederlands'],
    ['it', 'Italiano'], ['el', 'Ελληνικά'], ['et', 'Eesti'], ['ms', 'Bahasa Melayu'], ['fil', 'Filipino'],
    ['vi', 'Tiếng Việt'], ['tr', 'Türkçe']
  ];
  const languageTags = { 'zh-Hans': 'zh-CN', 'zh-Hant': 'zh-Hant', en: 'en', ja: 'ja', ko: 'ko', fr: 'fr', de: 'de', es: 'es', pt: 'pt', nl: 'nl', it: 'it', el: 'el', et: 'et', ms: 'ms', fil: 'fil', vi: 'vi', tr: 'tr' };
  const preferences = globalThis.DaliSitePreferences;
  const themes = preferences.themes;
  const themeIcons = preferences.themeIcons;
  const themeNames = {
    en: { dark: 'Dark', graphite: 'Graphite dark', light: 'Light', sky: 'Sky light', action: 'Switch colour theme' },
    'zh-Hans': { dark: '深色', graphite: '石墨深色', light: '清透亮色', sky: '天蓝亮色', action: '切换色调主题' },
    'zh-Hant': { dark: '深色', graphite: '石墨深色', light: '清透亮色', sky: '天藍亮色', action: '切換色調主題' },
    ja: { dark: 'ダーク', graphite: 'グラファイト', light: 'ライト', sky: 'スカイ', action: '配色テーマを切り替え' },
    ko: { dark: '다크', graphite: '그래파이트', light: '라이트', sky: '스카이', action: '색상 테마 전환' },
    fr: { dark: 'Sombre', graphite: 'Graphite', light: 'Clair', sky: 'Bleu ciel', action: 'Changer le thème' },
    de: { dark: 'Dunkel', graphite: 'Graphit', light: 'Hell', sky: 'Himmelblau', action: 'Farbthema wechseln' },
    es: { dark: 'Oscuro', graphite: 'Grafito', light: 'Claro', sky: 'Azul cielo', action: 'Cambiar tema' },
    pt: { dark: 'Escuro', graphite: 'Grafite', light: 'Claro', sky: 'Azul-céu', action: 'Mudar tema' },
    nl: { dark: 'Donker', graphite: 'Grafiet', light: 'Licht', sky: 'Hemelsblauw', action: 'Thema wijzigen' },
    it: { dark: 'Scuro', graphite: 'Grafite', light: 'Chiaro', sky: 'Azzurro', action: 'Cambia tema' },
    el: { dark: 'Σκούρο', graphite: 'Γραφίτης', light: 'Φωτεινό', sky: 'Γαλάζιο', action: 'Αλλαγή θέματος' },
    et: { dark: 'Tume', graphite: 'Grafiit', light: 'Hele', sky: 'Taevasinine', action: 'Vaheta teemat' },
    ms: { dark: 'Gelap', graphite: 'Grafit', light: 'Cerah', sky: 'Biru langit', action: 'Tukar tema' },
    fil: { dark: 'Madilim', graphite: 'Graphite', light: 'Maliwanag', sky: 'Asul', action: 'Palitan ang tema' },
    vi: { dark: 'Tối', graphite: 'Than chì', light: 'Sáng', sky: 'Xanh trời', action: 'Đổi giao diện' },
    tr: { dark: 'Koyu', graphite: 'Grafit', light: 'Açık', sky: 'Gök mavisi', action: 'Temayı değiştir' }
  };
  const state = { locale: preferences.locale, theme: preferences.theme };

  const localizedLanguageName = (locale, displayLocale) => {
    try { return new Intl.DisplayNames([languageTags[displayLocale]], {type: 'language'}).of(locale); } catch { return languageOptions.find(([key]) => key === locale)?.[1] || locale; }
  };

  function updateLanguagePanel() {
    const current = languageOptions.find(([locale]) => locale === state.locale)?.[1] || 'English';
    const trigger = document.querySelector('#download-language-toggle');
    document.querySelector('#download-language-current').textContent = current;
    document.querySelectorAll('[data-download-locale]').forEach((button) => {
      const selected = button.dataset.downloadLocale === state.locale;
      const localizedName = localizedLanguageName(button.dataset.downloadLocale, state.locale);
      button.querySelector('small').textContent = localizedName;
      button.querySelector('small').hidden = selected;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
      button.setAttribute('aria-label', selected ? button.querySelector('strong').textContent : `${button.querySelector('strong').textContent} / ${localizedName}`);
    });
    trigger.setAttribute('aria-label', `${copy[state.locale].languageLabel}: ${current}`);
  }

  function updateThemeButton() {
    const labels = themeNames[state.locale] || themeNames.en;
    const next = themes[(themes.indexOf(state.theme) + 1) % themes.length];
    const button = document.querySelector('#download-theme-toggle');
    const label = `${labels.action}: ${labels[state.theme]}. ${labels[next]}`;
    button.textContent = themeIcons[state.theme];
    button.title = label;
    button.setAttribute('aria-label', label);
  }

  function applyLocale(locale, persist = true) {
    state.locale = copy[locale] ? locale : 'en';
    const messages = copy[state.locale];
    document.documentElement.lang = languageTags[state.locale];
    document.querySelectorAll('[data-download]').forEach((node) => {
      const value = messages[node.dataset.download];
      if (value) node.textContent = value;
    });
    document.title = `${messages.navDownload} | DALI Control Platform`;
    preferences.setLocale(state.locale, { persist });
    updateLanguagePanel();
    updateThemeButton();
  }

  function applyTheme(theme, persist = true) {
    state.theme = themes.includes(theme) ? theme : 'light';
    preferences.setTheme(state.theme, { persist });
    updateThemeButton();
  }

  const languageContainer = document.querySelector('#download-language-options');
  languageContainer.replaceChildren(...languageOptions.map(([locale, name]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'language-option';
    button.dataset.downloadLocale = locale;
    const nativeName = document.createElement('strong');
    nativeName.textContent = name;
    const localizedName = document.createElement('small');
    button.append(nativeName, localizedName);
    return button;
  }));
  document.querySelectorAll('[data-download-locale]').forEach((button) => button.addEventListener('click', () => {
    applyLocale(button.dataset.downloadLocale);
    setLanguagePanel(false);
    document.querySelector('#download-language-toggle').focus();
  }));

  function setLanguagePanel(open) {
    const control = document.querySelector('#download-language-control');
    const panel = document.querySelector('#download-language-panel');
    if (open) panel.style.setProperty('--info-header-bottom', `${document.querySelector('.info-header').getBoundingClientRect().bottom}px`);
    control.classList.toggle('is-open', open);
    panel.hidden = !open;
    document.querySelector('#download-language-toggle').setAttribute('aria-expanded', String(open));
    updateLanguagePanel();
  }
  document.querySelector('#download-language-toggle').addEventListener('click', () => setLanguagePanel(!document.querySelector('#download-language-control').classList.contains('is-open')));
  document.addEventListener('click', (event) => { if (!event.target.closest('#download-language-control')) setLanguagePanel(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('#download-language-control').classList.contains('is-open')) {
      setLanguagePanel(false);
      document.querySelector('#download-language-toggle').focus();
    }
  });
  window.addEventListener('resize', () => { if (document.querySelector('#download-language-control').classList.contains('is-open')) setLanguagePanel(true); });
  document.querySelector('#download-theme-toggle').addEventListener('click', () => applyTheme(themes[(themes.indexOf(state.theme) + 1) % themes.length]));

  window.addEventListener('dali-preferences-change', () => {
    if (state.locale !== preferences.locale) applyLocale(preferences.locale, false);
    if (state.theme !== preferences.theme) applyTheme(preferences.theme, false);
  });
  applyTheme(state.theme, false);
  applyLocale(state.locale, false);
})();
