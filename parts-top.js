/* AUTO-GENERATED from parts-top.jsx — do not edit directly */
/* Landing, top sections: Nav, Hero, Stats marquee, Tantangan, Kenapa Hadir */
const LStyles = {
  section: {
    padding: "84px var(--gutter)",
    maxWidth: 1280,
    margin: "0 auto"
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20
  }
};
function Nav({
  onRegister
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  React.useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);
  const links = [["#tantangan", "Tantangan"], ["#acara", "Acara"], ["#speaker", "Speaker"], ["#booth", "Booth"], ["#sponsor", "Sponsor"], ["#lokasi", "Lokasi"]];
  const go = (e, h) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(h);
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,.92)",
      backdropFilter: "blur(10px)",
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition: "box-shadow .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-tda-bekasi.png",
    alt: "TDA Bekasi",
    style: {
      height: 64,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      gap: 28
    }
  }, links.map(([h, t]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: ".9rem",
      color: "var(--pwb-ink)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PWBButton, {
    variant: "primary",
    size: "sm",
    onClick: onRegister,
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 16
    })
  }, "Daftar Sekarang"), isMobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      width: 42,
      height: 42,
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-subtle)",
      background: open ? "var(--pwb-blue-50)" : "#fff",
      cursor: "pointer",
      flex: "0 0 auto"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: "var(--pwb-ink)"
    }
  }))))), isMobile && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "4px var(--gutter) 14px",
      background: "rgba(255,255,255,.98)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, links.map(([h, t]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    onClick: e => go(e, h),
    style: {
      padding: "13px 4px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "1rem",
      color: "var(--pwb-ink)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, t))));
}
function Cloud({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      background: "radial-gradient(closest-side,#fff,rgba(255,255,255,0))",
      borderRadius: "50%",
      filter: "blur(2px)",
      opacity: .55,
      ...style
    }
  });
}
function Hero({
  onRegister
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "pwb-sky",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Cloud, {
    style: {
      width: 360,
      height: 200,
      top: -40,
      left: -60
    }
  }), /*#__PURE__*/React.createElement(Cloud, {
    style: {
      width: 280,
      height: 150,
      bottom: 30,
      left: "30%",
      opacity: .4
    }
  }), /*#__PURE__*/React.createElement(Cloud, {
    style: {
      width: 420,
      height: 230,
      top: 120,
      right: -120,
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1280,
      margin: "0 auto",
      padding: isMobile ? "40px var(--gutter) 48px" : "56px var(--gutter) 72px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.05fr .95fr",
      gap: isMobile ? 32 : 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pwb-pill-gold",
    style: {
      fontSize: ".95rem"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "calendar-days",
    size: 18
  }), " 27 Juli \u2013 2 Agustus 2026 \xB7 Pakuwon Mall Bekasi"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      color: "#fff",
      fontSize: "clamp(2.4rem,4.6vw,3.7rem)",
      lineHeight: 1.04,
      letterSpacing: "-.02em",
      margin: "22px 0 0"
    }
  }, "Festival Wirausaha Terbesar di ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pwb-gold)"
    }
  }, "Bekasi")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.92)",
      fontSize: "1.15rem",
      lineHeight: 1.55,
      maxWidth: 520,
      margin: "20px 0 28px"
    }
  }, "Tujuh hari perayaan komunitas Tangan Di Atas, titik temu ribuan UMKM, mentor bisnis, dan investor. Bukan sekadar bazar. Mari tumbuh bersama."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(PWBButton, {
    variant: "accent",
    size: "lg",
    onClick: onRegister,
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "rocket",
      size: 20
    })
  }, "Daftar Sekarang"), /*#__PURE__*/React.createElement(PWBButton, {
    variant: "white",
    size: "lg",
    onClick: () => document.getElementById("acara").scrollIntoView({
      behavior: "smooth"
    })
  }, "Lihat Rundown")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 36,
      flexWrap: "wrap"
    }
  }, [["5.000+", "Pengunjung"], ["10+", "Speaker"], ["7 Hari", "Multievent"], ["Rp 25 jt+", "Hadiah"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.7rem",
      color: "#fff",
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "rgba(255,255,255,.8)",
      fontWeight: 600,
      marginTop: 2
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: isMobile ? "none" : "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pwb-blue-royal)",
      borderRadius: "var(--radius-2xl)",
      padding: "22px 20px 24px",
      boxShadow: "0 30px 70px rgba(0,40,120,.4)",
      textAlign: "center",
      maxWidth: 380,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-badges-strip-blue.png",
    alt: "TDA Bekasi \xB7 To The Next Level \xB7 2 Dekade",
    style: {
      width: "100%",
      maxWidth: 280,
      height: "auto",
      margin: "0 auto 14px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-pwb-rocket-blue.png",
    alt: "Pesta Wirausaha Bekasi 2026",
    style: {
      width: "100%",
      maxWidth: 280,
      height: "auto",
      display: "block",
      margin: "0 auto"
    }
  })))));
}
function Marquee() {
  const items = ["7 Days Offline Multievent", "Free Entry", "20+ Exhibitors", "10+ Amazing Speakers", "Amazing Gamefication", "Business Matching", "500+ Member TDA", "Fun Games & Competition"];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pwb-blue-royal)",
      overflow: "hidden",
      padding: "14px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      whiteSpace: "nowrap",
      animation: "pwbmarq 28s linear infinite",
      width: "max-content"
    }
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: ".95rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pwb-gold)"
    }
  }, "\u2605"), t))), /*#__PURE__*/React.createElement("style", null, `@keyframes pwbmarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}`));
}
function Tantangan() {
  const items = [["trending-down", "Bisnis Stagnan", "Omzet tak kunjung tumbuh signifikan meski usaha sudah berjalan bertahun-tahun."], ["unplug", "Jaringan Terbatas", "Sulit menemukan koneksi level lebih tinggi untuk memperluas jangkauan bisnis."], ["compass", "Arah Belum Jelas", "Strategi lama tak lagi efektif diterapkan di era digital yang serba cepat."], ["rocket", "Ingin Scale Up", "Punya semangat besar memperluas bisnis, tapi bingung harus mulai dari mana."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "tantangan",
    style: LStyles.section
  }, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    runhead: true,
    eyebrow: "Entrepreneur Challenges",
    title: "Mengalami Ini di Bisnis Anda?",
    desc: "Banyak pengusaha terjebak rutinitas tanpa pertumbuhan yang jelas. Kenali masalahnya sebelum menemukan solusinya."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LStyles.grid4,
      marginTop: 40
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement(PWBCard, {
    key: t,
    variant: "white",
    pad: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement(PWBIconCoin, {
    tone: "soft",
    size: 56
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: ic,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.2rem",
      fontWeight: 800,
      color: "var(--text-heading)",
      margin: "18px 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: ".92rem",
      color: "var(--text-body)"
    }
  }, d)))));
}
function KenapaHadir() {
  const items = [["gauge", "Maximum Exposure", "Tampil di hadapan ribuan pengusaha, investor, dan profesional bisnis."], ["users", "Targeted Audience", "Komunitas pengusaha yang berkembang pesat, perluas jaringan & temukan partner."], ["camera", "Media Coverage", "Dukungan media partner nasional + videotron indoor & outdoor Pakuwon Mall."], ["megaphone", "Experiential Marketing", "Hadirkan produk Anda langsung ke target market lewat booth, demo, & sponsor program."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pwb-cloud)"
    },
    className: "pwb-topo"
  }, /*#__PURE__*/React.createElement("div", {
    style: LStyles.section
  }, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    runhead: true,
    eyebrow: "Why Attend",
    title: "Solusi Ekosistem untuk Pertumbuhan Eksponensial",
    desc: "Kami rancang Pesta Wirausaha Bekasi 2026 sebagai katalis nyata untuk mendorong bisnis Anda melampaui batas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...LStyles.grid4,
      marginTop: 44
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBIconCoin, {
    tone: "azure",
    size: 84,
    style: {
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: ic,
    size: 38
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1.15rem",
      fontWeight: 800,
      color: "var(--pwb-blue-700)",
      margin: "18px 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: ".9rem",
      color: "var(--text-body)"
    }
  }, d))))));
}
Object.assign(window, {
  LNav: Nav,
  LHero: Hero,
  LMarquee: Marquee,
  LTantangan: Tantangan,
  LKenapaHadir: KenapaHadir
});