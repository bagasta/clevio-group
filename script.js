const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('#primary-nav');
const header = document.querySelector('.site-header');
const navLinks = [...(navigation?.querySelectorAll('a[href^="#"]') ?? [])];
const navSections = navLinks
  .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
  .filter(({ section }) => section);
const sectionFor = (id) => navSections.find(({ section }) => section.id === id)?.section;

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
};

const syncActiveNav = () => {
  const impact = sectionFor('impact');
  const readingPoint = window.scrollY + (header?.offsetHeight ?? 0) + 48;
  const milestones = [
    { id: 'home', element: sectionFor('home') },
    { id: 'group', element: sectionFor('group') },
    { id: 'about', element: sectionFor('about') },
    { id: 'impact', element: impact, offset: impact ? impact.offsetHeight * .56 : 0 },
    { id: 'contact', element: sectionFor('contact') },
  ];
  const active = milestones.reduce((current, { id, element, offset = 0 }) => {
    if (!element) return current;
    const start = element.getBoundingClientRect().top + window.scrollY + offset;
    return readingPoint >= start ? id : current;
  }, 'home');
  const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
  setActiveNav(isAtPageEnd ? 'contact' : active);
};

let scrollTicking = false;
const requestNavSync = () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => { syncActiveNav(); scrollTicking = false; });
};
window.addEventListener('scroll', requestNavSync, { passive: true });
window.addEventListener('resize', requestNavSync, { passive: true });
window.addEventListener('hashchange', requestNavSync);
syncActiveNav();
requestNavSync();
window.addEventListener('load', requestNavSync, { once: true });

menuButton?.addEventListener('click', () => { const isOpen = navigation.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(isOpen)); menuButton.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi'); });
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { const id = link.getAttribute('href')?.slice(1); if (id) setActiveNav(id); navigation.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded', 'false'); menuButton?.setAttribute('aria-label', 'Buka navigasi'); }));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { navigation?.classList.remove('is-open'); menuButton?.setAttribute('aria-expanded', 'false'); menuButton?.setAttribute('aria-label', 'Buka navigasi'); menuButton?.focus(); } });
