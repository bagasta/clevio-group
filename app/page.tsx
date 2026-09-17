'use client';

import { useEffect, useState } from 'react';

const companies = [
  { name: 'Clevio AI Staff', label: '01', note: '[REAL COMPANY DESCRIPTION]' },
  { name: 'Clevio AI Pro', label: '02', note: '[REAL COMPANY DESCRIPTION]' },
  { name: 'Clevio Social Innovation', label: '03', note: '[REAL COMPANY DESCRIPTION]' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#content">Lewati ke konten</a>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="PT Clevio, kembali ke awal">
          <span className="wordmark-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>PT Clevio</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a><a href="#perusahaan">Tiga Perusahaan</a><a href="#informasi">Informasi Perusahaan</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={dark ? 'Gunakan tampilan terang' : 'Gunakan tampilan gelap'} aria-pressed={dark}>{dark ? 'Terang' : 'Gelap'}</button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? 'Tutup' : 'Menu'}</button>
        </div>
      </header>

      <div id="top" className="hero-shell">
        <section className="hero" aria-labelledby="hero-title">
          <p className="section-kicker">Company overview</p>
          <h1 id="hero-title">Menyatukan arah bagi tiga perusahaan dalam ekosistem Clevio.</h1>
          <div className="hero-footer"><p>PT Clevio adalah induk dari Clevio AI Staff, Clevio AI Pro, dan Clevio Social Innovation.</p><a className="primary-link" href="#perusahaan">Lihat tiga perusahaan</a></div>
        </section>
        <aside className="line-motif" aria-label="Tiga perusahaan dalam PT Clevio"><span>01</span><i /><span>02</span><i /><span>03</span><i /></aside>
      </div>

      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigasi seluler"><a href="#tentang" onClick={closeMenu}>Tentang PT Clevio</a><a href="#perusahaan" onClick={closeMenu}>Tiga Perusahaan</a><a href="#informasi" onClick={closeMenu}>Informasi Perusahaan</a></nav>}

      <div id="content">
        <section id="tentang" className="statement-section" aria-labelledby="about-title"><div className="section-index">A / 01</div><div><p className="section-kicker">Tentang PT Clevio</p><h2 id="about-title">Satu grup, tiga identitas perusahaan.</h2><p className="large-copy">Halaman ini memberi konteks awal mengenai struktur PT Clevio. Informasi layanan, fokus, dan kontak setiap perusahaan akan ditampilkan setelah materi resmi tersedia.</p></div></section>
        <section id="perusahaan" className="companies-section" aria-labelledby="companies-title"><div className="companies-heading"><p className="section-kicker">Struktur grup</p><h2 id="companies-title">Tiga perusahaan, satu halaman pengantar.</h2></div><div className="company-list">{companies.map((company, index) => <article className={`company-row company-row-${index + 1}`} key={company.name}><span className="company-number">{company.label}</span><div><p className="company-type">Company profile</p><h3>{company.name}</h3></div><p className="company-note">{company.note}</p></article>)}</div></section>
        <section id="informasi" className="information-section" aria-labelledby="information-title"><div className="information-copy"><p className="section-kicker">Informasi perusahaan</p><h2 id="information-title">Ruang untuk informasi resmi PT Clevio.</h2><p>Tambahkan profil perusahaan, alamat kantor, kanal komunikasi, dan tautan resmi sebelum situs dipublikasikan.</p></div><div className="information-placeholder" role="note"><span>[REAL COMPANY PROFILE]</span><span>[REAL OFFICE ADDRESS]</span><span>[REAL CONTACT CHANNEL]</span></div></section>
      </div>
      <footer><span>PT Clevio</span><span>Group overview, draft information architecture</span></footer>
    </main>
  );
}
