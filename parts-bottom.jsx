/* Landing, bottom sections: Tema, Speakers, Sponsors, Galeri, Venue, CTA, Footer */
const LBStyles = {
  section: { padding: "84px var(--gutter)", maxWidth: 1280, margin: "0 auto" },
};

function TemaAcara() {
  const isMobile = useIsMobile();
  const items = [
    ["photo-event-stage.jpg", "Religi & Keluarga", "Bisnis lebih rapi & delegasi tepat, waktu berkualitas untuk keluarga dan warisan (legacy) yang bermakna."],
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
  const isMobile = useIsMobile();
  // [nama, peran, file foto di assets/]. Foto tampil otomatis saat file tersedia; jika belum, tampil inisial.
  const people = [
    ["Ustad Nur Maulana", "Penceramah", "speaker-nur-maulana.jpg"],
    ["M Fajrin Rasyid", "Co-Founder Bukalapak", "speaker-fajrin.jpg"],
    ["Kilala Tilaar", "CEO Martha Tilaar Group", "speaker-kilala.jpg"],
    ["Ben Wirawan", "Founder Torch.id", "speaker-ben.jpg"],
    ["Dwi Aryanti", "CEO Ciomy", "speaker-dwi.jpg"],
    ["M. Hadiyatuloh", "Founder Brighty", "speaker-hadiyatuloh.jpg"],
    ["Dhony Pratama", "Founder Susu Mbok Darmi", "speaker-dhony.jpg"],
    ["Adyhtia Pratama", "", "speaker-adyhtia.jpg"],
    ["Coach Dr Fahmi", "", "speaker-fahmi.jpg"],
    ["M Yusuf Supriadi", "", "speaker-yusuf.jpg"],
    ["Suhu Wan", "", "speaker-suhu-wan.jpg"],
    ["Azfar Reza", "Founder Jilbrave", "speaker-azfar.jpg"],
    ["Leo Giovanni", "Content Creator & Founder Clippo.id", "speaker-leo.jpg"],
    ["Samuel Christ", "Content Creator & Founder Seefluencer", "speaker-samuel.jpg"],
    ["Aviwkila", "Bintang Tamu · Penyanyi", "speaker-aviwkila.jpg"],
    ["Surya Paramita", "Produser Film Sore", "speaker-surya.jpg"],
  ];
  return (
    <section id="speaker" style={{ background: "var(--pwb-blue-royal)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "84px var(--gutter) 0" }}>
        <div className="pwb-runhead" style={{ marginBottom: 24, color: "#fff" }}><span style={{ color: "#fff" }}>Let's Grow Together</span></div>
        <div className="pwb-eyebrow" style={{ color: "var(--pwb-gold)", marginBottom: 12 }}>Rundown Puncak Acara</div>
        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "var(--fs-h1)", letterSpacing: "-.02em", margin: 0, maxWidth: 620 }}>Belajar Langsung dari Para Praktisi & Tokoh</h2>
      </div>
      {[
        { items: people.slice(0, Math.ceil(people.length / 2)), dur: isMobile ? 44 : 74, rev: false, mt: 48 },
        { items: people.slice(Math.ceil(people.length / 2)), dur: isMobile ? 38 : 62, rev: true, mt: isMobile ? 16 : 24 },
      ].map((row, ri) => (
        <div key={ri} className="pwb-spk-viewport" style={{ overflow: "hidden", marginTop: row.mt, WebkitMaskImage: "linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)" }}>
          <div className="pwb-spk-track" style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? 22 : 32, width: "max-content", padding: "6px 18px", animation: `pwbspk ${row.dur}s linear infinite${row.rev ? " reverse" : ""}` }}>
            {[...row.items, ...row.items].map(([n, r, photo], i) => (
              <PWBSpeakerCard key={i} name={n} role={r ? <span style={{ color: "rgba(255,255,255,.78)" }}>{r}</span> : undefined} src={photo ? "assets/" + photo : undefined} initial={n.replace(/^(Ust\.|Dr\.|M\.?)\s*/, "")[0]} size={isMobile ? 118 : 134} />
            ))}
          </div>
        </div>
      ))}
      <div style={{ height: 84 }} />
      <style>{`@keyframes pwbspk{from{transform:translateX(0)}to{transform:translateX(-50%)}}.pwb-spk-track:hover{animation-play-state:paused}@media (prefers-reduced-motion:reduce){.pwb-spk-viewport{overflow-x:auto}.pwb-spk-track{animation:none}}`}</style>
    </section>
  );
}

function Sponsors({ onRegister }) {
  const isMobile = useIsMobile();
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
    </section>
  );
}

