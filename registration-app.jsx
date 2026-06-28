/* Registration kit, multi-step free-ticket flow for PWB 2026 */
const RStyles = {
  shell: { maxWidth: 1100, margin: "0 auto", padding: "28px var(--gutter) 64px", display: "grid", gridTemplateColumns: "1.5fr .9fr", gap: 28, alignItems: "start" },
};

const TICKETS = [
  { id: "growth", name: "Growth Pass", price: "Rp 50.000", icon: "rocket", desc: "Datang untuk belajar & berkembang bersama para praktisi.", note: "Accelerate Your Growth", href: "https://pwbekasi.com/login", featured: true, benefits: ["Akses rekaman seluruh materi, selamanya", "Handbook materi ajar dari seluruh pemateri", "Kesempatan doorprize jutaan rupiah", "Peluang pendapatan tambahan dari affiliator hingga jutaan rupiah"] },
  { id: "visitor", name: "Visitor Pass", price: "", icon: "ticket", desc: "Datang, melihat, dan menikmati seluruh rangkaian acara.", note: "Explore the Event", benefits: [{ text: "Tanpa benefit tambahan", ok: false }] },
];
const SESSIONS = ["Inspirasi Bisnis", "Religi & Keluarga", "Keseimbangan Hidup", "Business Matching", "Workshop", "Entertainment"];
// Isi link grup WhatsApp di sini untuk mengaktifkan tombolnya (kosong = tombol nonaktif).
const WA_GROUP_LINK = "";

function Stepper({ step, steps }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", gap: 0, marginBottom: isMobile ? 22 : 26 }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: isMobile ? 6 : 10, flex: isMobile ? "0 0 auto" : undefined, width: isMobile ? 66 : undefined }}>
            <span style={{
              width: 30, height: 30, flex: "0 0 auto", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: ".85rem",
              background: i <= step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-100)",
              color: i <= step ? "#fff" : "var(--text-muted)", transition: "all .3s",
            }}>{i < step ? "✓" : i + 1}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: isMobile ? ".72rem" : ".9rem", textAlign: isMobile ? "center" : "left", lineHeight: 1.15, color: i <= step ? "var(--text-heading)" : "var(--text-muted)" }}>{s}</span>
          </div>
          {i < steps.length - 1 && <span style={{ flex: 1, height: 2, margin: isMobile ? "15px 4px 0" : "0 14px", background: i < step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-200)" }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label style={{ display: "block", marginBottom: 16 }}>
      <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: ".82rem", color: "var(--text-heading)", marginBottom: 6 }}>{label}</span>
      {children}
      {error && <span style={{ display: "block", marginTop: 5, fontSize: ".76rem", fontWeight: 600, color: "var(--pwb-red)" }}>{error}</span>}
    </label>
  );
}
const inputStyle = {
  width: "100%", padding: "12px 14px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border-strong)",
  fontFamily: "var(--font-sans)", fontSize: ".95rem", color: "var(--text-heading)", background: "#fff", outline: "none", boxSizing: "border-box",
};

