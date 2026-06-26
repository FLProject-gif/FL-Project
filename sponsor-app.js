/* AUTO-GENERATED from sponsor-app.jsx — do not edit directly */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sponsorship kit — dedicated B2B flow for PWB 2026 sponsor packages */
// Apps Script web app — data sponsor dicatat ke Google Sheet (tab "Sponsor").
const SPONSOR_LOG_URL = "https://script.google.com/macros/s/AKfycby3guXKgk5xzvibr_0lPbN3asfFZNjmP2bgh8aW7ftzmvVxHFT4NfUVMxcF8D3c7uu2Cg/exec";
const SStyles = {
  shell: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "28px var(--gutter) 64px",
    display: "grid",
    gridTemplateColumns: "1.6fr .85fr",
    gap: 28,
    alignItems: "start"
  }
};
const SPONSOR_TIERS = [{
  tier: "Platinum",
  price: "Rp 50 jt",
  priceWords: "Lima Puluh Juta",
  forWhom: "Otomotif, Fintech, Asuransi, FMCG besar.",
  featured: true,
  benefits: ["Data Leads Peserta", "Free 2 booth standar (7 hari)", "Sesi presentasi 20 menit prime time", "Pemutaran iklan 60 detik", "Logo XL di videotron"]
}, {
  tier: "Gold",
  price: "Rp 35 jt",
  priceWords: "Tiga Puluh Lima Juta",
  forWhom: "Properti lokal, Waralaba, Universitas/Lembaga Pendidikan.",
  benefits: ["Data Leads Peserta", "Free 1 booth standar (7 hari)", "Pemutaran iklan 30 detik", "Logo L di videotron", {
    text: "Sesi panggung",
    ok: false
  }]
}, {
  tier: "Silver",
  price: "Rp 15 jt",
  priceWords: "Lima Belas Juta",
  forWhom: "Toko retail regional, supplier alat kantor/elektronik, home decor.",
  benefits: ["Free 1 booth standar (7 hari)", "Pemutaran iklan 20 detik", "Logo M di videotron", {
    text: "Data Leads Peserta",
    ok: false
  }, {
    text: "Sesi panggung",
    ok: false
  }]
}, {
  tier: "Bronze",
  price: "Rp 1 jt",
  priceWords: "Satu Juta",
  forWhom: "UMKM naik kelas, usaha jasa lokal, start-up baru.",
  benefits: ["5x Post IG Feed + 10x Stories", "Pembagian brosur / sampling", "Logo S di videotron", {
    text: "Booth pameran",
    ok: false
  }, {
    text: "Data Leads Peserta",
    ok: false
  }]
}, {
  tier: "Booth",
  price: "Rp 7 jt",
  priceWords: "Tujuh Juta",
  forWhom: "Tampil & berjualan langsung di area pameran selama acara berlangsung.",
  benefits: ["Booth standar 2×2 m — lokasi strategis", "Berlaku penuh selama 7 hari acara", "Meja, kursi & sumber listrik tersedia", "Nama brand tercantum di denah acara", {
    text: "Sesi panggung & iklan videotron",
    ok: false
  }]
}];
function SStepper({
  step,
  steps
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: isMobile ? "flex-start" : "center",
      gap: 0,
      marginBottom: isMobile ? 22 : 26
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      gap: isMobile ? 6 : 10,
      flex: isMobile ? "0 0 auto" : undefined,
      width: isMobile ? 72 : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: "0 0 auto",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: ".85rem",
      background: i <= step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-100)",
      color: i <= step ? "#fff" : "var(--text-muted)",
      transition: "all .3s"
    }
  }, i < step ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: isMobile ? ".72rem" : ".9rem",
      textAlign: isMobile ? "center" : "left",
      lineHeight: 1.15,
      color: i <= step ? "var(--text-heading)" : "var(--text-muted)"
    }
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      margin: isMobile ? "15px 4px 0" : "0 14px",
      background: i < step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-200)"
    }
  }))));
}
function SField({
  label,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: ".82rem",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, label), children, error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 5,
      fontSize: ".76rem",
      fontWeight: 600,
      color: "var(--pwb-red)"
    }
  }, error));
}
const sInputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "var(--radius-md)",
  border: "1.5px solid var(--border-strong)",
  fontFamily: "var(--font-sans)",
  fontSize: ".95rem",
  color: "var(--text-heading)",
  background: "#fff",
  outline: "none",
  boxSizing: "border-box"
};
function getTierFromUrl() {
  try {
    const q = new URLSearchParams(window.location.search).get("tier");
    if (q && SPONSOR_TIERS.some(t => t.tier.toLowerCase() === q.toLowerCase())) {
      return SPONSOR_TIERS.find(t => t.tier.toLowerCase() === q.toLowerCase()).tier;
    }
  } catch (e) {}
  return null;
}
function getInitialTier() {
  return getTierFromUrl() || "Platinum";
}
// Paket sudah dipilih dari beranda → langsung ke step Data Perusahaan.
function getInitialStep() {
  return getTierFromUrl() ? 1 : 0;
}
function SponsorAppMain() {
  useLucide();
  const isMobile = useIsMobile();
  const [step, setStep] = React.useState(getInitialStep);
  const [tier, setTier] = React.useState(getInitialTier);
  const [form, setForm] = React.useState({
    perusahaan: "",
    pic: "",
    jabatan: "",
    email: "",
    wa: "",
    web: "",
    catatan: "",
    provinsi: "",
    kota: ""
  });
  const steps = ["Pilih Paket", "Data Perusahaan", "Konfirmasi"];
  const selected = SPONSOR_TIERS.find(t => t.tier === tier);
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));

  // Wilayah Indonesia (emsifa) — dropdown bertingkat Provinsi → Kota/Kabupaten.
  const GEO = "https://www.emsifa.com/api-wilayah-indonesia/api";
  const [provinces, setProvinces] = React.useState([]);
  const [regencies, setRegencies] = React.useState([]);
  const [provId, setProvId] = React.useState("");
  const [geoError, setGeoError] = React.useState(false);
  React.useEffect(() => {
    let ok = true;
    fetch(GEO + "/provinces.json").then(r => r.json()).then(d => {
      if (ok) setProvinces(d);
    }).catch(() => {
      if (ok) setGeoError(true);
    });
    return () => {
      ok = false;
    };
  }, []);
  const onProvince = id => {
    setProvId(id);
    const p = provinces.find(x => String(x.id) === String(id));
    setForm(f => ({
      ...f,
      provinsi: p ? p.name : "",
      kota: ""
    }));
    setRegencies([]);
    if (id) fetch(GEO + "/regencies/" + id + ".json").then(r => r.json()).then(setRegencies).catch(() => {});
  };
  const okBenefits = selected.benefits.filter(b => typeof b === "string" || b.ok !== false).length;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const waDigits = form.wa.replace(/[\s\-+().]/g, "");
  const waValid = /^\d{8,15}$/.test(waDigits);
  const emailErr = form.email && !emailValid ? "Email tidak valid — gunakan format nama@domain (mis. nama@gmail.com)." : "";
  const waErr = form.wa && !waValid ? "Nomor WhatsApp hanya angka, 8–15 digit (mis. 0812xxxxxxx)." : "";
  const canNext = step === 0 ? !!tier : step === 1 ? form.perusahaan && form.pic && emailValid && waValid && form.provinsi && form.kota : true;
  const submitSponsor = () => {
    const payload = {
      "form-name": "pwb-sponsor",
      perusahaan: form.perusahaan,
      pic: form.pic,
      jabatan: form.jabatan,
      email: form.email,
      wa: form.wa,
      web: form.web,
      catatan: form.catatan,
      kota: form.kota,
      provinsi: form.provinsi,
      paket: selected.tier,
      harga: selected.price
    };
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(payload).toString()
    }).catch(() => {});
    // Catat juga ke Google Sheet (tab "Sponsor") via Apps Script — fire & forget.
    try {
      const q = new URLSearchParams({
        mode: "sponsor",
        ref: ref,
        perusahaan: form.perusahaan,
        pic: form.pic,
        jabatan: form.jabatan,
        email: form.email,
        wa: form.wa,
        paket: selected.tier,
        harga: selected.price,
        provinsi: form.provinsi,
        kota: form.kota,
        web: form.web,
        catatan: form.catatan
      }).toString();
      fetch(SPONSOR_LOG_URL + "?" + q, {
        mode: "no-cors"
      }).catch(() => {});
    } catch (e) {}
  };
  const handleNext = () => {
    if (step === 1) submitSponsor();
    setStep(step + 1);
  };
  const ref = "#SPS26-" + (form.perusahaan || "MITRA").replace(/[^A-Za-z0-9]/g, "").slice(0, 4).toUpperCase() + "07";
  const WA_PANITIA = "6283856665556"; // +62 838 5666 5556
  const waHref = () => {
    const lines = ["Halo TDA Bekasi 👋", "Saya ingin mendaftar sponsor *Pesta Wirausaha Planet Bekasi 2026*.", "", "*Paket:* " + selected.tier + " (" + selected.price + ")", "*Perusahaan:* " + (form.perusahaan || "-"), "*PIC:* " + (form.pic || "-") + (form.jabatan ? " (" + form.jabatan + ")" : ""), "*Email:* " + (form.email || "-"), "*WhatsApp:* " + (form.wa || "-"), "*Lokasi:* " + [form.kota, form.provinsi].filter(Boolean).join(", "), "*Website/IG:* " + (form.web || "-"), "*Catatan:* " + (form.catatan || "-"), "*Ref:* " + ref];
    return "https://wa.me/" + WA_PANITIA + "?text=" + encodeURIComponent(lines.join("\n"));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px var(--gutter)",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--text-heading)",
      fontWeight: 700,
      fontSize: ".9rem"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "arrow-left",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-tda-bekasi.png",
    style: {
      height: 32
    },
    alt: "TDA Bekasi"
  })), /*#__PURE__*/React.createElement(PWBBadge, {
    tone: "gold"
  }, "Pendaftaran Sponsor PWB 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SStyles.shell,
      gridTemplateColumns: isMobile ? "1fr" : "1.6fr .85fr"
    }
  }, /*#__PURE__*/React.createElement(PWBCard, {
    variant: "white",
    pad: isMobile ? "lg" : "xl",
    style: {
      minHeight: 460
    }
  }, /*#__PURE__*/React.createElement(SStepper, {
    step: step,
    steps: steps
  }), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "0 0 6px",
      color: "var(--text-heading)"
    }
  }, "Pilih paket sponsorship Anda"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      color: "var(--text-body)",
      fontSize: ".95rem"
    }
  }, "Semua tier mendapat eksposur di videotron indoor & outdoor Pakuwon Mall. Pilih yang paling cocok untuk brand Anda."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
      gap: 18,
      alignItems: "stretch"
    }
  }, SPONSOR_TIERS.map(t => {
    const on = tier === t.tier;
    // Pilih paket → ganti tier sekaligus lanjut ke Data Perusahaan.
    const choose = () => {
      setTier(t.tier);
      setStep(1);
    };
    return /*#__PURE__*/React.createElement(PWBSponsorTierCard, _extends({
      key: t.tier
    }, t, {
      style: on ? {
        border: "2px solid var(--pwb-blue-azure)",
        boxShadow: "var(--shadow-pop)"
      } : {},
      cta: /*#__PURE__*/React.createElement(PWBButton, {
        variant: on ? "primary" : "secondary",
        full: true,
        onClick: choose
      }, on ? "Lanjut dengan " + t.tier : "Pilih " + t.tier)
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBBadge, {
    tone: "neutral",
    size: "lg"
  }, "+ Standar Indoor Booth \u2014 Rp 10 jt / booth (2\xD72 m, 7 hari)"))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "0 0 18px",
      color: "var(--text-heading)"
    }
  }, "Data perusahaan & PIC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(SField, {
    label: "Nama Perusahaan / Brand *"
  }, /*#__PURE__*/React.createElement("input", {
    style: sInputStyle,
    value: form.perusahaan,
    onChange: e => set("perusahaan", e.target.value),
    placeholder: "PT / Brand Anda"
  }))), /*#__PURE__*/React.createElement(SField, {
    label: "Nama PIC *"
  }, /*#__PURE__*/React.createElement("input", {
    style: sInputStyle,
    value: form.pic,
    onChange: e => set("pic", e.target.value),
    placeholder: "Nama penanggung jawab"
  })), /*#__PURE__*/React.createElement(SField, {
    label: "Jabatan"
  }, /*#__PURE__*/React.createElement("input", {
    style: sInputStyle,
    value: form.jabatan,
    onChange: e => set("jabatan", e.target.value),
    placeholder: "Marketing Manager, Owner\u2026"
  })), /*#__PURE__*/React.createElement(SField, {
    label: "Email *",
    error: emailErr
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    style: {
      ...sInputStyle,
      ...(emailErr ? {
        border: "1.5px solid var(--pwb-red)"
      } : {})
    },
    value: form.email,
    onChange: e => set("email", e.target.value),
    placeholder: "nama@gmail.com"
  })), /*#__PURE__*/React.createElement(SField, {
    label: "No. WhatsApp *",
    error: waErr
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    inputMode: "numeric",
    style: {
      ...sInputStyle,
      ...(waErr ? {
        border: "1.5px solid var(--pwb-red)"
      } : {})
    },
    value: form.wa,
    onChange: e => set("wa", e.target.value.replace(/[^\d+\-\s()]/g, "")),
    placeholder: "0812 3456 7890"
  })), geoError ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SField, {
    label: "Provinsi *"
  }, /*#__PURE__*/React.createElement("input", {
    style: sInputStyle,
    value: form.provinsi,
    onChange: e => set("provinsi", e.target.value),
    placeholder: "Provinsi"
  })), /*#__PURE__*/React.createElement(SField, {
    label: "Kota / Kabupaten *"
  }, /*#__PURE__*/React.createElement("input", {
    style: sInputStyle,
    value: form.kota,
    onChange: e => set("kota", e.target.value),
    placeholder: "Kota / Kabupaten"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SField, {
    label: "Provinsi *"
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...sInputStyle,
      cursor: "pointer"
    },
    value: provId,
    onChange: e => onProvince(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, provinces.length ? "Pilih provinsi…" : "Memuat…"), provinces.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.name)))), /*#__PURE__*/React.createElement(SField, {
    label: "Kota / Kabupaten *"
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...sInputStyle,
      cursor: provId ? "pointer" : "not-allowed"
    },
    value: form.kota,
    disabled: !provId,
    onChange: e => set("kota", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, provId ? "Pilih kota/kabupaten…" : "Pilih provinsi dulu"), regencies.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.name
  }, r.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(SField, {
    label: "Website / Instagram"
  }, /*#__PURE__*/React.createElement("input", {
    style: sInputStyle,
    value: form.web,
    onChange: e => set("web", e.target.value),
    placeholder: "@brand atau www.brand.com"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(SField, {
    label: "Catatan / kebutuhan khusus"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...sInputStyle,
      minHeight: 90,
      resize: "vertical"
    },
    value: form.catatan,
    onChange: e => set("catatan", e.target.value),
    placeholder: "Mis. butuh booth tambahan, request lokasi, materi iklan\u2026"
  }))))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBIconCoin, {
    tone: "gold",
    size: 64,
    style: {
      margin: "0 auto 14px"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "handshake",
    size: 32
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "0 0 4px",
      color: "var(--text-heading)"
    }
  }, "Satu langkah lagi, mitra! \uD83E\uDD1D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      color: "var(--text-body)",
      fontSize: ".95rem"
    }
  }, "Untuk ", /*#__PURE__*/React.createElement("strong", null, "menyelesaikan pendaftaran"), " paket ", /*#__PURE__*/React.createElement("strong", null, selected.tier), ", mohon konfirmasi data Anda ke admin kami via WhatsApp. Penawaran & invoice diproses setelah konfirmasi."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pwb-blue-royal)",
      borderRadius: "var(--radius-xl)",
      padding: 4,
      maxWidth: 440,
      margin: "0 auto",
      boxShadow: "var(--shadow-pop)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "calc(var(--radius-xl) - 4px)",
      padding: "22px 24px",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      color: "var(--pwb-blue-azure)"
    }
  }, "Paket ", selected.tier), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "1.15rem",
      color: "var(--text-heading)",
      margin: "2px 0"
    }
  }, form.perusahaan || "Perusahaan Anda"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)"
    }
  }, "PIC: ", form.pic || "—", form.jabatan ? " · " + form.jabatan : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)"
    }
  }, "Nilai paket: ", selected.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      marginTop: 6,
      color: "var(--pwb-blue-royal)",
      letterSpacing: ".05em"
    }
  }, ref))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(PWBButton, {
    size: "lg",
    onClick: () => window.open(waHref(), "_blank", "noopener"),
    style: {
      background: "#25D366",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    iconLeft: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "message-circle",
      size: 20
    })
  }, "Konfirmasi via WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: ".78rem",
      color: "var(--text-muted)"
    }
  }, "Pesan otomatis berisi paket & data Anda \u2014 tinggal kirim ke tim kami.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: ".82rem",
      color: "var(--text-muted)"
    }
  }, "Atau hubungi langsung: +62 838 5666 5556.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 30
    }
  }, step > 0 && step < 2 ? /*#__PURE__*/React.createElement(PWBButton, {
    variant: "ghost",
    onClick: () => setStep(step - 1),
    iconLeft: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-left",
      size: 18
    })
  }, "Kembali") : /*#__PURE__*/React.createElement("span", null), step < 2 ? /*#__PURE__*/React.createElement(PWBButton, {
    variant: "primary",
    disabled: !canNext,
    onClick: handleNext,
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 18
    })
  }, step === 1 ? "Kirim Permintaan" : "Lanjut") : /*#__PURE__*/React.createElement(PWBButton, {
    variant: "accent",
    onClick: () => {
      setStep(0);
      setForm({
        perusahaan: "",
        pic: "",
        jabatan: "",
        email: "",
        wa: "",
        web: "",
        catatan: "",
        provinsi: "",
        kota: ""
      });
      setProvId("");
      setRegencies([]);
    },
    iconLeft: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "rotate-ccw",
      size: 18
    })
  }, "Selesai \xB7 Daftar Paket Lain"))), /*#__PURE__*/React.createElement(PWBCard, {
    variant: "white",
    pad: "lg",
    style: {
      position: "sticky",
      top: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Ringkasan Paket"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(PWBBadge, {
    tone: {
      Platinum: "deep",
      Gold: "gold",
      Silver: "neutral",
      Bronze: "warm"
    }[selected.tier] || "brand",
    size: "lg"
  }, selected.tier), selected.featured && /*#__PURE__*/React.createElement(PWBBadge, {
    tone: "gold",
    size: "sm"
  }, "Paling Powerfull")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.8rem",
      color: "var(--pwb-ink)",
      lineHeight: 1
    }
  }, selected.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, selected.priceWords), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontSize: ".84rem",
      color: "var(--pwb-blue-700)",
      fontWeight: 600,
      lineHeight: 1.5
    }
  }, "Cocok untuk: ", selected.forWhom), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "14px 0"
    }
  }), /*#__PURE__*/React.createElement(SRow, {
    label: "Acara",
    value: "PWB 2026"
  }), /*#__PURE__*/React.createElement(SRow, {
    label: "Tanggal",
    value: "27 Jul \u2013 2 Agu 2026"
  }), /*#__PURE__*/React.createElement(SRow, {
    label: "Lokasi",
    value: "Pakuwon Mall Bekasi"
  }), /*#__PURE__*/React.createElement(SRow, {
    label: "Benefit aktif",
    value: `${okBenefits} item`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontSize: ".78rem",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "shield-check",
    size: 16
  }), " Tanpa pembayaran online \u2014 invoice resmi via tim kami."))));
}
function SRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "5px 0",
      fontSize: ".88rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-heading)",
      fontWeight: 600,
      textAlign: "right"
    }
  }, value));
}
window.SponsorApp = SponsorAppMain;