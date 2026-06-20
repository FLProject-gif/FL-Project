/* Landing — top sections: Nav, Hero, Stats marquee, Tantangan, Kenapa Hadir */
const LStyles = {
  section: { padding: "84px var(--gutter)", maxWidth: 1280, margin: "0 auto" },
  grid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 },
};

function Nav({ onRegister }) {
  const [scrolled, setScrolled] = React.useState(false);
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["#tantangan", "Tantangan"], ["#acara", "Acara"], ["#speaker", "Speaker"], ["#sponsor", "Sponsor"], ["#lokasi", "Lokasi"]];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px var(--gutter)", background: "rgba(255,255,255,.92)", backdropFilter: "blur(10px)",
      boxShadow: scrolled ? "var(--shadow-sm)" : "none", transition: "box-shadow .3s",
    }}>
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="assets/logo-tda-bekasi.png" alt="TDA Bekasi" style={{ height: 52, width: "auto", display: "block" }} />
      </a>
      <nav style={{ display: isMobile ? "none" : "flex", alignItems: "center", gap: 28 }}>
        {links.map(([h, t]) => (
          <a key={h} href={h} style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: ".9rem", color: "var(--pwb-ink)" }}>{t}</a>
        ))}
      </nav>
      <PWBButton variant="primary" size="sm" onClick={onRegister} iconRight={<PWBIcon name="arrow-right" size={16} />}>Daftar Gratis</PWBButton>
    </header>
  );
}

function Cloud({ style }) {
  return <div style={{ position: "absolute", background: "radial-gradient(closest-side,#fff,rgba(255,255,255,0))", borderRadius: "50%", filter: "blur(2px)", opacity: .55, ...style }} />;
}

