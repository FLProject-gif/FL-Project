/* Shared UI primitives for Pesta Wirausaha Bekasi UI kits.
   Mirrors components/core/* but attached to window for standalone kits.
   Load AFTER React + Babel + Lucide, BEFORE the screen scripts. */

const PWB_FONT_SANS = "var(--font-sans)";

function Icon({ name, size = 24, style = {}, ...rest }) {
  // Wrap the <i> so Lucide replaces the inner child (not this React-managed node).
  // Prevents a React removeChild crash when an icon unmounts after Lucide swapped
  // the <i> for an <svg> (e.g. when nav icons change between steps).
  return (
    <span style={{ width: size, height: size, display: "inline-flex", ...style }} {...rest}>
      <i data-lucide={name} style={{ width: size, height: size, display: "inline-flex" }} />
    </span>
  );
}
function useLucide(dep) {
  React.useEffect(() => {
    const draw = () => window.lucide && window.lucide.createIcons();
    draw(); const t = setTimeout(draw, 80); return () => clearTimeout(t);
  });
}

// Reactive viewport check for responsive (mobile) layout switches.
function useIsMobile(maxWidth = 820) {
  const q = "(max-width: " + maxWidth + "px)";
  const [m, setM] = React.useState(() => typeof window !== "undefined" && window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    on();
    if (mq.addEventListener) mq.addEventListener("change", on); else mq.addListener(on);
    return () => { if (mq.removeEventListener) mq.removeEventListener("change", on); else mq.removeListener(on); };
  }, [q]);
  return m;
}

function Button({ children, variant = "primary", size = "md", iconLeft, iconRight, full, disabled, style = {}, ...rest }) {
  const sizes = { sm: { padding: "8px 16px", fontSize: ".875rem" }, md: { padding: "12px 24px", fontSize: "1rem" }, lg: { padding: "16px 32px", fontSize: "1.125rem" } };
  const variants = {
    primary: { background: "var(--pwb-blue-azure)", color: "#fff", boxShadow: "var(--shadow-pop)" },
    accent: { background: "var(--pwb-gold)", color: "#5A3A00", boxShadow: "var(--shadow-gold)" },
    deep: { background: "var(--pwb-blue-royal)", color: "#fff", boxShadow: "var(--shadow-pop)" },
    secondary: { background: "#fff", color: "var(--pwb-blue-azure)", boxShadow: "inset 0 0 0 2px var(--pwb-blue-100)" },
    ghost: { background: "transparent", color: "var(--pwb-blue-azure)" },
    white: { background: "#fff", color: "var(--pwb-blue-royal)", boxShadow: "var(--shadow-sm)" },
    danger: { background: "var(--pwb-red)", color: "#fff" },
  };
  return (
    <button disabled={disabled} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".55em",
      width: full ? "100%" : "auto", fontFamily: PWB_FONT_SANS, fontWeight: 700, lineHeight: 1, border: "none",
      borderRadius: "var(--radius-pill)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? .5 : 1,
      transition: "transform .14s var(--ease-spring), filter .24s", whiteSpace: "nowrap", ...sizes[size], ...variants[variant], ...style,
    }}
      onMouseDown={e => !disabled && (e.currentTarget.style.transform = "scale(.96)")}
      onMouseUp={e => !disabled && (e.currentTarget.style.transform = "scale(1)")}
      onMouseEnter={e => !disabled && (e.currentTarget.style.filter = "brightness(.94)")}
      onMouseLeave={e => { if (!disabled) { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "none"; } }}
      {...rest}>{iconLeft}{children}{iconRight}</button>
  );
}

function Badge({ children, tone = "brand", solid = true, size = "md", style = {}, ...rest }) {
  const p = {
    brand: ["var(--pwb-blue-azure)", "#fff", "var(--pwb-blue-50)", "var(--pwb-blue-700)"],
    deep: ["var(--pwb-blue-royal)", "#fff", "var(--pwb-blue-50)", "var(--pwb-blue-royal)"],
    gold: ["var(--pwb-gold)", "#5A3A00", "var(--pwb-gold-50)", "#8a5a00"],
    warm: ["var(--pwb-orange)", "#fff", "var(--pwb-orange-50)", "#b8410a"],
    danger: ["var(--pwb-red)", "#fff", "var(--pwb-red-50)", "var(--pwb-red)"],
    success: ["var(--state-yes)", "#fff", "#E7F7EB", "#1c7a35"],
    neutral: ["var(--pwb-gray-100)", "var(--pwb-gray-700)", "var(--pwb-gray-100)", "var(--pwb-gray-700)"],
  }[tone];
  const sz = { sm: { fontSize: ".6875rem", padding: "3px 9px" }, md: { fontSize: ".75rem", padding: "5px 12px" }, lg: { fontSize: ".875rem", padding: "7px 16px" } }[size];
  return <span style={{ display: "inline-flex", alignItems: "center", gap: ".4em", fontFamily: PWB_FONT_SANS, fontWeight: 700, lineHeight: 1, borderRadius: "var(--radius-pill)", background: solid ? p[0] : p[2], color: solid ? p[1] : p[3], ...sz, ...style }} {...rest}>{children}</span>;
}

