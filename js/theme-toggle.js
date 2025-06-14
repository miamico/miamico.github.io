(() => {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const stored = localStorage.getItem('theme');
  const applyIcon = () => {
    toggles.forEach(btn => {
      btn.textContent = root.classList.contains('dark') ? '☀' : '☾';
    });
  };
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
  }
  applyIcon();
  window.toggleTheme = () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    applyIcon();
  };
})();