function App() {
  useLucide();
  const isMobile = useIsMobile();
  const [step, setStep] = React.useState(0);
  const [ticket, setTicket] = React.useState("growth");
  const [form, setForm] = React.useState({ nama: "", email: "", wa: "", usaha: "", provinsi: "", kota: "", tanggal: "" });
  const [sessions, setSessions] = React.useState([]);
  const steps = ["Pilih Tiket & Data", "E-Ticket"];
  const selected = TICKETS.find(t => t.id === ticket);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleSession = (s) => setSessions(a => a.includes(s) ? a.filter(x => x !== s) : [...a, s]);

  // Wilayah Indonesia (emsifa), dropdown bertingkat Provinsi → Kota/Kabupaten.
  const GEO = "https://www.emsifa.com/api-wilayah-indonesia/api";
  const [provinces, setProvinces] = React.useState([]);
  const [regencies, setRegencies] = React.useState([]);
  const [provId, setProvId] = React.useState("");
  const [geoError, setGeoError] = React.useState(false);
  const onProvince = (id) => {
    setProvId(id);
    const p = provinces.find(x => String(x.id) === String(id));
    setForm(f => ({ ...f, provinsi: p ? p.name : "", kota: "" }));
    setRegencies([]);
    if (id) fetch(GEO + "/regencies/" + id + ".json").then(r => r.json()).then(setRegencies).catch(() => {});
  };
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const waDigits = form.wa.replace(/[\s\-+().]/g, "");
  const waValid = /^\d{8,15}$/.test(waDigits);
  const emailErr = form.email && !emailValid ? "Email tidak valid, gunakan format nama@domain (mis. nama@gmail.com)." : "";
  const waErr = form.wa && !waValid ? "Nomor WhatsApp hanya angka, 8–15 digit (mis. 0812xxxxxxx)." : "";
  const canNext = step === 0 ? (!!ticket && (ticket !== "visitor" || (form.nama && emailValid && waValid))) : true;

  const submitRegistration = () => {
    const payload = {
      "form-name": "pwb-registration",
      nama: form.nama, email: form.email, wa: form.wa, usaha: form.usaha,
      kota: form.kota, provinsi: form.provinsi, tanggal: form.tanggal,
      ticket: selected.name, sessions: sessions.join(", "),
    };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload).toString(),
    }).catch(() => {});
    // Catat juga ke Google Sheet (tab "Pendaftar") via Apps Script, fire & forget.
    try {
      const q = new URLSearchParams({
        mode: "register", id: ticketCode, nama: form.nama, ticket: selected.name,
        email: form.email, wa: form.wa, tanggal: form.tanggal,
        provinsi: form.provinsi, kota: form.kota, usaha: form.usaha, sessions: sessions.join(", "),
      }).toString();
      fetch(SCAN_LOG_URL + "?" + q, { mode: "no-cors" }).catch(() => {});
    } catch (e) {}
  };
  const handleNext = () => {
    if (step === 0) {
      if (selected.href) { window.location.href = selected.href; return; }
      submitRegistration();
    }
    setStep(step + 1);
  };
  // Kode tiket unik per peserta: prefiks nama + hash stabil dari email/WA/nama
  // (mencegah ID kembar yang memicu "sudah check-in" palsu).
  const codeHash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return ("000" + h.toString(36).toUpperCase()).slice(-4); };
  const ticketCode = "PWB26-" + (form.nama || "PESERTA").slice(0, 3).toUpperCase() + "-" + codeHash((form.email || "") + "|" + (form.wa || "") + "|" + (form.nama || ""));
  const verifyUrl = "https://pwbekasi.com/cek?id=" + ticketCode;
  // Google Apps Script web app, tiap QR di-scan akan mencatat data peserta ke Google Sheet.
  const SCAN_LOG_URL = "https://script.google.com/macros/s/AKfycby3guXKgk5xzvibr_0lPbN3asfFZNjmP2bgh8aW7ftzmvVxHFT4NfUVMxcF8D3c7uu2Cg/exec";
  const qrPayload = SCAN_LOG_URL
    ? SCAN_LOG_URL + "?" + new URLSearchParams({ id: ticketCode, nama: form.nama || "", ticket: selected.name, tanggal: form.tanggal || "", email: form.email || "", wa: form.wa || "", kota: form.kota || "", provinsi: form.provinsi || "" }).toString()
    : verifyUrl;
  const qrSrc = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=" + encodeURIComponent(qrPayload);
  const qrDownloadSrc = "https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=12&data=" + encodeURIComponent(qrPayload);
  const downloadBlob = (blob, name) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  // Compose a full e-ticket image (template + peserta data + QR) and download it.
  const saveQr = async () => {
    try {
      const res = await fetch(qrDownloadSrc);
      const qrBlob = await res.blob();
      const qrUrl = URL.createObjectURL(qrBlob);
      const qrImg = await new Promise((resolve, reject) => {
        const im = new Image(); im.onload = () => resolve(im); im.onerror = reject; im.src = qrUrl;
      });

      const scale = 2, W = 1000, H = 600;
      const canvas = document.createElement("canvas");
      canvas.width = W * scale; canvas.height = H * scale;
      const ctx = canvas.getContext("2d");
      ctx.scale(scale, scale);
      ctx.textBaseline = "top";
      const royal = "#005BFC", azure = "#0097FE", ink = "#0F1419", muted = "#6B7B91", hair = "#E2ECF7";
      const rr = (x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };

      ctx.fillStyle = royal; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#fff"; rr(36, 36, W - 72, H - 72, 32); ctx.fill();

      ctx.fillStyle = royal; ctx.font = "700 24px sans-serif";
      ctx.fillText("PESTA WIRAUSAHA PLANET BEKASI 2026", 72, 70);
      ctx.fillStyle = hair; ctx.fillRect(72, 108, W - 144, 2);

      const qrSize = 300, qx = 80, qy = 158;
      ctx.fillStyle = ink; rr(qx - 10, qy - 10, qrSize + 20, qrSize + 20, 16); ctx.fill();
      ctx.fillStyle = "#fff"; rr(qx - 2, qy - 2, qrSize + 4, qrSize + 4, 8); ctx.fill();
      ctx.drawImage(qrImg, qx, qy, qrSize, qrSize);
      URL.revokeObjectURL(qrUrl);

      const tx = qx + qrSize + 56;
      const maxW = (W - 72) - tx;
      let ty = 166;
      ctx.fillStyle = azure; ctx.font = "800 24px sans-serif";
      ctx.fillText((selected.name || "").toUpperCase(), tx, ty); ty += 46;
      const name = form.nama || "Peserta PWB";
      let ns = 46; ctx.font = "800 " + ns + "px sans-serif";
      while (ns > 26 && ctx.measureText(name).width > maxW) { ns -= 2; ctx.font = "800 " + ns + "px sans-serif"; }
      ctx.fillStyle = ink; ctx.fillText(name, tx, ty); ty += ns + 22;
      ctx.fillStyle = muted; ctx.font = "500 24px sans-serif";
      ctx.fillText("27 Juli – 2 Agustus 2026", tx, ty); ty += 34;
      ctx.fillText("Pakuwon Mall Bekasi · Lt.2", tx, ty); ty += 48;
      ctx.fillStyle = royal; ctx.font = "800 34px sans-serif";
      ctx.fillText("#" + ticketCode, tx, ty);

      ctx.fillStyle = muted; ctx.font = "500 22px sans-serif";
      ctx.fillText("Tunjukkan QR ini di pintu masuk acara.", 80, H - 92);

      canvas.toBlob((b) => downloadBlob(b, "e-ticket-" + ticketCode + ".png"), "image/png");
    } catch (e) {
      window.open(qrDownloadSrc, "_blank", "noopener");
    }
  };

  return (
    <div>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px var(--gutter)", background: "#fff", boxShadow: "var(--shadow-sm)", position: "sticky", top: 0, zIndex: 10 }}>
        <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-heading)", fontWeight: 700, fontSize: ".9rem" }}>
          <PWBIcon name="arrow-left" size={18} /> <img src="assets/logo-tda-bekasi.png" style={{ height: 32 }} alt="TDA Bekasi" />
        </a>
        <PWBBadge tone="brand">Pendaftaran PWB 2026</PWBBadge>
      </header>

      <div style={{ ...RStyles.shell, gridTemplateColumns: isMobile ? "1fr" : "1.5fr .9fr" }}>
        <PWBCard variant="white" pad={isMobile ? "lg" : "xl"} style={{ minHeight: 440 }}>
          <Stepper step={step} steps={steps} />

          {step === 0 && (
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 6px", color: "var(--text-heading)" }}>Pilih jenis tiket Anda</h2>
              <p style={{ margin: "0 0 22px", color: "var(--text-body)", fontSize: ".95rem" }}>Pilih tiket sesuai kebutuhan Anda, datang menikmati acara, atau ikut belajar &amp; berkembang.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {TICKETS.map(t => {
                  const on = ticket === t.id;
                  const feat = t.featured;
                  return (
                    <button key={t.id} onClick={() => setTicket(t.id)} style={{
                      display: "flex", alignItems: "flex-start", gap: feat ? 16 : 13, textAlign: "left", cursor: "pointer", position: "relative",
                      padding: feat ? "20px 20px" : "13px 15px", borderRadius: "var(--radius-lg)",
                      background: feat ? "var(--pwb-blue-50)" : "#fff",
                      border: on ? "2px solid var(--pwb-blue-azure)" : feat ? "2px solid var(--pwb-blue-200)" : "1.5px solid var(--border-subtle)",
                      boxShadow: feat ? "var(--shadow-card)" : "none", transition: "all .2s",
                    }}>
                      {feat && <span style={{ position: "absolute", top: -10, left: 18, background: "var(--pwb-gold)", color: "#5A3A00", fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: ".66rem", letterSpacing: ".03em", padding: "3px 10px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-sm)" }}>★ PALING DIREKOMENDASIKAN</span>}
                      <PWBIconCoin tone={feat || on ? "azure" : "soft"} size={feat ? 52 : 38}><PWBIcon name={t.icon} size={feat ? 26 : 20} /></PWBIconCoin>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <strong style={{ fontSize: feat ? "1.1rem" : ".95rem", color: "var(--text-heading)" }}>{t.name}</strong>
                          <PWBBadge tone="neutral" size="sm">{t.note}</PWBBadge>
                        </div>
                        <div style={{ fontSize: feat ? ".88rem" : ".82rem", color: "var(--text-body)", marginTop: 3 }}>{t.desc}</div>
                        {t.benefits && (
                          <ul style={{ listStyle: "none", margin: feat ? "12px 0 0" : "8px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                            {t.benefits.map((b, i) => {
                              const okb = typeof b === "string" ? true : b.ok !== false;
                              const txt = typeof b === "string" ? b : b.text;
                              return (
                                <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: ".82rem", color: okb ? "var(--text-body)" : "var(--text-muted)" }}>
                                  <span style={{ flex: "0 0 auto", width: 18, height: 18, marginTop: 1, borderRadius: "50%", background: okb ? "var(--state-yes)" : "var(--pwb-gray-300)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".7rem", fontWeight: 800 }}>{okb ? "✓" : "✕"}</span>
                                  <span style={{ textDecoration: okb ? "none" : "line-through" }}>{txt}</span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                      {t.price && <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: feat ? "1.25rem" : "1.05rem", color: "var(--pwb-blue-royal)" }}>{t.price}</span>}
                    </button>
                  );
                })}
              </div>
              {ticket === "visitor" && (
                <React.Fragment>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "28px 0 14px", color: "var(--text-heading)" }}>Lengkapi data diri</h3>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0 18px" }}>
                    <div style={{ gridColumn: "1 / -1" }}><Field label="Nama Lengkap *"><input style={inputStyle} value={form.nama} onChange={e => set("nama", e.target.value)} placeholder="Nama Anda" /></Field></div>
                    <Field label="Email *" error={emailErr}><input type="email" style={{ ...inputStyle, ...(emailErr ? { border: "1.5px solid var(--pwb-red)" } : {}) }} value={form.email} onChange={e => set("email", e.target.value)} placeholder="nama@gmail.com" /></Field>
                    <Field label="No. WhatsApp *" error={waErr}><input type="tel" inputMode="numeric" style={{ ...inputStyle, ...(waErr ? { border: "1.5px solid var(--pwb-red)" } : {}) }} value={form.wa} onChange={e => set("wa", e.target.value.replace(/[^\d+\-\s()]/g, ""))} placeholder="0812 3456 7890" /></Field>
                  </div>
                </React.Fragment>
              )}
            </div>
          )}

          {step === 1 && (
            <div style={{ textAlign: "center" }}>
              <PWBIconCoin tone="gold" size={64} style={{ margin: "0 auto 14px" }}><PWBIcon name="party-popper" size={32} /></PWBIconCoin>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 4px", color: "var(--text-heading)" }}>E-Ticket Anda siap! 🚀</h2>
              <p style={{ margin: "0 0 22px", color: "var(--text-body)", fontSize: ".95rem" }}>Tunjukkan QR ini di pintu masuk Pakuwon Mall Bekasi.</p>
              <div style={{ background: "var(--pwb-blue-royal)", borderRadius: "var(--radius-xl)", padding: 4, maxWidth: 420, margin: "0 auto", boxShadow: "var(--shadow-pop)" }}>
                <div style={{ background: "#fff", borderRadius: "calc(var(--radius-xl) - 4px)", padding: "22px 24px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 14 : 18, alignItems: "center", textAlign: isMobile ? "center" : "left" }}>
                  <img src={qrSrc} alt={"QR e-ticket " + ticketCode} width={isMobile ? 132 : 92} height={isMobile ? 132 : 92} style={{ width: isMobile ? 132 : 92, height: isMobile ? 132 : 92, borderRadius: "var(--radius-sm)", flex: "0 0 auto", background: "#fff", border: "4px solid #0F1419", boxSizing: "content-box" }} />
                  <div style={{ flex: 1 }}>
                    <div className="pwb-eyebrow" style={{ color: "var(--pwb-blue-azure)" }}>{selected.name}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.15rem", color: "var(--text-heading)", margin: "2px 0" }}>{form.nama || "Peserta PWB"}</div>
                    <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>27 Juli – 2 Agustus 2026</div>
                    <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>Pakuwon Mall Bekasi · Lt.2</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginTop: 6, color: "var(--pwb-blue-royal)", letterSpacing: ".05em" }}>#{ticketCode}</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                <PWBButton variant="primary" onClick={saveQr} iconLeft={<PWBIcon name="download" size={18} />}>Simpan QR</PWBButton>
                <PWBButton variant="primary" disabled={!WA_GROUP_LINK} onClick={() => WA_GROUP_LINK && window.open(WA_GROUP_LINK, "_blank", "noopener")} style={{ background: "#25D366", color: "#fff" }} iconLeft={<PWBIcon name="message-circle" size={18} />}>Gabung Grup WhatsApp</PWBButton>
              </div>
              {!WA_GROUP_LINK && <p style={{ marginTop: 8, fontSize: ".76rem", color: "var(--text-muted)" }}>Tombol grup WhatsApp akan diaktifkan menyusul.</p>}
              <p style={{ marginTop: 14, fontSize: ".82rem", color: "var(--text-muted)" }}>Screenshot atau simpan e-ticket ini untuk ditunjukkan di pintu masuk. Pengiriman via email akan diaktifkan menyusul.</p>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 30 }}>
            <span />
            {step < 1
              ? <PWBButton variant="primary" disabled={!canNext} onClick={handleNext} iconRight={<PWBIcon name="arrow-right" size={18} />}>{selected.href ? "Lanjut ke Pembayaran" : "Terbitkan E-Ticket"}</PWBButton>
              : <PWBButton variant="accent" onClick={() => { setStep(0); setTicket("growth"); setForm({ nama: "", email: "", wa: "", usaha: "", provinsi: "", kota: "", tanggal: "" }); setProvId(""); setRegencies([]); }} iconLeft={<PWBIcon name="download" size={18} />}>Selesai · Daftar Lagi</PWBButton>}
          </div>
        </PWBCard>

        <PWBCard variant="white" pad="lg" style={{ position: "sticky", top: 90 }}>
          <div className="pwb-eyebrow" style={{ marginBottom: 14 }}>Ringkasan</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <PWBIconCoin tone="soft" size={44}><PWBIcon name={selected.icon} size={22} /></PWBIconCoin>
            <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 800, color: "var(--text-heading)", whiteSpace: "nowrap" }}>{selected.name}</div><div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>{selected.note}</div></div>
          </div>
          <Row label="Tanggal" value="27 Jul – 2 Agu 2026" />
          <Row label="Jam" value="10.00 – 21.00 WIB" />
          <Row label="Lokasi" value="Pakuwon Mall Bekasi" />
          <div style={{ height: 1, background: "var(--border-subtle)", margin: "14px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, color: "var(--text-heading)" }}>Total</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem", color: "var(--pwb-blue-royal)" }}>{selected.price || "—"}</span>
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center", fontSize: ".78rem", color: "var(--text-muted)" }}>
            <PWBIcon name="shield-check" size={16} /> Data Anda aman & hanya untuk keperluan acara.
          </div>
        </PWBCard>
      </div>
    </div>
  );
}
function Row({ label, value }) {
  return <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: ".88rem" }}>
    <span style={{ color: "var(--text-muted)" }}>{label}</span><span style={{ color: "var(--text-heading)", fontWeight: 600, textAlign: "right" }}>{value}</span>
  </div>;
}
window.RegistrationApp = App;