function IconCoin({ children, tone = "azure", size = 64, ring, style = {}, ...rest }) {
  const t = { azure: ["var(--pwb-blue-azure)", "#fff"], deep: ["var(--pwb-blue-royal)", "#fff"], gold: ["var(--pwb-gold)", "#5A3A00"], warm: ["var(--pwb-orange)", "#fff"], soft: ["var(--pwb-blue-50)", "var(--pwb-blue-azure)"], white: ["#fff", "var(--pwb-blue-azure)"] }[tone];
  return <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flex: "0 0 auto", borderRadius: "var(--radius-pill)", background: t[0], color: t[1], boxShadow: ring ? "0 0 0 4px rgba(255,255,255,.7), var(--shadow-sm)" : "var(--shadow-sm)", ...style }} {...rest}>{children}</span>;
}

function Card({ children, variant = "white", pad = "lg", radius = "lg", interactive, style = {}, ...rest }) {
  const v = {
    white: { background: "#fff", color: "var(--text-body)", boxShadow: "var(--shadow-card)" },
    plain: { background: "#fff", color: "var(--text-body)", border: "1px solid var(--border-subtle)" },
    brand: { background: "var(--pwb-blue-azure)", color: "#fff", boxShadow: "var(--shadow-pop)" },
    deep: { background: "var(--pwb-blue-royal)", color: "#fff", boxShadow: "var(--shadow-pop)" },
    goldsoft: { background: "var(--pwb-gold-soft)", color: "#5A3A00", boxShadow: "var(--shadow-sm)" },
    muted: { background: "var(--pwb-gray-50)", color: "var(--text-body)", border: "1px solid var(--border-subtle)" },
  }[variant];
  const pads = { none: 0, sm: "16px", md: "24px", lg: "32px", xl: "40px" }[pad];
  const radii = { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)", xl: "var(--radius-xl)", "2xl": "var(--radius-2xl)" }[radius];
  return <div style={{ borderRadius: radii, padding: pads, transition: interactive ? "transform .24s var(--ease-spring), box-shadow .24s" : undefined, ...v, ...style }}
    onMouseEnter={interactive ? e => e.currentTarget.style.transform = "translateY(-4px)" : undefined}
    onMouseLeave={interactive ? e => e.currentTarget.style.transform = "translateY(0)" : undefined} {...rest}>{children}</div>;
}

function SectionHeader({ eyebrow, title, desc, align = "left", runhead, runheadLabel = "Let's Grow Together", size = "lg", style = {}, ...rest }) {
  const ts = { md: "var(--fs-h2)", lg: "var(--fs-h1)", xl: "var(--fs-display-lg)" }[size];
  return (
    <header style={{ textAlign: align, ...style }} {...rest}>
      {runhead && <div className="pwb-runhead" style={{ marginBottom: 24 }}><span>{runheadLabel}</span></div>}
      {eyebrow && <div className="pwb-eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>}
      <h2 style={{ fontFamily: PWB_FONT_SANS, fontWeight: 800, fontSize: ts, letterSpacing: "-.02em", lineHeight: 1.08, color: "var(--text-heading)", margin: 0 }}>{title}</h2>
      {desc && <p style={{ margin: "16px 0 0", maxWidth: 620, marginInline: align === "center" ? "auto" : undefined, fontSize: "var(--fs-body-lg)", color: "var(--text-body)" }}>{desc}</p>}
    </header>
  );
}

function StatCard({ value, label, sublabel, tone = "brand", align = "left", style = {}, ...rest }) {
  const t = { brand: ["var(--pwb-blue-azure)", "#fff", "rgba(255,255,255,.85)"], deep: ["var(--pwb-blue-royal)", "#fff", "rgba(255,255,255,.85)"], light: ["#fff", "var(--text-heading)", "var(--text-muted)"], gold: ["var(--pwb-gold)", "#5A3A00", "#7a5200"] }[tone];
  return <div style={{ background: t[0], color: t[1], borderRadius: "var(--radius-lg)", padding: "26px 28px", boxShadow: tone === "light" ? "var(--shadow-card)" : "var(--shadow-pop)", textAlign: align, ...style }} {...rest}>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1, fontSize: "clamp(2.2rem,4vw,3rem)", letterSpacing: "-.01em" }}>{value}</div>
    <div style={{ marginTop: 10, fontFamily: PWB_FONT_SANS, fontWeight: 700, fontSize: "1rem", lineHeight: 1.25 }}>{label}</div>
    {sublabel && <div style={{ marginTop: 4, fontSize: ".8125rem", color: t[2], fontWeight: 500 }}>{sublabel}</div>}
  </div>;
}