function Hero({ onRegister }) {
  const isMobile = useIsMobile();
  return (
    <section id="top" className="pwb-sky" style={{ position: "relative", overflow: "hidden" }}>
      <Cloud style={{ width: 360, height: 200, top: -40, left: -60 }} />
      <Cloud style={{ width: 280, height: 150, bottom: 30, left: "30%", opacity: .4 }} />
      <Cloud style={{ width: 420, height: 230, top: 120, right: -120, opacity: .35 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: isMobile ? "40px var(--gutter) 48px" : "56px var(--gutter) 72px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.05fr .95fr", gap: isMobile ? 32 : 40, alignItems: "center" }}>
        <div>
          <span className="pwb-pill-gold" style={{ fontSize: ".95rem" }}><PWBIcon name="calendar-days" size={18} /> 27 Juli – 2 Agustus 2026 · Pakuwon Mall Bekasi</span>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, color: "#fff", fontSize: "clamp(2.4rem,4.6vw,3.7rem)", lineHeight: 1.04, letterSpacing: "-.02em", margin: "22px 0 0" }}>
            Festival Wirausaha Terbesar di <span style={{ color: "var(--pwb-gold)" }}>Planet Bekasi</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,.92)", fontSize: "1.15rem", lineHeight: 1.55, maxWidth: 520, margin: "20px 0 28px" }}>
            Tujuh hari perayaan komunitas Tangan Di Atas — titik temu ribuan UMKM, mentor bisnis, dan investor. Bukan sekadar bazar. Mari tumbuh bersama.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <PWBButton variant="accent" size="lg" onClick={onRegister} iconRight={<PWBIcon name="rocket" size={20} />}>Daftar Gratis</PWBButton>
            <PWBButton variant="white" size="lg" onClick={() => document.getElementById("acara").scrollIntoView({ behavior: "smooth" })}>Lihat Rundown</PWBButton>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 36, flexWrap: "wrap" }}>
            {[["5.000+", "Pengunjung"], ["10+", "Speaker"], ["7 Hari", "Multievent"], ["Rp 25 jt+", "Hadiah"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.7rem", color: "#fff", lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: ".8rem", color: "rgba(255,255,255,.8)", fontWeight: 600, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ background: "var(--pwb-blue-royal)", borderRadius: "var(--radius-2xl)", padding: "20px 16px 8px", boxShadow: "0 30px 70px rgba(0,40,120,.4)", textAlign: "center", maxWidth: 440, width: "100%" }}>
            <img src="assets/logo-badges-strip-blue.png" alt="TDA Bekasi · To The Next Level · 2 Dekade" style={{ width: "100%", maxWidth: 320, height: "auto", marginBottom: 6 }} />
            <img src="assets/logo-pwb-rocket-blue.png" alt="Pesta Wirausaha Planet Bekasi 2026" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["7 Days Offline Multievent", "Free Entry", "20+ Exhibitors", "10+ Amazing Speakers", "Amazing Gamefication", "Business Matching", "500+ Member TDA", "Fun Games & Competition"];
  const row = [...items, ...items];
  return (
    <div style={{ background: "var(--pwb-blue-royal)", overflow: "hidden", padding: "14px 0" }}>
      <div style={{ display: "flex", gap: 40, whiteSpace: "nowrap", animation: "pwbmarq 28s linear infinite", width: "max-content" }}>
        {row.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: ".95rem" }}>
            <span style={{ color: "var(--pwb-gold)" }}>★</span>{t}
          </span>
        ))}
      </div>
      <style>{`@keyframes pwbmarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function Tantangan() {
  const items = [
    ["trending-down", "Bisnis Stagnan", "Omzet tak kunjung tumbuh signifikan meski usaha sudah berjalan bertahun-tahun."],
    ["unplug", "Jaringan Terbatas", "Sulit menemukan koneksi level lebih tinggi untuk memperluas jangkauan bisnis."],
    ["compass", "Arah Belum Jelas", "Strategi lama tak lagi efektif diterapkan di era digital yang serba cepat."],
    ["rocket", "Ingin Scale Up", "Punya semangat besar memperluas bisnis, tapi bingung harus mulai dari mana."],
  ];
  return (
    <section id="tantangan" style={LStyles.section}>
      <PWBSectionHeader runhead eyebrow="Entrepreneur Challenges" title="Mengalami Ini di Bisnis Anda?"
        desc="Banyak pengusaha terjebak rutinitas tanpa pertumbuhan yang jelas. Kenali masalahnya sebelum menemukan solusinya." />
      <div style={{ ...LStyles.grid4, marginTop: 40 }}>
        {items.map(([ic, t, d]) => (
          <PWBCard key={t} variant="white" pad="lg" interactive>
            <PWBIconCoin tone="soft" size={56}><PWBIcon name={ic} size={26} /></PWBIconCoin>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-heading)", margin: "18px 0 8px" }}>{t}</h3>
            <p style={{ margin: 0, fontSize: ".92rem", color: "var(--text-body)" }}>{d}</p>
          </PWBCard>
        ))}
      </div>
    </section>
  );
}

function KenapaHadir() {
  const items = [
    ["gauge", "Maximum Exposure", "Tampil di hadapan ribuan pengusaha, investor, dan profesional bisnis."],
    ["users", "Targeted Audience", "Komunitas pengusaha yang berkembang pesat — perluas jaringan & temukan partner."],
    ["camera", "Media Coverage", "Dukungan media partner nasional + videotron indoor & outdoor Pakuwon Mall."],
    ["megaphone", "Experiential Marketing", "Hadirkan produk Anda langsung ke target market lewat booth, demo, & sponsor program."],
  ];
  return (
    <section style={{ background: "var(--pwb-cloud)" }} className="pwb-topo">
      <div style={LStyles.section}>
        <PWBSectionHeader runhead eyebrow="Why Attend" title="Solusi Ekosistem untuk Pertumbuhan Eksponensial"
          desc="Kami rancang Pesta Wirausaha Planet Bekasi 2026 sebagai katalis nyata untuk mendorong bisnis Anda melampaui batas." />
        <div style={{ ...LStyles.grid4, marginTop: 44 }}>
          {items.map(([ic, t, d]) => (
            <div key={t} style={{ textAlign: "center" }}>
              <PWBIconCoin tone="azure" size={84} style={{ margin: "0 auto" }}><PWBIcon name={ic} size={38} /></PWBIconCoin>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--pwb-blue-700)", margin: "18px 0 8px" }}>{t}</h3>
              <p style={{ margin: 0, fontSize: ".9rem", color: "var(--text-body)" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LNav: Nav, LHero: Hero, LMarquee: Marquee, LTantangan: Tantangan, LKenapaHadir: KenapaHadir });