function Booth() {
  const isMobile = useIsMobile();
  const goBooth = () => { window.location.href = "sponsor.html?tier=Booth"; };
  return (
    <section id="booth" style={{
      backgroundColor: "var(--pwb-blue-royal)",
      backgroundImage: "linear-gradient(115deg, rgba(0,28,86,.92) 0%, rgba(0,67,190,.74) 48%, rgba(0,91,252,.42) 100%), url(assets/photo-booth.jpg)",
      backgroundSize: "cover", backgroundPosition: "center",
    }}>
      <div style={{ ...LBStyles.section, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 16 : 28, marginBottom: isMobile ? 28 : 40 }}>
          <span style={{ flex: 1, height: 2, background: "rgba(255,255,255,.28)", borderRadius: 2 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: isMobile ? "1.05rem" : "1.4rem", color: "#fff", whiteSpace: "nowrap", letterSpacing: ".01em" }}>Let's Grow Together</span>
        </div>
        <div className="pwb-eyebrow" style={{ color: "var(--pwb-gold)", marginBottom: 14 }}>Booth Pameran · À La Carte</div>
        <h2 style={{ fontSize: "var(--fs-h1)", fontWeight: 800, letterSpacing: "-.02em", margin: 0, maxWidth: 640, lineHeight: 1.1, color: "#fff", textShadow: "0 2px 14px rgba(0,16,52,.55)" }}>Buka Booth, Jualan Langsung ke Ribuan Pengunjung</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "rgba(255,255,255,.92)", maxWidth: 600, margin: "16px 0 0" }}>
          Tanpa harus ambil paket sponsorship. Sewa booth standar <strong>2×2 m</strong> di lokasi strategis. Sudah termasuk meja, kursi, listrik, &amp; nama brand di denah acara.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.6rem", lineHeight: 1 }}>Rp 7 jt</div>
            <div style={{ fontSize: ".85rem", color: "rgba(255,255,255,.85)", fontWeight: 600, marginTop: 2 }}>selama acara · 7 hari</div>
          </div>
          <PWBButton variant="accent" size="lg" onClick={goBooth} iconRight={<PWBIcon name="arrow-right" size={18} />}>Pilih Booth</PWBButton>
        </div>
      </div>
    </section>
  );
}

function Kolaborasi() {
  const isMobile = useIsMobile();
  // [nama, file logo di assets/]. Tile menampilkan ikon placeholder sampai file logo tersedia.
  const partners = [
    ["GENPRO Kota Bekasi", "partner-genpro.png"],
    ["KPMI Kota Bekasi", "partner-kpmi.png"],
    ["Jaringan Pengusaha Bekasi", "partner-jpn-bekasi.png"],
    ["BBPVP CEVEST Bekasi", "partner-bbpvp-cevest.png"],
    ["HIPMI Kota Bekasi", "partner-hipmi.png"],
    ["APKULINDO", "partner-apkulindo.png"],
    ["Teman Trader", "partner-teman-trader.png"],
    ["IKABOGA Bekasi", "partner-ikaboga.png"],
    ["Hijabersmom Community Bekasi", "partner-hijabersmom.png"],
    ["The Unlimited Space", "partner-unlimited-space.png"],
    ["Gemantara Indonesia", "partner-gemantara.png"],
    ["Genggam Tangan Indonesia", "partner-genggam-tangan.png"],
    ["Jawara Muda Bekasi", "partner-jawara-muda.png"],
    ["RECOOK.ID", "partner-recook.png"],
  ];
  return (
    <section id="kolaborasi" style={{ background: "var(--pwb-cloud)" }} className="pwb-topo">
      <div style={LBStyles.section}>
        <PWBSectionHeader runhead align="center" eyebrow="Kolaborasi Komunitas" title="Didukung Komunitas &amp; Mitra"
          desc="Pesta Wirausaha Bekasi 2026 terselenggara bersama jejaring komunitas pengusaha &amp; mitra strategis di Bekasi dan sekitarnya." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%," + (isMobile ? "130px" : "150px") + "),1fr))", gap: 24, marginTop: 44, justifyItems: "center" }}>
          {partners.map(([name, logo]) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%", maxWidth: 170 }}>
              <div style={{ position: "relative", width: 116, height: 116, borderRadius: "50%", background: "#fff", boxShadow: "var(--shadow-card)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flex: "0 0 auto", border: "1px solid var(--border-subtle)" }}>
                <PWBIcon name="users-round" size={40} style={{ color: "var(--pwb-blue-azure)" }} />
                <img src={"assets/" + logo} alt={name} onError={(e) => { e.currentTarget.style.display = "none"; }} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", padding: 16, background: "#fff" }} />
              </div>
              <span style={{ background: "var(--pwb-blue-azure)", color: "#fff", borderRadius: "var(--radius-pill)", padding: "6px 14px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: ".76rem", textAlign: "center", lineHeight: 1.2 }}>{name}</span>
            </div>
          ))}
        </div>
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
            Active Atrium Lt.2, Jl. Raya Pekayon No.2, Pekayon Jaya, Bekasi Selatan, Jawa Barat 17148. Lokasi paling bergengsi & terbaru di Bekasi.
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
        <PWBButton variant="accent" size="lg" onClick={onRegister} iconRight={<PWBIcon name="arrow-right" size={20} />}>Daftar Sekarang, Kuota Terbatas</PWBButton>
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
          <p style={{ fontSize: ".9rem", maxWidth: 320 }}>Event kewirausahaan terbesar di Bekasi, wadah pengusaha untuk belajar, terhubung, dan tumbuh bersama.</p>
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
        <span>Pesta Wirausaha Bekasi 2026 · Let's Grow Together</span>
      </div>
    </footer>
  );
}

Object.assign(window, { LTemaAcara: TemaAcara, LSpeakers: Speakers, LSponsors: Sponsors, LBooth: Booth, LKolaborasi: Kolaborasi, LGaleri: Galeri, LVenue: Venue, LCTA: CTA, LFooter: Footer });
