(() => {
  'use strict';
  const preferences = globalThis.DaliSitePreferences;
  const labels = {
    en: ['Language', 'Switch colour theme', 'Dark', 'Graphite dark', 'Light', 'Sky light'],
    'zh-Hans': ['语言', '切换色调主题', '深色', '石墨深色', '清透亮色', '天蓝亮色'],
    'zh-Hant': ['語言', '切換色調主題', '深色', '石墨深色', '清透亮色', '天藍亮色'],
    ja: ['言語', '配色テーマを切り替え', 'ダーク', 'グラファイト', 'ライト', 'スカイ'],
    ko: ['언어', '색상 테마 전환', '다크', '그래파이트', '라이트', '스카이'],
    fr: ['Langue', 'Changer le thème', 'Sombre', 'Graphite', 'Clair', 'Bleu ciel'],
    de: ['Sprache', 'Farbthema wechseln', 'Dunkel', 'Graphit', 'Hell', 'Himmelblau'],
    es: ['Idioma', 'Cambiar tema', 'Oscuro', 'Grafito', 'Claro', 'Azul cielo'],
    pt: ['Idioma', 'Mudar tema', 'Escuro', 'Grafite', 'Claro', 'Azul-céu'],
    nl: ['Taal', 'Thema wijzigen', 'Donker', 'Grafiet', 'Licht', 'Hemelsblauw'],
    it: ['Lingua', 'Cambia tema', 'Scuro', 'Grafite', 'Chiaro', 'Azzurro'],
    el: ['Γλώσσα', 'Αλλαγή θέματος', 'Σκούρο', 'Γραφίτης', 'Φωτεινό', 'Γαλάζιο'],
    et: ['Keel', 'Vaheta teemat', 'Tume', 'Grafiit', 'Hele', 'Taevasinine'],
    ms: ['Bahasa', 'Tukar tema', 'Gelap', 'Grafit', 'Cerah', 'Biru langit'],
    fil: ['Wika', 'Palitan ang tema', 'Madilim', 'Graphite', 'Maliwanag', 'Asul'],
    vi: ['Ngôn ngữ', 'Đổi giao diện', 'Tối', 'Than chì', 'Sáng', 'Xanh trời'],
    tr: ['Dil', 'Temayı değiştir', 'Koyu', 'Grafit', 'Açık', 'Gök mavisi']
  };
  document.querySelectorAll('[data-site-preferences-controls]').forEach((container, index) => {
    container.classList.add('site-preferences-controls');
    const control = document.createElement('div');
    control.className = 'language-control';
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'language-trigger';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', `site-language-panel-${index}`);
    const triggerCopy = document.createElement('span');
    triggerCopy.className = 'language-trigger-copy';
    const current = document.createElement('strong');
    triggerCopy.append(current);
    const chevron = document.createElement('span');
    chevron.className = 'language-trigger-chevron';
    chevron.textContent = '⌄';
    chevron.setAttribute('aria-hidden', 'true');
    trigger.append(triggerCopy, chevron);
    const panel = document.createElement('div');
    panel.id = `site-language-panel-${index}`;
    panel.className = 'language-panel';
    panel.hidden = true;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-labelledby', `site-language-title-${index}`);
    const heading = document.createElement('div');
    heading.className = 'language-panel-heading';
    const title = document.createElement('strong');
    title.id = `site-language-title-${index}`;
    heading.append(title);
    const grid = document.createElement('div');
    grid.className = 'language-grid';
    const options = preferences.languages.map(({ locale, name }) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'language-option';
      const nativeName = document.createElement('strong');
      nativeName.textContent = name;
      const translatedName = document.createElement('small');
      button.append(nativeName, translatedName);
      button.addEventListener('click', () => {
        preferences.setLocale(locale);
        setOpen(false);
        trigger.focus();
      });
      grid.append(button);
      return { locale, name, button, translatedName };
    });
    panel.append(heading, grid);
    control.append(trigger, panel);
    const theme = document.createElement('button');
    theme.type = 'button';
    theme.className = 'site-theme-toggle';
    function updatePosition() {
      panel.style.setProperty('--site-language-top', `${trigger.getBoundingClientRect().bottom + 8}px`);
    }
    function setOpen(open) {
      if (open) updatePosition();
      panel.hidden = !open;
      control.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    }
    function update() {
      const copy = labels[preferences.locale] || labels.en;
      const selected = preferences.languages.find(({ locale }) => locale === preferences.locale);
      current.textContent = selected.name;
      trigger.setAttribute('aria-label', `${copy[0]}: ${selected.name}`);
      title.textContent = copy[0];
      for (const option of options) {
        let name = option.name;
        try { name = new Intl.DisplayNames([preferences.locale], { type: 'language' }).of(option.locale); } catch { /* Use the native language name. */ }
        const active = option.locale === preferences.locale;
        option.translatedName.textContent = name;
        option.translatedName.hidden = active;
        option.button.classList.toggle('is-selected', active);
        option.button.setAttribute('aria-pressed', String(active));
        option.button.setAttribute('aria-label', active ? option.name : `${option.name} / ${name}`);
      }
      theme.textContent = preferences.themeIcons[preferences.theme];
      const themeIndex = preferences.themes.indexOf(preferences.theme);
      const nextIndex = (themeIndex + 1) % preferences.themes.length;
      const themeTitle = `${copy[1]}: ${copy[themeIndex + 2]}. ${copy[nextIndex + 2]}`;
      theme.title = themeTitle;
      theme.setAttribute('aria-label', themeTitle);
    }
    trigger.addEventListener('click', () => setOpen(panel.hidden));
    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowDown') return;
      event.preventDefault();
      setOpen(true);
      options.find(({ locale }) => locale === preferences.locale).button.focus();
    });
    theme.addEventListener('click', () => {
      const themeIndex = preferences.themes.indexOf(preferences.theme);
      preferences.setTheme(preferences.themes[(themeIndex + 1) % preferences.themes.length]);
    });
    document.addEventListener('click', (event) => { if (!control.contains(event.target)) setOpen(false); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) {
        setOpen(false);
        trigger.focus();
      }
    });
    window.addEventListener('resize', () => { if (!panel.hidden) updatePosition(); });
    container.replaceChildren(control, theme);
    window.addEventListener('dali-preferences-change', update);
    update();
  });
})();