function Avatar({ src, alt = "", initial, size = 96, ring = "gold", style = {}, ...rest }) {
  const rings = { gold: "0 0 0 4px #fff, 0 0 0 7px var(--pwb-gold)", azure: "0 0 0 4px #fff, 0 0 0 7px var(--pwb-blue-azure)", none: "var(--shadow-sm)" };
  return <div role="img" aria-label={alt || initial} style={{ position: "relative", overflow: "hidden", width: size, height: size, flex: "0 0 auto", borderRadius: "var(--radius-pill)", background: "var(--pwb-blue-50)", boxShadow: rings[ring], display: "flex", alignItems: "center", justifyContent: "center", color: "var(--pwb-blue-azure)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size * .42, ...style }} {...rest}>
    {initial}
    {src && <img src={src} alt={alt} onError={(e) => { e.currentTarget.style.display = "none"; }} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", background: "#fff" }} />}
  </div>;
}

function SpeakerCard({ name, role, src, initial, time, topic, size = 120, style = {}, ...rest }) {
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: size + 24, ...style }} {...rest}>
    <Avatar src={src} initial={initial || (name ? name[0] : "?")} alt={name} size={size} />
    <div style={{ marginTop: -14, position: "relative", zIndex: 2, background: "var(--pwb-blue-azure)", color: "#fff", borderRadius: "var(--radius-pill)", padding: "6px 14px", fontFamily: PWB_FONT_SANS, fontWeight: 700, fontSize: ".8125rem", boxShadow: "var(--shadow-sm)", maxWidth: size + 24 }}>{name}</div>
    {role && <div style={{ marginTop: 6, fontSize: ".75rem", fontWeight: 600, color: "var(--text-muted)" }}>{role}</div>}
    {time && <div style={{ marginTop: 8, fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--pwb-ink)" }}>{time}</div>}
    {topic && <div style={{ marginTop: 2, fontSize: ".75rem", color: "var(--text-body)" }}>{topic}</div>}
  </div>;
}

function SponsorTierCard({ tier, price, priceWords, forWhom, benefits = [], featured, cta, style = {}, ...rest }) {
  const tierTone = { Platinum: "deep", Gold: "gold", Silver: "neutral", Bronze: "warm" }[tier] || "brand";
  return <div style={{ position: "relative", background: "#fff", border: featured ? "2px solid var(--pwb-gold)" : "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "28px 26px", boxShadow: featured ? "var(--shadow-pop)" : "var(--shadow-card)", display: "flex", flexDirection: "column", gap: 18, ...style }} {...rest}>
    {featured && <span style={{ position: "absolute", top: -12, right: 16, background: "var(--pwb-gold)", color: "#5A3A00", fontFamily: PWB_FONT_SANS, fontWeight: 800, fontSize: ".7rem", letterSpacing: ".06em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "5px 12px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-gold)" }}>Paling Powerfull</span>}
    <div><Badge tone={tierTone} size="lg">{tier}</Badge></div>
    <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--pwb-ink)", lineHeight: 1 }}>{price}</div>{priceWords && <div style={{ fontSize: ".8125rem", color: "var(--text-muted)", marginTop: 4 }}>{priceWords}</div>}</div>
    {forWhom && <p style={{ margin: 0, fontSize: ".875rem", color: "var(--pwb-blue-700)", fontWeight: 600, lineHeight: 1.5 }}>{forWhom}</p>}
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
      {benefits.map((b, i) => { const it = typeof b === "string" ? { text: b, ok: true } : b; return (
        <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".875rem", color: it.ok ? "var(--text-body)" : "var(--text-muted)" }}>
          <span style={{ flex: "0 0 auto", width: 22, height: 22, marginTop: 1, borderRadius: "var(--radius-pill)", background: it.ok ? "var(--state-yes)" : "var(--pwb-gray-200)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 800 }}>{it.ok ? "✓" : "–"}</span>
          <span>{it.text}</span>
        </li>); })}
    </ul>
    {cta && <div style={{ marginTop: "auto" }}>{cta}</div>}
  </div>;
}

Object.assign(window, { PWBIcon: Icon, useLucide, useIsMobile, PWBButton: Button, PWBBadge: Badge, PWBIconCoin: IconCoin, PWBCard: Card, PWBSectionHeader: SectionHeader, PWBStatCard: StatCard, PWBAvatar: Avatar, PWBSpeakerCard: SpeakerCard, PWBSponsorTierCard: SponsorTierCard });
