"use client";
import { useState } from "react";

const sections = [
  {
    id: "pengertian",
    label: "Pengertian",
    icon: "◈",
    title: "Manajemen Aksi",
    content: [
      {
        type: "paragraph",
        text: "Manajemen aksi adalah proses pengorganisasian, pengurusan, dan pelaksanaan kegiatan dengan tujuan tertentu agar mencapai hasil dan pihak yang dituju dapat menerima informasi dengan baik.",
      },
    ],
  },
  {
    id: "fungsi",
    label: "Fungsi",
    icon: "◉",
    title: "Fungsi Manajemen Aksi",
    content: [
      {
        type: "paragraph",
        text: "Salah satu model pengorganisasian aksi adalah penyusunan kegiatan dengan jumlah massa tertentu dan bentuk acara agar mendapat perhatian dari pihak yang dituju supaya maksud tersampaikan.",
      },
    ],
  },
  {
    id: "hukum",
    label: "Landasan Hukum",
    icon: "◎",
    title: "Landasan Hukum",
    content: [
      {
        type: "paragraph",
        text: "UU No. 9 Tahun 1998 tentang kebebasan penyampaian pendapat di muka umum.",
      },
      {
        type: "subtitle",
        text: "Isi Pokok:",
      },
      {
        type: "list",
        items: [
          "Dilarang membawa benda yang membahayakan keselamatan.",
          "Menyampaikan laporan tertulis pada polisi.",
          "Surat mencakup maksud, tujuan, waktu, rute, dan jumlah massa.",
        ],
      },
    ],
  },
  {
    id: "mekanisme",
    label: "Mekanisme",
    icon: "◑",
    title: "Mekanisme Aksi",
    content: [
      {
        type: "list",
        items: [
          "Diskusi awal",
          "Diskusi lanjutan",
          "Pembentukan tim",
          "Aksi lapangan",
        ],
        numbered: true,
      },
    ],
  },
  {
    id: "terdapat",
    label: "Terdapat Aksi",
    icon: "◐",
    title: "Terdapat Aksi",
    content: [
      {
        type: "grid",
        items: [
          "Koor lapangan",
          "Orator",
          "Negosiator",
          "Agitator",
          "Logistik",
          "Kreatif",
          "Humas",
          "Medis",
          "Border keamanan",
          "Dokumenter",
        ],
      },
    ],
  },
  {
    id: "merancang",
    label: "Merancang",
    icon: "◇",
    title: "Merancang Aksi",
    content: [
      {
        type: "list",
        items: [
          "Planning",
          "Perlengkapan",
          "Pelaksanaan",
          "Kegiatan pasca aksi",
        ],
        numbered: true,
      },
    ],
  },
  {
    id: "perhatikan",
    label: "Hal Penting",
    icon: "◆",
    title: "Hal yang Harus Diperhatikan",
    content: [
      {
        type: "list",
        items: [
          "Tema / grand issue",
          "Susunan anggota",
          "Skenario dan rute",
          "Pembentukan",
          "Format / bentuk aksi",
        ],
      },
    ],
  },
];

