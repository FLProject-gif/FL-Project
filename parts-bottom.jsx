/* Landing — bottom sections: Tema, Speakers, Sponsors, Galeri, Venue, CTA, Footer */
const LBStyles = {
  section: { padding: "84px var(--gutter)", maxWidth: 1280, margin: "0 auto" },
};

function TemaAcara() {
  const isMobile = useIsMobile();
  const items = [
    ["photo-event-stage.jpg", "Religi & Keluarga", "Bisnis lebih rapi & delegasi tepat — waktu berkualitas untuk keluarga dan warisan (legacy) yang bermakna."],
    ["photo-event-talkshow.jpg", "Inspirasi Bisnis", "Agar bisnis tidak lagi owner-dependent, melainkan berjalan di atas sistem yang benar dan siap naik kelas (scale up)."],
    ["photo-event-workshop.jpg", "Keseimbangan Hidup", "Menjaga ritme kerja produktif tanpa mengabaikan kesehatan fisik, ketenangan batin, dan hubungan sosial."],
  ];
  return (
    <section id="acara" style={LBStyles.section}>
      <PWBSectionHeader runhead eyebrow="Tema Acara" title="Tiga Tema, Satu Semangat" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: 24, marginTop: 40 }}>
        {items.map(([img, t, d]) => (
          <div key={t}>
            <div style={{ height: isMobile ? 220 : 190, borderRadius: "var(--radius-lg)", backgroundImage: `url(assets/${img})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-card)" }} />
            <div style={{ background: "var(--pwb-blue-azure)", color: "#fff", borderRadius: "var(--radius-md)", padding: "12px 18px", margin: isMobile ? "12px 0 0" : "-22px 16px 0", position: "relative", textAlign: "center", fontWeight: 800, fontSize: "1.1rem", boxShadow: "var(--shadow-pop)" }}>{t}</div>
            <p style={{ margin: "16px 6px 0", fontSize: ".92rem", color: "var(--text-body)" }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Speakers() {
  const people = [
    ["Sandiaga S. Uno", "Tokoh Nasional · Motivasi"],
    ["M Fajrin Rasyid", "Co-Founder Bukalapak"],
    ["Kilala Tilaar", "CEO Martha Tilaar Group"],
    ["Ben Wirawan", "Founder Torch.id"],
    ["Dian Aryanti", "CEO Ciomy"],
    ["Ust. M Nur Maulana", "Penceramah"],
  ];
  return (
    <section id="speaker" style={{ background: "var(--pwb-blue-royal)", position: "relative", overflow: "hidden" }}>
      <div style={{ ...LBStyles.section }}>
        <div className="pwb-runhead" style={{ marginBottom: 24, color: "#fff" }}><span style={{ color: "#fff" }}>Let's Grow Together</span></div>
        <div className="pwb-eyebrow" style={{ color: "var(--pwb-gold)", marginBottom: 12 }}>Rundown Puncak Acara</div>
        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "var(--fs-h1)", letterSpacing: "-.02em", margin: 0, maxWidth: 620 }}>Belajar Langsung dari Para Praktisi & Tokoh</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28, marginTop: 44, justifyContent: "center" }}>
          {people.map(([n, r]) => (
            <PWBSpeakerCard key={n} name={n} role={<span style={{ color: "rgba(255,255,255,.78)" }}>{r}</span>} initial={n.replace(/^(Ust\.|M|Dr\.)\s*/, "")[0]} size={118} />
          ))}
        </div>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,.6)", fontSize: ".82rem", marginTop: 32 }}>*) Sebagian pembicara masih dalam konfirmasi</p>
      </div>
    </section>
  );
}

function Sponsors({ onRegister }) {
  const goSponsor = (tier) => { window.location.href = "sponsor.html?tier=" + encodeURIComponent(tier); };
  const tiers = [
    { tier: "Platinum", price: "Rp 50 jt", priceWords: "Lima Puluh Juta", forWhom: "Otomotif, Fintech, Asuransi, FMCG besar.", featured: true,
      benefits: ["Data Leads Peserta", "Free 2 booth standar (7 hari)", "Sesi presentasi 20 menit prime time", "Pemutaran iklan 60 detik", "Logo XL di videotron"] },
    { tier: "Gold", price: "Rp 35 jt", priceWords: "Tiga Puluh Lima Juta", forWhom: "Properti lokal, Waralaba, Universitas/Lembaga Pendidikan.",
      benefits: ["Data Leads Peserta", "Free 1 booth standar (7 hari)", "Pemutaran iklan 30 detik", "Logo L di videotron", { text: "Sesi panggung", ok: false }] },
    { tier: "Silver", price: "Rp 15 jt", priceWords: "Lima Belas Juta", forWhom: "Toko retail regional, supplier alat kantor/elektronik, home decor.",
      benefits: ["Free 1 booth standar (7 hari)", "Pemutaran iklan 20 detik", "Logo M di videotron", { text: "Data Leads Peserta", ok: false }, { text: "Sesi panggung", ok: false }] },
    { tier: "Bronze", price: "Rp 1 jt", priceWords: "Satu Juta", forWhom: "UMKM naik kelas, usaha jasa lokal, start-up baru.",
      benefits: ["5x Post IG Feed + 10x Stories", "Pembagian brosur / sampling", "Logo S di videotron", { text: "Booth pameran", ok: false }, { text: "Data Leads Peserta", ok: false }] },
  ];
  return (
    <section id="sponsor" style={LBStyles.section}>
      <PWBSectionHeader runhead eyebrow="Sponsorship" title="Jadilah Bagian dari Bahan Bakar Ekonomi Bekasi"
        desc="Pilih paket sponsorship yang paling cocok untuk brand Anda. Semua tier mendapat eksposur di videotron indoor & outdoor Pakuwon Mall." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))", gap: 22, marginTop: 48, alignItems: "stretch" }}>
        {tiers.map((t) => (
          <PWBSponsorTierCard key={t.tier} {...t} cta={<PWBButton variant={t.featured ? "accent" : "secondary"} full onClick={() => goSponsor(t.tier)}>Pilih {t.tier}</PWBButton>} />
        ))}
      </div>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <PWBBadge tone="neutral" size="lg">+ Standar Indoor Booth — Rp 10 jt / booth (2×2 m, 7 hari)</PWBBadge>
      </div>
    </section>
  );
}

function Galeri() {
  const imgs = ["photo-event-stage.jpg", "photo-mall-interior.jpg", "photo-event-expo.jpg", "photo-event-talkshow.jpg", "photo-event-workshop.jpg"];
  return (
    <section style={{ background: "var(--pwb-cloud)" }} className="pwb-topo">
      <div style={LBStyles.section}>
        <PWBSectionHeader eyebrow="Dokumentasi" title="Pengalaman Pesta Wirausaha Bekasi" desc="Energi, koneksi, dan terobosan dari penyelenggaraan sebelumnya." />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "180px 180px", gap: 14, marginTop: 36 }}>
          {imgs.map((im, i) => (
            <div key={im} style={{ gridColumn: i === 0 ? "span 1" : undefined, gridRow: i === 0 ? "span 2" : undefined, borderRadius: "var(--radius-md)", backgroundImage: `url(assets/${im})`, backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-sm)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Venue() {
  const isMobile = useIsMobile();
  const stats = [["300K+", "Daily Traffic"], ["70K", "Weekend Visitors"], ["1M+", "Total Impressions"]];
  return (
    <section id="lokasi" style={LBStyles.section}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <PWBSectionHeader eyebrow="The Venue" title="Pakuwon Mall Bekasi" />
          <p style={{ fontSize: "1.05rem", color: "var(--text-body)", margin: "8px 0 24px", maxWidth: 460 }}>
            Active Atrium Lt.2 — Jl. Raya Pekayon No.2, Pekayon Jaya, Bekasi Selatan, Jawa Barat 17148. Lokasi paling bergengsi & terbaru di Bekasi.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
            {stats.map(([v, l]) => (
              <div key={l} style={{ background: "var(--pwb-blue-50)", borderRadius: "var(--radius-md)", padding: "14px 18px", minWidth: 120 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--pwb-blue-royal)" }}>{v}</div>
                <div style={{ fontSize: ".78rem", color: "var(--text-muted)", fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
          <PWBButton variant="primary" onClick={() => window.open("https://maps.app.goo.gl/WQgvT9VExWCrE3DJ7?g_st=ic", "_blank", "noopener")} iconLeft={<PWBIcon name="map-pin" size={18} />}>Buka di Google Maps</PWBButton>
        </div>
        <div style={{ height: 380, borderRadius: "var(--radius-xl)", backgroundImage: "url(assets/photo-venue-pakuwon-night.jpg)", backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-card)" }} />
      </div>
    </section>
  );
}

function CTA({ onRegister }) {
  return (
    <section id="daftar" className="pwb-sky" style={{ position: "relative", overflow: "hidden", textAlign: "center" }}>
      <div style={{ position: "relative", zIndex: 2, padding: "72px var(--gutter)", maxWidth: 760, margin: "0 auto" }}>
        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-.02em", margin: 0 }}>Mari Kita Berpesta 🚀</h2>
        <p style={{ color: "rgba(255,255,255,.92)", fontSize: "1.15rem", margin: "18px 0 30px" }}>
          Tiket FREE namun kuota sangat terbatas demi menjaga kualitas networking B2B. Amankan kursi Anda sekarang.
        </p>
        <PWBButton variant="accent" size="lg" onClick={onRegister} iconRight={<PWBIcon name="arrow-right" size={20} />}>Daftar Sekarang — Kuota Terbatas</PWBButton>
      </div>
    </section>
  );
}

function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: "#0A1A33", color: "rgba(255,255,255,.78)", padding: "56px var(--gutter) 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr 1fr", gap: 32 }}>
        <div>
          <img src="assets/logo-tda-bekasi.png" alt="TDA Bekasi" style={{ height: 44, filter: "brightness(0) invert(1)", marginBottom: 16 }} />
          <p style={{ fontSize: ".9rem", maxWidth: 320 }}>Event kewirausahaan terbesar di Bekasi — wadah pengusaha untuk belajar, terhubung, dan tumbuh bersama.</p>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: ".95rem", margin: "0 0 14px" }}>Kontak</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: ".9rem" }}>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><PWBIcon name="mail" size={16} /> tangandiatasbekasi@gmail.com</li>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><PWBIcon name="phone" size={16} /> +62 838 5666 5556</li>
            <li style={{ display: "flex", gap: 8, alignItems: "center" }}><PWBIcon name="instagram" size={16} /> @tdabekasi</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: ".95rem", margin: "0 0 14px" }}>Lokasi</h4>
          <p style={{ fontSize: ".9rem", margin: 0 }}>Active Atrium Lt.2, Pakuwon Mall Bekasi<br />Pekayon Jaya, Bekasi Selatan<br />Jawa Barat 17148</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "32px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.12)", fontSize: ".8rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span>© 2026 Komunitas Tangan Di Atas (TDA) Bekasi. All rights reserved.</span>
        <span>Pesta Wirausaha Planet Bekasi 2026 · Let's Grow Together</span>
      </div>
    </footer>
  );
}

Object.assign(window, { LTemaAcara: TemaAcara, LSpeakers: Speakers, LSponsors: Sponsors, LGaleri: Galeri, LVenue: Venue, LCTA: CTA, LFooter: Footer });
