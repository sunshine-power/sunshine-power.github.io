const preferenceVersionKey = 'dali-showcase-preferences-version';

if (localStorage.getItem(preferenceVersionKey) !== '2026-10') {
  localStorage.setItem('dali-locale', 'en');
  localStorage.setItem('dali-legal-locale', 'en');
  localStorage.setItem('dali-theme', 'light');
  localStorage.setItem(preferenceVersionKey, '2026-10');
}