export default function ManajemenAksiBlog() {
  const [active, setActive] = useState("pengertian");
  const [menuOpen, setMenuOpen] = useState(false);

  const current = sections.find((s) => s.id === active);

  const renderContent = (content) =>
    content.map((block, i) => {
      if (block.type === "paragraph")
        return (
          <p key={i} className="body-text">
            {block.text}
          </p>
        );
      if (block.type === "subtitle")
        return (
          <p key={i} className="subtitle-text">
            {block.text}
          </p>
        );
      if (block.type === "list")
        return (
          <ul key={i} className={`content-list ${block.numbered ? "numbered" : ""}`}>
            {block.items.map((item, j) => (
              <li key={j} className="list-item">
                <span className="list-marker">{block.numbered ? `0${j + 1}` : "—"}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      if (block.type === "grid")
        return (
          <div key={i} className="role-grid">
            {block.items.map((item, j) => (
              <div key={j} className="role-card">
                <span className="role-num">{String(j + 1).padStart(2, "0")}</span>
                <span className="role-name">{item}</span>
              </div>
            ))}
          </div>
        );
      return null;
    });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0f0e0d;
          --paper: #f5f0e8;
          --cream: #ede8dc;
          --accent: #c1440e;
          --accent-muted: #e8c9bc;
          --mid: #7a7166;
          --rule: #d4cfc4;
          --mono: 'DM Mono', monospace;
          --serif: 'Playfair Display', serif;
          --sans: 'DM Sans', sans-serif;
        }

        html, body { height: 100%; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--sans);
          -webkit-font-smoothing: antialiased;
        }

        /* ── LAYOUT ── */
        .shell {
          display: grid;
          grid-template-columns: 260px 1fr;
          grid-template-rows: auto 1fr;
          min-height: 100vh;
        }

        /* ── HEADER ── */
        .header {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 36px;
          border-bottom: 1px solid var(--rule);
          background: var(--paper);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-brand {
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .brand-mark {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          border: 1px solid var(--accent);
          padding: 3px 8px;
        }

        .brand-title {
          font-family: var(--serif);
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .header-meta {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--mid);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: right;
          line-height: 1.8;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--ink);
          transition: all 0.3s;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          border-right: 1px solid var(--rule);
          padding: 32px 0;
          position: sticky;
          top: 65px;
          height: calc(100vh - 65px);
          overflow-y: auto;
          background: var(--paper);
        }

        .sidebar-label {
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mid);
          padding: 0 28px;
          margin-bottom: 16px;
        }

        .nav-list { list-style: none; }

        .nav-item button {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 28px;
          font-family: var(--sans);
          font-size: 13.5px;
          font-weight: 400;
          color: var(--mid);
          transition: all 0.18s ease;
          border-left: 2px solid transparent;
          position: relative;
        }

        .nav-item button:hover {
          color: var(--ink);
          background: var(--cream);
        }

        .nav-item.active button {
          color: var(--ink);
          font-weight: 500;
          border-left-color: var(--accent);
          background: var(--cream);
        }

        .nav-icon {
          font-size: 14px;
          color: var(--accent);
          flex-shrink: 0;
          opacity: 0.7;
        }

        .nav-item.active .nav-icon { opacity: 1; }

        .sidebar-divider {
          height: 1px;
          background: var(--rule);
          margin: 20px 28px;
        }

        /* ── MAIN ── */
        .main {
          padding: 52px 60px;
          max-width: 760px;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-eyebrow {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }

        .section-title {
          font-family: var(--serif);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--ink);
        }

        .section-rule {
          width: 40px;
          height: 2px;
          background: var(--accent);
          margin-top: 20px;
        }

        /* ── CONTENT BLOCKS ── */
        .body-text {
          font-family: var(--sans);
          font-size: 15.5px;
          font-weight: 300;
          line-height: 1.85;
          color: #2a2520;
          margin-bottom: 24px;
          max-width: 600px;
        }

        .subtitle-text {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--mid);
          margin: 28px 0 14px;
        }

        .content-list { list-style: none; margin-bottom: 8px; }

        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 12px 0;
          border-bottom: 1px solid var(--rule);
          font-size: 15px;
          font-weight: 300;
          line-height: 1.5;
          color: #2a2520;
        }

        .list-item:first-child { border-top: 1px solid var(--rule); }

        .list-marker {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          min-width: 24px;
        }

        /* ── ROLE GRID ── */
        .role-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1px;
          background: var(--rule);
          border: 1px solid var(--rule);
          margin-top: 4px;
        }

        .role-card {
          background: var(--paper);
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: background 0.15s;
        }

        .role-card:hover { background: var(--cream); }

        .role-num {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--accent);
          letter-spacing: 0.1em;
        }

        .role-name {
          font-size: 14px;
          font-weight: 400;
          color: var(--ink);
        }

        /* ── FOOTER ── */
        .footer {
          grid-column: 1 / -1;
          border-top: 1px solid var(--rule);
          padding: 20px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-text {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--mid);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .footer-law {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--accent);
          letter-spacing: 0.08em;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .shell {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
          }

          .header { padding: 16px 20px; }

          .hamburger { display: flex; }

          .header-meta { display: none; }

          .sidebar {
            position: fixed;
            top: 65px;
            left: 0;
            width: 100%;
            height: calc(100vh - 65px);
            z-index: 40;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            border-right: none;
            border-bottom: 1px solid var(--rule);
          }

          .sidebar.open { transform: translateX(0); }

          .main {
            padding: 36px 20px;
            max-width: 100%;
          }

          .footer { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>

      <div className="shell">
        {/* HEADER */}
        <header className="header">
          <div className="header-brand">
            <span className="brand-mark">Materi</span>
            <span className="brand-title">Manajemen Aksi</span>
          </div>
          <div className="header-meta">
            Organisasi & Pergerakan<br />
            UU No. 9 / 1998
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
          </button>
        </header>

        {/* SIDEBAR */}
        <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
          <p className="sidebar-label">Daftar Materi</p>
          <nav>
            <ul className="nav-list">
              {sections.map((s, i) => (
                <li key={s.id} className={`nav-item ${active === s.id ? "active" : ""}`}>
                  <button
                    onClick={() => {
                      setActive(s.id);
                      setMenuOpen(false);
                    }}
                  >
                    <span className="nav-icon">{s.icon}</span>
                    {s.label}
                  </button>
                  {i === 1 && <div className="sidebar-divider" />}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main">
          <div className="section-header">
            <p className="section-eyebrow">
              {String(sections.findIndex((s) => s.id === active) + 1).padStart(2, "0")} /{" "}
              {String(sections.length).padStart(2, "0")}
            </p>
            <h1 className="section-title">{current.title}</h1>
            <div className="section-rule" />
          </div>

          <div>{renderContent(current.content)}</div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <span className="footer-text">© 2025 — Manajemen Aksi</span>
          <span className="footer-law">UU No. 9 Tahun 1998</span>
        </footer>
      </div>
    </>
  );
}