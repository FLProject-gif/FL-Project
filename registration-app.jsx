/* Registration kit — multi-step free-ticket flow for PWB 2026 */
const RStyles = {
  shell: { maxWidth: 1100, margin: "0 auto", padding: "28px var(--gutter) 64px", display: "grid", gridTemplateColumns: "1.5fr .9fr", gap: 28, alignItems: "start" },
};

const TICKETS = [
  { id: "visitor", name: "Visitor Pass", price: "GRATIS", icon: "ticket", desc: "Datang, melihat, dan menikmati seluruh rangkaian acara.", note: "Explore the Event" },
  { id: "growth", name: "Growth Pass", price: "Rp 50.000", icon: "rocket", desc: "Datang untuk belajar & berkembang bersama para praktisi.", note: "Accelerate Your Growth", href: "https://pwbekasi.com/login" },
];
const SESSIONS = ["Inspirasi Bisnis", "Religi & Keluarga", "Keseimbangan Hidup", "Business Matching", "Workshop", "Entertainment"];

function Stepper({ step, steps }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 26 }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: ".85rem",
              background: i <= step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-100)",
              color: i <= step ? "#fff" : "var(--text-muted)", transition: "all .3s",
            }}>{i < step ? "✓" : i + 1}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: ".9rem", color: i <= step ? "var(--text-heading)" : "var(--text-muted)" }}>{s}</span>
          </div>
          {i < steps.length - 1 && <span style={{ flex: 1, height: 2, margin: "0 14px", background: i < step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-200)" }} />}
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
  const [ticket, setTicket] = React.useState("visitor");
  const [form, setForm] = React.useState({ nama: "", email: "", wa: "", usaha: "" });
  const [sessions, setSessions] = React.useState(["Inspirasi Bisnis"]);
  const steps = ["Pilih Tiket", "Data Diri", "E-Ticket"];
  const selected = TICKETS.find(t => t.id === ticket);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleSession = (s) => setSessions(a => a.includes(s) ? a.filter(x => x !== s) : [...a, s]);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const waDigits = form.wa.replace(/[\s\-+().]/g, "");
  const waValid = /^\d{8,15}$/.test(waDigits);
  const emailErr = form.email && !emailValid ? "Email tidak valid — gunakan format nama@domain (mis. nama@gmail.com)." : "";
  const waErr = form.wa && !waValid ? "Nomor WhatsApp hanya angka, 8–15 digit (mis. 0812xxxxxxx)." : "";
  const canNext = step === 0 ? !!ticket : step === 1 ? form.nama && emailValid && waValid : true;

  const submitRegistration = () => {
    const payload = {
      "form-name": "pwb-registration",
      nama: form.nama, email: form.email, wa: form.wa, usaha: form.usaha,
      ticket: selected.name, sessions: sessions.join(", "),
    };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload).toString(),
    }).catch(() => {});
  };
  const handleNext = () => {
    if (step === 0 && selected.href) { window.location.href = selected.href; return; }
    if (step === 1) submitRegistration();
    setStep(step + 1);
  };
  const ticketCode = "PWB26-" + (form.nama || "PESERTA").slice(0, 3).toUpperCase() + "208";
  const verifyUrl = "https://pwbekasi.com/cek?id=" + ticketCode;
  const qrSrc = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=0&data=" + encodeURIComponent(verifyUrl);
  const qrDownloadSrc = "https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=12&data=" + encodeURIComponent(verifyUrl);
  const saveQr = async () => {
    try {
      const res = await fetch(qrDownloadSrc);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "e-ticket-" + ticketCode + ".png";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
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
              <p style={{ margin: "0 0 22px", color: "var(--text-body)", fontSize: ".95rem" }}>Pilih tiket sesuai kebutuhan Anda — datang menikmati acara, atau ikut belajar &amp; berkembang.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {TICKETS.map(t => {
                  const on = ticket === t.id;
                  return (
                    <button key={t.id} onClick={() => setTicket(t.id)} style={{
                      display: "flex", alignItems: "center", gap: 16, textAlign: "left", cursor: "pointer",
                      padding: "16px 18px", borderRadius: "var(--radius-lg)", background: on ? "var(--pwb-blue-50)" : "#fff",
                      border: on ? "2px solid var(--pwb-blue-azure)" : "1.5px solid var(--border-subtle)", transition: "all .2s",
                    }}>
                      <PWBIconCoin tone={on ? "azure" : "soft"} size={48}><PWBIcon name={t.icon} size={24} /></PWBIconCoin>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <strong style={{ fontSize: "1.02rem", color: "var(--text-heading)" }}>{t.name}</strong>
                          <PWBBadge tone="neutral" size="sm">{t.note}</PWBBadge>
                        </div>
                        <div style={{ fontSize: ".86rem", color: "var(--text-body)", marginTop: 3 }}>{t.desc}</div>
                      </div>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: t.price === "GRATIS" ? "var(--state-yes)" : "var(--pwb-blue-royal)" }}>{t.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 18px", color: "var(--text-heading)" }}>Lengkapi data diri</h2>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0 18px" }}>
                <div style={{ gridColumn: "1 / -1" }}><Field label="Nama Lengkap *"><input style={inputStyle} value={form.nama} onChange={e => set("nama", e.target.value)} placeholder="Nama Anda" /></Field></div>
                <Field label="Email *" error={emailErr}><input type="email" style={{ ...inputStyle, ...(emailErr ? { border: "1.5px solid var(--pwb-red)" } : {}) }} value={form.email} onChange={e => set("email", e.target.value)} placeholder="nama@gmail.com" /></Field>
                <Field label="No. WhatsApp *" error={waErr}><input type="tel" inputMode="numeric" style={{ ...inputStyle, ...(waErr ? { border: "1.5px solid var(--pwb-red)" } : {}) }} value={form.wa} onChange={e => set("wa", e.target.value.replace(/[^\d+\-\s()]/g, ""))} placeholder="0812 3456 7890" /></Field>
                <div style={{ gridColumn: "1 / -1" }}><Field label="Bidang Usaha / Profesi"><input style={inputStyle} value={form.usaha} onChange={e => set("usaha", e.target.value)} placeholder="F&B, Fashion, Mahasiswa…" /></Field></div>
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: ".82rem", color: "var(--text-heading)", marginBottom: 10 }}>Sesi yang diminati</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {SESSIONS.map(s => {
                    const on = sessions.includes(s);
                    return <button key={s} onClick={() => toggleSession(s)} style={{
                      cursor: "pointer", padding: "8px 14px", borderRadius: "var(--radius-pill)", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: ".82rem",
                      border: "1.5px solid " + (on ? "var(--pwb-blue-azure)" : "var(--border-strong)"), background: on ? "var(--pwb-blue-azure)" : "#fff", color: on ? "#fff" : "var(--text-body)", transition: "all .15s",
                    }}>{on ? "✓ " : ""}{s}</button>;
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign: "center" }}>
              <PWBIconCoin tone="gold" size={64} style={{ margin: "0 auto 14px" }}><PWBIcon name="party-popper" size={32} /></PWBIconCoin>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 4px", color: "var(--text-heading)" }}>E-Ticket Anda siap! 🚀</h2>
              <p style={{ margin: "0 0 22px", color: "var(--text-body)", fontSize: ".95rem" }}>Tunjukkan QR ini di pintu masuk Pakuwon Mall Bekasi.</p>
              <div style={{ background: "var(--pwb-blue-royal)", borderRadius: "var(--radius-xl)", padding: 4, maxWidth: 420, margin: "0 auto", boxShadow: "var(--shadow-pop)" }}>
                <div style={{ background: "#fff", borderRadius: "calc(var(--radius-xl) - 4px)", padding: "22px 24px", display: "flex", gap: 18, alignItems: "center", textAlign: "left" }}>
                  <img src={qrSrc} alt={"QR e-ticket " + ticketCode} width={92} height={92} style={{ width: 92, height: 92, borderRadius: "var(--radius-sm)", flex: "0 0 auto", background: "#fff", border: "4px solid #0F1419", boxSizing: "content-box" }} />
                  <div style={{ flex: 1 }}>
                    <div className="pwb-eyebrow" style={{ color: "var(--pwb-blue-azure)" }}>{selected.name}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "1.15rem", color: "var(--text-heading)", margin: "2px 0" }}>{form.nama || "Peserta PWB"}</div>
                    <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>27 Juli – 2 Agustus 2026</div>
                    <div style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>Pakuwon Mall Bekasi · Lt.2</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginTop: 6, color: "var(--pwb-blue-royal)", letterSpacing: ".05em" }}>#{ticketCode}</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <PWBButton variant="primary" onClick={saveQr} iconLeft={<PWBIcon name="download" size={18} />}>Simpan QR</PWBButton>
              </div>
              <p style={{ marginTop: 14, fontSize: ".82rem", color: "var(--text-muted)" }}>Screenshot atau simpan e-ticket ini untuk ditunjukkan di pintu masuk. Pengiriman via email akan diaktifkan menyusul.</p>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 30 }}>
            {step > 0 && step < 2 ? <PWBButton variant="ghost" onClick={() => setStep(step - 1)} iconLeft={<PWBIcon name="arrow-left" size={18} />}>Kembali</PWBButton> : <span />}
            {step < 2
              ? <PWBButton variant="primary" disabled={!canNext} onClick={handleNext} iconRight={<PWBIcon name="arrow-right" size={18} />}>{step === 1 ? "Terbitkan E-Ticket" : selected.href ? "Lanjut ke Pembayaran" : "Lanjut"}</PWBButton>
              : <PWBButton variant="accent" onClick={() => { setStep(0); setForm({ nama: "", email: "", wa: "", usaha: "" }); }} iconLeft={<PWBIcon name="download" size={18} />}>Selesai · Daftar Lagi</PWBButton>}
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
          <Row label="Sesi dipilih" value={`${sessions.length} sesi`} />
          <div style={{ height: 1, background: "var(--border-subtle)", margin: "14px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, color: "var(--text-heading)" }}>Total</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem", color: selected.price === "GRATIS" ? "var(--state-yes)" : "var(--pwb-blue-royal)" }}>{selected.price}</span>
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
