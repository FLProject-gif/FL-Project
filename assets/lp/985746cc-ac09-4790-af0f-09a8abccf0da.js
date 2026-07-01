/* @ds-bundle: {"format":3,"namespace":"PestaWirausahaBekasiDesignSystem_efc0f4","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconCoin","sourcePath":"components/core/IconCoin.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"SpeakerCard","sourcePath":"components/core/SpeakerCard.jsx"},{"name":"SponsorTierCard","sourcePath":"components/core/SponsorTierCard.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6c9981c4f1e6","components/core/Badge.jsx":"ac594f88e473","components/core/Button.jsx":"ca1b47e310ea","components/core/Card.jsx":"279e5ce6fe5d","components/core/IconCoin.jsx":"1122772b5eed","components/core/SectionHeader.jsx":"6c1b1dda36d1","components/core/SpeakerCard.jsx":"611cce389e1b","components/core/SponsorTierCard.jsx":"7b10bbecb90b","components/core/StatCard.jsx":"48ec2f6d7dd4","ui_kits/_shared/ui.jsx":"977a7cbb902f","ui_kits/agenda/app.jsx":"18af238d9747","ui_kits/landing/parts-bottom.jsx":"20f5f594d5a2","ui_kits/landing/parts-top.jsx":"871b066a73b3","ui_kits/login/app.jsx":"2566d10421d6","ui_kits/registration/app.jsx":"de828c93fe2e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PestaWirausahaBekasiDesignSystem_efc0f4 = window.PestaWirausahaBekasiDesignSystem_efc0f4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular image/initial with the brand's soft gold ring.
 * Used for speakers, partner-community logos, testimonial initials.
 */
function Avatar({
  src = null,
  alt = "",
  initial = null,
  size = 96,
  ring = "gold",
  style = {},
  ...rest
}) {
  const rings = {
    gold: "0 0 0 4px #fff, 0 0 0 7px var(--pwb-gold)",
    azure: "0 0 0 4px #fff, 0 0 0 7px var(--pwb-blue-azure)",
    none: "var(--shadow-sm)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: src ? "#fff" : "var(--pwb-blue-50)",
      backgroundImage: src ? `url(${src})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: rings[ring],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pwb-blue-azure)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.42,
      ...style
    },
    role: "img",
    "aria-label": alt || initial || "avatar"
  }, rest), !src && initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label for tiers, statuses, categories.
 * tones: brand (azure), deep, gold, warm, danger, success, neutral.
 */
function Badge({
  children,
  tone = "brand",
  solid = true,
  size = "md",
  icon = null,
  style = {},
  ...rest
}) {
  const palette = {
    brand: ["var(--pwb-blue-azure)", "#fff", "var(--pwb-blue-50)", "var(--pwb-blue-700)"],
    deep: ["var(--pwb-blue-royal)", "#fff", "var(--pwb-blue-50)", "var(--pwb-blue-royal)"],
    gold: ["var(--pwb-gold)", "#5A3A00", "var(--pwb-gold-50)", "#8a5a00"],
    warm: ["var(--pwb-orange)", "#fff", "var(--pwb-orange-50)", "#b8410a"],
    danger: ["var(--pwb-red)", "#fff", "var(--pwb-red-50)", "var(--pwb-red)"],
    success: ["var(--state-yes)", "#fff", "#E7F7EB", "#1c7a35"],
    neutral: ["var(--pwb-gray-100)", "var(--pwb-gray-700)", "var(--pwb-gray-100)", "var(--pwb-gray-700)"]
  };
  const [solidBg, solidFg, softBg, softFg] = palette[tone];
  const sizes = {
    sm: {
      fontSize: "0.6875rem",
      padding: "3px 9px"
    },
    md: {
      fontSize: "0.75rem",
      padding: "5px 12px"
    },
    lg: {
      fontSize: "0.875rem",
      padding: "7px 16px"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4em",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-pill)",
      background: solid ? solidBg : softBg,
      color: solid ? solidFg : softFg,
      ...sizes[size],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Pesta Wirausaha Bekasi
 * Pill-shaped CTA. Primary = azure, accent = gold, secondary = white/outline, ghost = text.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "0.875rem"
    },
    md: {
      padding: "12px 24px",
      fontSize: "1rem"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "1.125rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    accent: {
      background: "var(--pwb-gold)",
      color: "#5A3A00",
      boxShadow: "var(--shadow-gold)"
    },
    deep: {
      background: "var(--pwb-blue-royal)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    secondary: {
      background: "#fff",
      color: "var(--pwb-blue-azure)",
      boxShadow: "inset 0 0 0 2px var(--pwb-blue-100)"
    },
    ghost: {
      background: "transparent",
      color: "var(--pwb-blue-azure)",
      boxShadow: "none"
    },
    danger: {
      background: "var(--pwb-red)",
      color: "#fff",
      boxShadow: "0 12px 26px rgba(200,8,7,.28)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.55em",
    width: full ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    lineHeight: 1,
    border: "none",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-fast) var(--ease-spring), filter var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const press = (e, on) => {
    if (!disabled) e.currentTarget.style.transform = on ? "scale(0.96)" : "scale(1)";
  };
  const hover = (e, on) => {
    if (!disabled) e.currentTarget.style.filter = on ? "brightness(0.94)" : "none";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseDown: e => press(e, true),
    onMouseUp: e => press(e, false),
    onMouseEnter: e => hover(e, true),
    onMouseLeave: e => {
      press(e, false);
      hover(e, false);
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. The deck uses two looks:
 *  • white  → soft cool shadow, dark text
 *  • brand/deep → solid blue, white text (info / CTA / stat blocks)
 *  • goldsoft → sticky-note yellow (playful register)
 */
function Card({
  children,
  variant = "white",
  pad = "lg",
  radius = "lg",
  interactive = false,
  style = {},
  ...rest
}) {
  const variants = {
    white: {
      background: "#fff",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-card)"
    },
    plain: {
      background: "#fff",
      color: "var(--text-body)",
      boxShadow: "none",
      border: "1px solid var(--border-subtle)"
    },
    brand: {
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    deep: {
      background: "var(--pwb-blue-royal)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    goldsoft: {
      background: "var(--pwb-gold-soft)",
      color: "#5A3A00",
      boxShadow: "var(--shadow-sm)"
    },
    muted: {
      background: "var(--pwb-gray-50)",
      color: "var(--text-body)",
      boxShadow: "none",
      border: "1px solid var(--border-subtle)"
    }
  };
  const pads = {
    none: 0,
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px"
  };
  const radii = {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius],
      padding: pads[pad],
      transition: interactive ? "transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out)" : undefined,
      ...variants[variant],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = "translateY(-4px)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = "translateY(0)";
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCoin.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconCoin — the signature flat circular icon "coin".
 * Azure circle + white glyph is the dominant pattern; gold variant used for benefit checks.
 * Pass any icon node (e.g. a Lucide icon) as children.
 */
function IconCoin({
  children,
  tone = "azure",
  size = 64,
  ring = false,
  style = {},
  ...rest
}) {
  const tones = {
    azure: ["var(--pwb-blue-azure)", "#fff"],
    deep: ["var(--pwb-blue-royal)", "#fff"],
    gold: ["var(--pwb-gold)", "#5A3A00"],
    warm: ["var(--pwb-orange)", "#fff"],
    soft: ["var(--pwb-blue-50)", "var(--pwb-blue-azure)"],
    white: ["#fff", "var(--pwb-blue-azure)"]
  };
  const [bg, fg] = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      boxShadow: ring ? "0 0 0 4px rgba(255,255,255,0.7), var(--shadow-sm)" : "var(--shadow-sm)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconCoin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCoin.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — eyebrow + heading (+ optional running "Let's Grow Together" rule).
 * Matches the deck's title treatment: small navy eyebrow, big black heading.
 */
function SectionHeader({
  eyebrow = null,
  title,
  desc = null,
  align = "left",
  runhead = false,
  runheadLabel = "Let's Grow Together",
  size = "lg",
  style = {},
  ...rest
}) {
  const titleSize = {
    md: "var(--fs-h2)",
    lg: "var(--fs-h1)",
    xl: "var(--fs-display-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), runhead && /*#__PURE__*/React.createElement("div", {
    className: "pwb-runhead",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", null, runheadLabel)), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: titleSize,
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      maxWidth: 620,
      marginInline: align === "center" ? "auto" : undefined,
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-body)"
    }
  }, desc));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/SpeakerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpeakerCard — speaker/talent portrait with the azure name-pill + role,
 * exactly the rundown treatment in the deck. Optional time + topic.
 */
function SpeakerCard({
  name,
  role,
  src = null,
  initial = null,
  time = null,
  topic = null,
  size = 120,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: size + 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: src,
    initial: initial || (name ? name[0] : "?"),
    alt: name,
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -14,
      position: "relative",
      zIndex: 2,
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      borderRadius: "var(--radius-pill)",
      padding: "6px 14px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "0.8125rem",
      boxShadow: "var(--shadow-sm)",
      maxWidth: size + 24
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, role), time && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--pwb-ink)"
    }
  }, time), topic && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: "0.75rem",
      color: "var(--text-body)"
    }
  }, topic));
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SponsorTierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SponsorTierCard — sponsorship package (Platinum/Gold/Silver/Bronze).
 * Tier badge, big price, who-it's-for blurb, benefit list with check/cross marks.
 */
function SponsorTierCard({
  tier,
  price,
  priceWords = null,
  forWhom = null,
  benefits = [],
  featured = false,
  tone = "brand",
  cta = null,
  style = {},
  ...rest
}) {
  const tierTone = {
    Platinum: "deep",
    Gold: "gold",
    Silver: "neutral",
    Bronze: "warm"
  }[tier] || tone;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "#fff",
      border: featured ? "2px solid var(--pwb-gold)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      padding: "28px 26px",
      boxShadow: featured ? "var(--shadow-pop)" : "var(--shadow-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      ...style
    }
  }, rest), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -12,
      right: 22,
      background: "var(--pwb-gold)",
      color: "#5A3A00",
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "0.7rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-gold)"
    }
  }, "Paling Diminati"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tierTone,
    size: "lg"
  }, tier)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "2rem",
      color: "var(--pwb-ink)",
      lineHeight: 1
    }
  }, price), priceWords && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, priceWords)), forWhom && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.875rem",
      color: "var(--pwb-blue-700)",
      fontWeight: 600,
      lineHeight: 1.5
    }
  }, forWhom), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, benefits.map((b, i) => {
    const item = typeof b === "string" ? {
      text: b,
      ok: true
    } : b;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontSize: "0.875rem",
        color: item.ok ? "var(--text-body)" : "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        width: 22,
        height: 22,
        marginTop: 1,
        borderRadius: "var(--radius-pill)",
        background: item.ok ? "var(--state-yes)" : "var(--pwb-gray-200)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        fontWeight: 800
      }
    }, item.ok ? "✓" : "–"), /*#__PURE__*/React.createElement("span", null, item.text));
  })), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, cta));
}
Object.assign(__ds_scope, { SponsorTierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SponsorTierCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — big proof number with a label. The festival leans on bold numerals
 * (5.000+ pengunjung, 300K+ traffic, 25 jt+ hadiah). Display font for the figure.
 */
function StatCard({
  value,
  label,
  sublabel = null,
  tone = "brand",
  align = "left",
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      background: "var(--pwb-blue-azure)",
      fg: "#fff",
      sub: "rgba(255,255,255,.85)"
    },
    deep: {
      background: "var(--pwb-blue-royal)",
      fg: "#fff",
      sub: "rgba(255,255,255,.85)"
    },
    light: {
      background: "#fff",
      fg: "var(--text-heading)",
      sub: "var(--text-muted)"
    },
    gold: {
      background: "var(--pwb-gold)",
      fg: "#5A3A00",
      sub: "#7a5200"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.background,
      color: t.fg,
      borderRadius: "var(--radius-lg)",
      padding: "26px 28px",
      boxShadow: tone === "light" ? "var(--shadow-card)" : "var(--shadow-pop)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      lineHeight: 1,
      fontSize: "clamp(2.2rem, 4vw, 3rem)",
      letterSpacing: "-0.01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.25
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: "0.8125rem",
      color: t.sub,
      fontWeight: 500
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared UI primitives for Pesta Wirausaha Bekasi UI kits.
   Mirrors components/core/* but attached to window for standalone kits.
   Load AFTER React + Babel + Lucide, BEFORE the screen scripts. */

const PWB_FONT_SANS = "var(--font-sans)";
function Icon({
  name,
  size = 24,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      ...style
    }
  }, rest));
}
function useLucide(dep) {
  React.useEffect(() => {
    const draw = () => window.lucide && window.lucide.createIcons();
    draw();
    const t = setTimeout(draw, 80);
    return () => clearTimeout(t);
  });
}
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  full,
  disabled,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: ".875rem"
    },
    md: {
      padding: "12px 24px",
      fontSize: "1rem"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "1.125rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    accent: {
      background: "var(--pwb-gold)",
      color: "#5A3A00",
      boxShadow: "var(--shadow-gold)"
    },
    deep: {
      background: "var(--pwb-blue-royal)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    secondary: {
      background: "#fff",
      color: "var(--pwb-blue-azure)",
      boxShadow: "inset 0 0 0 2px var(--pwb-blue-100)"
    },
    ghost: {
      background: "transparent",
      color: "var(--pwb-blue-azure)"
    },
    white: {
      background: "#fff",
      color: "var(--pwb-blue-royal)",
      boxShadow: "var(--shadow-sm)"
    },
    danger: {
      background: "var(--pwb-red)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ".55em",
      width: full ? "100%" : "auto",
      fontFamily: PWB_FONT_SANS,
      fontWeight: 700,
      lineHeight: 1,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      transition: "transform .14s var(--ease-spring), filter .24s",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(.96)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = "scale(1)"),
    onMouseEnter: e => !disabled && (e.currentTarget.style.filter = "brightness(.94)"),
    onMouseLeave: e => {
      if (!disabled) {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "none";
      }
    }
  }, rest), iconLeft, children, iconRight);
}
function Badge({
  children,
  tone = "brand",
  solid = true,
  size = "md",
  style = {},
  ...rest
}) {
  const p = {
    brand: ["var(--pwb-blue-azure)", "#fff", "var(--pwb-blue-50)", "var(--pwb-blue-700)"],
    deep: ["var(--pwb-blue-royal)", "#fff", "var(--pwb-blue-50)", "var(--pwb-blue-royal)"],
    gold: ["var(--pwb-gold)", "#5A3A00", "var(--pwb-gold-50)", "#8a5a00"],
    warm: ["var(--pwb-orange)", "#fff", "var(--pwb-orange-50)", "#b8410a"],
    danger: ["var(--pwb-red)", "#fff", "var(--pwb-red-50)", "var(--pwb-red)"],
    success: ["var(--state-yes)", "#fff", "#E7F7EB", "#1c7a35"],
    neutral: ["var(--pwb-gray-100)", "var(--pwb-gray-700)", "var(--pwb-gray-100)", "var(--pwb-gray-700)"]
  }[tone];
  const sz = {
    sm: {
      fontSize: ".6875rem",
      padding: "3px 9px"
    },
    md: {
      fontSize: ".75rem",
      padding: "5px 12px"
    },
    lg: {
      fontSize: ".875rem",
      padding: "7px 16px"
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: ".4em",
      fontFamily: PWB_FONT_SANS,
      fontWeight: 700,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      background: solid ? p[0] : p[2],
      color: solid ? p[1] : p[3],
      ...sz,
      ...style
    }
  }, rest), children);
}
function IconCoin({
  children,
  tone = "azure",
  size = 64,
  ring,
  style = {},
  ...rest
}) {
  const t = {
    azure: ["var(--pwb-blue-azure)", "#fff"],
    deep: ["var(--pwb-blue-royal)", "#fff"],
    gold: ["var(--pwb-gold)", "#5A3A00"],
    warm: ["var(--pwb-orange)", "#fff"],
    soft: ["var(--pwb-blue-50)", "var(--pwb-blue-azure)"],
    white: ["#fff", "var(--pwb-blue-azure)"]
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: t[0],
      color: t[1],
      boxShadow: ring ? "0 0 0 4px rgba(255,255,255,.7), var(--shadow-sm)" : "var(--shadow-sm)",
      ...style
    }
  }, rest), children);
}
function Card({
  children,
  variant = "white",
  pad = "lg",
  radius = "lg",
  interactive,
  style = {},
  ...rest
}) {
  const v = {
    white: {
      background: "#fff",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-card)"
    },
    plain: {
      background: "#fff",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)"
    },
    brand: {
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    deep: {
      background: "var(--pwb-blue-royal)",
      color: "#fff",
      boxShadow: "var(--shadow-pop)"
    },
    goldsoft: {
      background: "var(--pwb-gold-soft)",
      color: "#5A3A00",
      boxShadow: "var(--shadow-sm)"
    },
    muted: {
      background: "var(--pwb-gray-50)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)"
    }
  }[variant];
  const pads = {
    none: 0,
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px"
  }[pad];
  const radii = {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  }[radius];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii,
      padding: pads,
      transition: interactive ? "transform .24s var(--ease-spring), box-shadow .24s" : undefined,
      ...v,
      ...style
    },
    onMouseEnter: interactive ? e => e.currentTarget.style.transform = "translateY(-4px)" : undefined,
    onMouseLeave: interactive ? e => e.currentTarget.style.transform = "translateY(0)" : undefined
  }, rest), children);
}
function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
  runhead,
  runheadLabel = "Let's Grow Together",
  size = "lg",
  style = {},
  ...rest
}) {
  const ts = {
    md: "var(--fs-h2)",
    lg: "var(--fs-h1)",
    xl: "var(--fs-display-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), runhead && /*#__PURE__*/React.createElement("div", {
    className: "pwb-runhead",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", null, runheadLabel)), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: PWB_FONT_SANS,
      fontWeight: 800,
      fontSize: ts,
      letterSpacing: "-.02em",
      lineHeight: 1.08,
      color: "var(--text-heading)",
      margin: 0
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      maxWidth: 620,
      marginInline: align === "center" ? "auto" : undefined,
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-body)"
    }
  }, desc));
}
function StatCard({
  value,
  label,
  sublabel,
  tone = "brand",
  align = "left",
  style = {},
  ...rest
}) {
  const t = {
    brand: ["var(--pwb-blue-azure)", "#fff", "rgba(255,255,255,.85)"],
    deep: ["var(--pwb-blue-royal)", "#fff", "rgba(255,255,255,.85)"],
    light: ["#fff", "var(--text-heading)", "var(--text-muted)"],
    gold: ["var(--pwb-gold)", "#5A3A00", "#7a5200"]
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t[0],
      color: t[1],
      borderRadius: "var(--radius-lg)",
      padding: "26px 28px",
      boxShadow: tone === "light" ? "var(--shadow-card)" : "var(--shadow-pop)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      lineHeight: 1,
      fontSize: "clamp(2.2rem,4vw,3rem)",
      letterSpacing: "-.01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: PWB_FONT_SANS,
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.25
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: ".8125rem",
      color: t[2],
      fontWeight: 500
    }
  }, sublabel));
}
function Avatar({
  src,
  alt = "",
  initial,
  size = 96,
  ring = "gold",
  style = {},
  ...rest
}) {
  const rings = {
    gold: "0 0 0 4px #fff, 0 0 0 7px var(--pwb-gold)",
    azure: "0 0 0 4px #fff, 0 0 0 7px var(--pwb-blue-azure)",
    none: "var(--shadow-sm)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": alt || initial,
    style: {
      width: size,
      height: size,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: src ? "#fff" : "var(--pwb-blue-50)",
      backgroundImage: src ? `url(${src})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: rings[ring],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--pwb-blue-azure)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * .42,
      ...style
    }
  }, rest), !src && initial);
}
function SpeakerCard({
  name,
  role,
  src,
  initial,
  time,
  topic,
  size = 120,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: size + 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Avatar, {
    src: src,
    initial: initial || (name ? name[0] : "?"),
    alt: name,
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -14,
      position: "relative",
      zIndex: 2,
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      borderRadius: "var(--radius-pill)",
      padding: "6px 14px",
      fontFamily: PWB_FONT_SANS,
      fontWeight: 700,
      fontSize: ".8125rem",
      boxShadow: "var(--shadow-sm)",
      maxWidth: size + 24
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: ".75rem",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, role), time && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--pwb-ink)"
    }
  }, time), topic && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: ".75rem",
      color: "var(--text-body)"
    }
  }, topic));
}
function SponsorTierCard({
  tier,
  price,
  priceWords,
  forWhom,
  benefits = [],
  featured,
  cta,
  style = {},
  ...rest
}) {
  const tierTone = {
    Platinum: "deep",
    Gold: "gold",
    Silver: "neutral",
    Bronze: "warm"
  }[tier] || "brand";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      background: "#fff",
      border: featured ? "2px solid var(--pwb-gold)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-xl)",
      padding: "28px 26px",
      boxShadow: featured ? "var(--shadow-pop)" : "var(--shadow-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      ...style
    }
  }, rest), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -12,
      right: 22,
      background: "var(--pwb-gold)",
      color: "#5A3A00",
      fontFamily: PWB_FONT_SANS,
      fontWeight: 800,
      fontSize: ".7rem",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-gold)"
    }
  }, "Paling Diminati"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: tierTone,
    size: "lg"
  }, tier)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "2rem",
      color: "var(--pwb-ink)",
      lineHeight: 1
    }
  }, price), priceWords && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8125rem",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, priceWords)), forWhom && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: ".875rem",
      color: "var(--pwb-blue-700)",
      fontWeight: 600,
      lineHeight: 1.5
    }
  }, forWhom), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, benefits.map((b, i) => {
    const it = typeof b === "string" ? {
      text: b,
      ok: true
    } : b;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontSize: ".875rem",
        color: it.ok ? "var(--text-body)" : "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        width: 22,
        height: 22,
        marginTop: 1,
        borderRadius: "var(--radius-pill)",
        background: it.ok ? "var(--state-yes)" : "var(--pwb-gray-200)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: ".75rem",
        fontWeight: 800
      }
    }, it.ok ? "✓" : "–"), /*#__PURE__*/React.createElement("span", null, it.text));
  })), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, cta));
}
Object.assign(window, {
  PWBIcon: Icon,
  useLucide,
  PWBButton: Button,
  PWBBadge: Badge,
  PWBIconCoin: IconCoin,
  PWBCard: Card,
  PWBSectionHeader: SectionHeader,
  PWBStatCard: StatCard,
  PWBAvatar: Avatar,
  PWBSpeakerCard: SpeakerCard,
  PWBSponsorTierCard: SponsorTierCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agenda/app.jsx
try { (() => {
/* Agenda kit — rundown (day tabs) + speakers + partner communities */
const DAYS = [{
  id: "jum",
  label: "Jum'at",
  date: "31 Juli 2026",
  color: "var(--pwb-blue-azure)",
  rows: [{
    t: "14:00",
    title: "Opening Ceremony",
    tag: "Seremonial",
    who: [["Dr. H. Tri Adhianto", "Walikota Bekasi"]]
  }, {
    t: "16:00",
    title: "Sesi Religi",
    tag: "Religi & Keluarga",
    who: [["Ust. M Nur Maulana", "Penceramah"]]
  }, {
    t: "19:00",
    title: "Sesi Lokalpride",
    tag: "Inspirasi Bisnis",
    who: [["Suhu Wan", "Founder Idolmart"], ["M Rizky Ramadhan", "Founder Roscik"]]
  }, {
    t: "20:00",
    title: "Hiburan — Stand Up Comedy",
    tag: "Entertainment",
    who: [["Ratansa Setiawan", "Juara 3 SUCI 12"]]
  }]
}, {
  id: "sab",
  label: "Sabtu",
  date: "1 Agustus 2026",
  color: "var(--pwb-orange)",
  rows: [{
    t: "11:00",
    title: "Sesi Fashion",
    tag: "Inspirasi Bisnis",
    who: [["Ben Wirawan", "CEO Torch.id"], ["M Reza", "Founder Jilbrave"]]
  }, {
    t: "13:00",
    title: "Sesi Investasi",
    tag: "Inspirasi Bisnis",
    who: [["M Fajrin Rasyid", "Co-Founder Bukalapak"]]
  }, {
    t: "14:00",
    title: "Sesi F&B",
    tag: "Inspirasi Bisnis",
    who: [["Dian Aryanti", "CEO Ciomy"], ["Dhony Pratama", "Susu Mbok Darmi"]]
  }, {
    t: "17:00",
    title: "Sesi Health & Beauty",
    tag: "Keseimbangan Hidup",
    who: [["M Hadiyatuloh", "Founder Brighty"], ["Kilala Tilaar", "CEO Martha Tilaar"]]
  }, {
    t: "20:00",
    title: "Hiburan Musik",
    tag: "Entertainment",
    who: [["Avwikila", "Penyanyi"]]
  }]
}, {
  id: "min",
  label: "Minggu",
  date: "2 Agustus 2026",
  color: "var(--pwb-blue-royal)",
  rows: [{
    t: "11:00",
    title: "Sesi Peduli Lingkungan",
    tag: "Keseimbangan Hidup",
    who: [["Taufiq Yusuf", "Survival Architecture"], ["M B. Junerosano", "CEO Waste4Change"]]
  }, {
    t: "13:00",
    title: "Sesi Marketing",
    tag: "Inspirasi Bisnis",
    who: [["Adtyhia Pratama", "Guerilla Marketing"]]
  }, {
    t: "14:00",
    title: "Sesi Couplepreneur",
    tag: "Religi & Keluarga",
    who: [["Dimas Seto & Dhini", "Artist Couplepreneur"]]
  }, {
    t: "16:00",
    title: "Sesi Motivasi",
    tag: "Inspirasi Bisnis",
    who: [["Sandiaga S. Uno", "Tokoh Nasional"]]
  }, {
    t: "17:00",
    title: "Pengumuman Pemenang & Hiburan",
    tag: "Entertainment",
    who: [["Tries Band", "Live Music"]]
  }]
}];
const PARTNERS = ["GENPRO", "KPMI Bekasi", "Jaringan Pengusaha Bekasi", "BBPVP Cevest", "HIPMI Kota Bekasi", "APKULINDO", "Teman Trader", "IKABOGA", "Hijabersmom", "The Unlimited Space", "Gemantara", "Sahabat GTI", "Jawara Muda", "Recook.id"];
function initials(s) {
  return s.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
function RundownRow({
  row,
  color,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "92px 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "right",
      paddingRight: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.4rem",
      color: "var(--pwb-ink)"
    }
  }, row.t), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -1,
      top: 6,
      bottom: last ? "auto" : -34,
      width: 3,
      background: color,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -7,
      top: 6,
      width: 15,
      height: 15,
      borderRadius: "50%",
      background: "#fff",
      border: `3px solid ${color}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 30
    }
  }, /*#__PURE__*/React.createElement(PWBBadge, {
    tone: "brand",
    solid: false,
    size: "sm"
  }, row.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 12px",
      fontSize: "1.2rem",
      fontWeight: 800,
      color: "var(--text-heading)"
    }
  }, row.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 18
    }
  }, row.who.map(([n, r], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PWBAvatar, {
    initial: initials(n),
    size: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: ".9rem",
      color: "var(--text-heading)",
      whiteSpace: "nowrap",
      lineHeight: 1.25
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".76rem",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, r)))))));
}
function App() {
  useLucide();
  const [day, setDay] = React.useState("jum");
  const active = DAYS.find(d => d.id === day);
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
    href: "../landing/index.html",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-tda-bekasi.png",
    style: {
      height: 34
    },
    alt: "TDA Bekasi"
  })), /*#__PURE__*/React.createElement(PWBButton, {
    variant: "primary",
    size: "sm",
    onClick: () => window.location.href = "../registration/index.html",
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 16
    })
  }, "Daftar Gratis")), /*#__PURE__*/React.createElement("section", {
    className: "pwb-sky",
    style: {
      padding: "44px var(--gutter)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      color: "var(--pwb-gold)"
    }
  }, "Rundown Puncak Acara"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontWeight: 800,
      fontSize: "clamp(2rem,4vw,2.8rem)",
      letterSpacing: "-.02em",
      margin: "10px 0 6px"
    }
  }, "Jadwal Pesta Wirausaha Planet Bekasi"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.9)",
      margin: 0
    }
  }, "27 Juli \u2013 2 Agustus 2026 \xB7 Active Atrium Lt.2, Pakuwon Mall Bekasi")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      margin: "-26px 0 36px",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 3
    }
  }, DAYS.map(d => {
    const on = d.id === day;
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      onClick: () => setDay(d.id),
      style: {
        cursor: "pointer",
        padding: "12px 22px",
        borderRadius: "var(--radius-pill)",
        border: "none",
        background: on ? "#fff" : "rgba(255,255,255,.85)",
        boxShadow: on ? "var(--shadow-pop)" : "var(--shadow-sm)",
        fontFamily: "var(--font-sans)",
        transition: "all .2s",
        transform: on ? "translateY(-2px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: "1rem",
        color: on ? "var(--pwb-blue-royal)" : "var(--text-heading)"
      }
    }, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".76rem",
        color: "var(--text-muted)"
      }
    }, d.date));
  })), /*#__PURE__*/React.createElement(PWBCard, {
    variant: "white",
    pad: "xl",
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-runhead",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", null, active.label, ", ", active.date)), active.rows.map((r, i) => /*#__PURE__*/React.createElement(RundownRow, {
    key: i,
    row: r,
    color: active.color,
    last: i === active.rows.length - 1
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)",
      textAlign: "right",
      marginTop: 6
    }
  }, "*) Sebagian pembicara masih dalam konfirmasi"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pwb-cloud)"
    },
    className: "pwb-topo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "64px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    eyebrow: "Kolaborasi",
    title: "Komunitas yang Tumbuh Bersama",
    desc: "14+ komunitas pengusaha se-kota Bekasi berkolaborasi dalam Pesta Wirausaha Planet Bekasi 2026."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))",
      gap: 16,
      marginTop: 36
    }
  }, PARTNERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      padding: "18px 8px",
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBAvatar, {
    initial: initials(p),
    size: 56
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: ".78rem",
      fontWeight: 700,
      color: "var(--text-heading)",
      lineHeight: 1.2
    }
  }, p)))))));
}
window.AgendaApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agenda/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/parts-bottom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Landing — bottom sections: Tema, Speakers, Sponsors, Galeri, Venue, CTA, Footer */
const LBStyles = {
  section: {
    padding: "84px var(--gutter)",
    maxWidth: 1280,
    margin: "0 auto"
  }
};
function TemaAcara() {
  const items = [["photo-event-stage.jpg", "Religi & Keluarga", "Bisnis lebih rapi & delegasi tepat — waktu berkualitas untuk keluarga dan warisan (legacy) yang bermakna."], ["photo-event-talkshow.jpg", "Inspirasi Bisnis", "Agar bisnis tidak lagi owner-dependent, melainkan berjalan di atas sistem yang benar dan siap naik kelas (scale up)."], ["photo-event-workshop.jpg", "Keseimbangan Hidup", "Menjaga ritme kerja produktif tanpa mengabaikan kesehatan fisik, ketenangan batin, dan hubungan sosial."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "acara",
    style: LBStyles.section
  }, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    runhead: true,
    eyebrow: "Tema Acara",
    title: "Tiga Tema, Satu Semangat"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: 24,
      marginTop: 40
    }
  }, items.map(([img, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 190,
      borderRadius: "var(--radius-lg)",
      backgroundImage: `url(../../assets/${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "var(--shadow-card)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pwb-blue-azure)",
      color: "#fff",
      borderRadius: "var(--radius-md)",
      padding: "12px 18px",
      margin: "-22px 16px 0",
      position: "relative",
      textAlign: "center",
      fontWeight: 800,
      fontSize: "1.1rem",
      boxShadow: "var(--shadow-pop)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 6px 0",
      fontSize: ".92rem",
      color: "var(--text-body)"
    }
  }, d)))));
}
function Speakers() {
  const people = [["Sandiaga S. Uno", "Tokoh Nasional · Motivasi"], ["M Fajrin Rasyid", "Co-Founder Bukalapak"], ["Kilala Tilaar", "CEO Martha Tilaar Group"], ["Ben Wirawan", "Founder Torch.id"], ["Dian Aryanti", "CEO Ciomy"], ["Ust. M Nur Maulana", "Penceramah"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "speaker",
    style: {
      background: "var(--pwb-blue-royal)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...LBStyles.section
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-runhead",
    style: {
      marginBottom: 24,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, "Let's Grow Together")), /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      color: "var(--pwb-gold)",
      marginBottom: 12
    }
  }, "Rundown Puncak Acara"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontWeight: 800,
      fontSize: "var(--fs-h1)",
      letterSpacing: "-.02em",
      margin: 0,
      maxWidth: 620
    }
  }, "Belajar Langsung dari Para Praktisi & Tokoh"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      marginTop: 44,
      justifyContent: "center"
    }
  }, people.map(([n, r]) => /*#__PURE__*/React.createElement(PWBSpeakerCard, {
    key: n,
    name: n,
    role: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,.78)"
      }
    }, r),
    initial: n.replace(/^(Ust\.|M|Dr\.)\s*/, "")[0],
    size: 118
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "rgba(255,255,255,.6)",
      fontSize: ".82rem",
      marginTop: 32
    }
  }, "*) Sebagian pembicara masih dalam konfirmasi")));
}
function Sponsors({
  onRegister
}) {
  const tiers = [{
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
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "sponsor",
    style: LBStyles.section
  }, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    runhead: true,
    eyebrow: "Sponsorship",
    title: "Jadilah Bagian dari Bahan Bakar Ekonomi Bekasi",
    desc: "Pilih paket sponsorship yang paling cocok untuk brand Anda. Semua tier mendapat eksposur di videotron indoor & outdoor Pakuwon Mall."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: 22,
      marginTop: 48,
      alignItems: "stretch"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(PWBSponsorTierCard, _extends({
    key: t.tier
  }, t, {
    cta: /*#__PURE__*/React.createElement(PWBButton, {
      variant: t.featured ? "accent" : "secondary",
      full: true,
      onClick: onRegister
    }, "Pilih ", t.tier)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBBadge, {
    tone: "neutral",
    size: "lg"
  }, "+ Standar Indoor Booth \u2014 Rp 10 jt / booth (2\xD72 m, 7 hari)")));
}
function Galeri() {
  const imgs = ["photo-event-stage.jpg", "photo-mall-interior.jpg", "photo-event-expo.jpg", "photo-event-talkshow.jpg", "photo-event-workshop.jpg"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--pwb-cloud)"
    },
    className: "pwb-topo"
  }, /*#__PURE__*/React.createElement("div", {
    style: LBStyles.section
  }, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    eyebrow: "Dokumentasi",
    title: "Pengalaman Pesta Wirausaha Bekasi",
    desc: "Energi, koneksi, dan terobosan dari penyelenggaraan sebelumnya."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gridTemplateRows: "180px 180px",
      gap: 14,
      marginTop: 36
    }
  }, imgs.map((im, i) => /*#__PURE__*/React.createElement("div", {
    key: im,
    style: {
      gridColumn: i === 0 ? "span 1" : undefined,
      gridRow: i === 0 ? "span 2" : undefined,
      borderRadius: "var(--radius-md)",
      backgroundImage: `url(../../assets/${im})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "var(--shadow-sm)"
    }
  })))));
}
function Venue() {
  const stats = [["300K+", "Daily Traffic"], ["70K", "Weekend Visitors"], ["1M+", "Total Impressions"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "lokasi",
    style: LBStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PWBSectionHeader, {
    eyebrow: "The Venue",
    title: "Pakuwon Mall Bekasi"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.05rem",
      color: "var(--text-body)",
      margin: "8px 0 24px",
      maxWidth: 460
    }
  }, "Active Atrium Lt.2 \u2014 Jl. Raya Pekayon No.2, Pekayon Jaya, Bekasi Selatan, Jawa Barat 17148. Lokasi paling bergengsi & terbaru di Bekasi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 24
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: "var(--pwb-blue-50)",
      borderRadius: "var(--radius-md)",
      padding: "14px 18px",
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: "var(--pwb-blue-royal)"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".78rem",
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, l)))), /*#__PURE__*/React.createElement(PWBButton, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "map-pin",
      size: 18
    })
  }, "Buka di Google Maps")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      borderRadius: "var(--radius-xl)",
      backgroundImage: "url(../../assets/photo-venue-pakuwon-night.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "var(--shadow-card)"
    }
  })));
}
function CTA({
  onRegister
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "pwb-sky",
    style: {
      position: "relative",
      overflow: "hidden",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "72px var(--gutter)",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontWeight: 800,
      fontSize: "clamp(2rem,4vw,3rem)",
      letterSpacing: "-.02em",
      margin: 0
    }
  }, "Mari Kita Berpesta \uD83D\uDE80"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.92)",
      fontSize: "1.15rem",
      margin: "18px 0 30px"
    }
  }, "Tiket FREE namun kuota sangat terbatas demi menjaga kualitas networking B2B. Amankan kursi Anda sekarang."), /*#__PURE__*/React.createElement(PWBButton, {
    variant: "accent",
    size: "lg",
    onClick: onRegister,
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 20
    })
  }, "Daftar Sekarang \u2014 Kuota Terbatas")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#0A1A33",
      color: "rgba(255,255,255,.78)",
      padding: "56px var(--gutter) 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-tda-bekasi.png",
    alt: "TDA Bekasi",
    style: {
      height: 44,
      filter: "brightness(0) invert(1)",
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".9rem",
      maxWidth: 320
    }
  }, "Event kewirausahaan terbesar di Bekasi \u2014 wadah pengusaha untuk belajar, terhubung, dan tumbuh bersama.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: ".95rem",
      margin: "0 0 14px"
    }
  }, "Kontak"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: ".9rem"
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "mail",
    size: 16
  }), " tangandiatasbekasi@gmail.com"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "phone",
    size: 16
  }), " +62 838 5666 5556"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: "instagram",
    size: 16
  }), " @tdabekasi"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: ".95rem",
      margin: "0 0 14px"
    }
  }, "Lokasi"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".9rem",
      margin: 0
    }
  }, "Active Atrium Lt.2, Pakuwon Mall Bekasi", /*#__PURE__*/React.createElement("br", null), "Pekayon Jaya, Bekasi Selatan", /*#__PURE__*/React.createElement("br", null), "Jawa Barat 17148"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "32px auto 0",
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,.12)",
      fontSize: ".8rem",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Komunitas Tangan Di Atas (TDA) Bekasi. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Pesta Wirausaha Planet Bekasi 2026 \xB7 Let's Grow Together")));
}
Object.assign(window, {
  LTemaAcara: TemaAcara,
  LSpeakers: Speakers,
  LSponsors: Sponsors,
  LGaleri: Galeri,
  LVenue: Venue,
  LCTA: CTA,
  LFooter: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/parts-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/parts-top.jsx
try { (() => {
/* Landing — top sections: Nav, Hero, Stats marquee, Tantangan, Kenapa Hadir */
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
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["#tantangan", "Tantangan"], ["#acara", "Acara"], ["#speaker", "Speaker"], ["#sponsor", "Sponsor"], ["#lokasi", "Lokasi"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px var(--gutter)",
      background: "rgba(255,255,255,.92)",
      backdropFilter: "blur(10px)",
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition: "box-shadow .3s"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-tda-bekasi.png",
    alt: "TDA Bekasi",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
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
  }, t))), /*#__PURE__*/React.createElement(PWBButton, {
    variant: "primary",
    size: "sm",
    onClick: onRegister,
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 16
    })
  }, "Daftar Gratis"));
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
      padding: "56px var(--gutter) 72px",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 40,
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
  }, "Planet Bekasi")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.92)",
      fontSize: "1.15rem",
      lineHeight: 1.55,
      maxWidth: 520,
      margin: "20px 0 28px"
    }
  }, "Tujuh hari perayaan komunitas Tangan Di Atas \u2014 titik temu ribuan UMKM, mentor bisnis, dan investor. Bukan sekadar bazar. Mari tumbuh bersama."), /*#__PURE__*/React.createElement("div", {
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
  }, "Daftar Gratis"), /*#__PURE__*/React.createElement(PWBButton, {
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
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pwb-blue-royal)",
      borderRadius: "var(--radius-2xl)",
      padding: "20px 16px 8px",
      boxShadow: "0 30px 70px rgba(0,40,120,.4)",
      textAlign: "center",
      maxWidth: 440,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-badges-strip-blue.png",
    alt: "TDA Bekasi \xB7 To The Next Level \xB7 2 Dekade",
    style: {
      height: 40,
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-pwb-rocket-blue.png",
    alt: "Pesta Wirausaha Planet Bekasi 2026",
    style: {
      width: "100%",
      display: "block"
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
  const items = [["gauge", "Maximum Exposure", "Tampil di hadapan ribuan pengusaha, investor, dan profesional bisnis."], ["users", "Targeted Audience", "Komunitas pengusaha yang berkembang pesat — perluas jaringan & temukan partner."], ["camera", "Media Coverage", "Dukungan media partner nasional + videotron indoor & outdoor Pakuwon Mall."], ["megaphone", "Experiential Marketing", "Hadirkan produk Anda langsung ke target market lewat booth, demo, & sponsor program."]];
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
    desc: "Kami rancang Pesta Wirausaha Planet Bekasi 2026 sebagai katalis nyata untuk mendorong bisnis Anda melampaui batas."
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/parts-top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/login/app.jsx
try { (() => {
/* Login kit — PWB Apps / Panitia & Peserta sign-in */
function App() {
  useLucide();
  const [tab, setTab] = React.useState("masuk");
  const [show, setShow] = React.useState(false);
  const input = {
    width: "100%",
    padding: "13px 14px",
    borderRadius: "var(--radius-md)",
    border: "1.5px solid var(--border-strong)",
    fontFamily: "var(--font-sans)",
    fontSize: ".95rem",
    color: "var(--text-heading)",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-sky",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "56px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 320,
      height: 180,
      top: -30,
      left: -50,
      background: "radial-gradient(closest-side,#fff,rgba(255,255,255,0))",
      borderRadius: "50%",
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 280,
      height: 150,
      bottom: -20,
      right: "10%",
      background: "radial-gradient(closest-side,#fff,rgba(255,255,255,0))",
      borderRadius: "50%",
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-badges-strip-blue.png",
    alt: "TDA Bekasi",
    style: {
      height: 38,
      marginBottom: 26
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontWeight: 800,
      fontSize: "2.4rem",
      lineHeight: 1.1,
      letterSpacing: "-.02em",
      margin: 0
    }
  }, "Selamat datang di ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pwb-gold)"
    }
  }, "PWB Apps")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.9)",
      fontSize: "1.1rem",
      lineHeight: 1.55,
      margin: "16px 0 28px"
    }
  }, "Kelola tiket, jadwal sesi, misi gamifikasi, dan poin hadiah Pesta Wirausaha Planet Bekasi 2026."), /*#__PURE__*/React.createElement("span", {
    className: "pwb-pill-gold",
    style: {
      fontSize: "1rem"
    }
  }, "Let's Grow Together"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      background: "var(--pwb-cloud)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-pwb-rocket-blue.png",
    alt: "PWB 2026",
    style: {
      height: 96,
      borderRadius: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: 5,
      background: "var(--pwb-gray-100)",
      borderRadius: "var(--radius-pill)",
      marginBottom: 24
    }
  }, [["masuk", "Masuk"], ["daftar", "Daftar"]].map(([id, t]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      flex: 1,
      padding: "9px 0",
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: ".9rem",
      background: tab === id ? "#fff" : "transparent",
      color: tab === id ? "var(--pwb-blue-royal)" : "var(--text-muted)",
      boxShadow: tab === id ? "var(--shadow-sm)" : "none",
      transition: "all .2s"
    }
  }, t))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.4rem",
      fontWeight: 800,
      color: "var(--text-heading)",
      margin: "0 0 4px"
    }
  }, tab === "masuk" ? "Masuk ke akun Anda" : "Buat akun baru"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: ".9rem",
      color: "var(--text-muted)"
    }
  }, tab === "masuk" ? "Gunakan email terdaftar saat pendaftaran tiket." : "Daftar untuk akses tiket & gamifikasi."), tab === "daftar" && /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 700,
      fontSize: ".82rem",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, "Nama Lengkap"), /*#__PURE__*/React.createElement("input", {
    style: input,
    placeholder: "Nama Anda"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 700,
      fontSize: ".82rem",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: input,
    placeholder: "email@contoh.com"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 700,
      fontSize: ".82rem",
      color: "var(--text-heading)",
      marginBottom: 6
    }
  }, "Kata Sandi"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...input,
      paddingRight: 44
    },
    type: show ? "text" : "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(s => !s),
    style: {
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex",
      padding: 6
    },
    "aria-label": "toggle"
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: show ? "eye-off" : "eye",
    size: 18
  })))), tab === "masuk" && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: ".82rem",
      fontWeight: 700,
      color: "var(--pwb-blue-azure)"
    }
  }, "Lupa kata sandi?")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: tab === "masuk" ? 0 : 18
    }
  }, /*#__PURE__*/React.createElement(PWBButton, {
    variant: "primary",
    full: true,
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 18
    })
  }, tab === "masuk" ? "Masuk" : "Daftar Sekarang")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "18px 0",
      color: "var(--text-muted)",
      fontSize: ".8rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-subtle)"
    }
  }), " atau ", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-subtle)"
    }
  })), /*#__PURE__*/React.createElement(PWBButton, {
    variant: "secondary",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "chrome",
      size: 18
    })
  }, "Lanjut dengan Google"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: ".85rem",
      color: "var(--text-muted)",
      marginTop: 22
    }
  }, tab === "masuk" ? "Belum punya akun? " : "Sudah punya akun? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setTab(tab === "masuk" ? "daftar" : "masuk");
    },
    style: {
      fontWeight: 700,
      color: "var(--pwb-blue-azure)"
    }
  }, tab === "masuk" ? "Daftar" : "Masuk")))));
}
window.LoginApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/login/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/registration/app.jsx
try { (() => {
/* Registration kit — multi-step free-ticket flow for PWB 2026 */
const RStyles = {
  shell: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "28px var(--gutter) 64px",
    display: "grid",
    gridTemplateColumns: "1.5fr .9fr",
    gap: 28,
    alignItems: "start"
  }
};
const TICKETS = [{
  id: "visitor",
  name: "Visitor Pass",
  price: "GRATIS",
  icon: "ticket",
  desc: "Akses 7 hari ke Expo, Talkshow & Entertainment.",
  note: "Kuota terbatas"
}, {
  id: "member",
  name: "Member TDA",
  price: "GRATIS",
  icon: "badge-check",
  desc: "Priority seating + akses lounge komunitas TDA.",
  note: "Khusus member"
}, {
  id: "exhibitor",
  name: "Exhibitor Booth",
  price: "Rp 10 jt",
  icon: "store",
  desc: "Booth standar 2×2 m, 7 hari — meja, kursi, listrik 2A.",
  note: "B2B / UMKM"
}];
const SESSIONS = ["Inspirasi Bisnis", "Religi & Keluarga", "Keseimbangan Hidup", "Business Matching", "Workshop", "Entertainment"];
function Stepper({
  step,
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0,
      marginBottom: 26
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
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
      fontSize: ".9rem",
      color: i <= step ? "var(--text-heading)" : "var(--text-muted)"
    }
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      margin: "0 14px",
      background: i < step ? "var(--pwb-blue-azure)" : "var(--pwb-gray-200)"
    }
  }))));
}
function Field({
  label,
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
  }, label), children);
}
const inputStyle = {
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
function App() {
  useLucide();
  const [step, setStep] = React.useState(0);
  const [ticket, setTicket] = React.useState("visitor");
  const [form, setForm] = React.useState({
    nama: "",
    email: "",
    wa: "",
    usaha: ""
  });
  const [sessions, setSessions] = React.useState(["Inspirasi Bisnis"]);
  const steps = ["Pilih Tiket", "Data Diri", "E-Ticket"];
  const selected = TICKETS.find(t => t.id === ticket);
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const toggleSession = s => setSessions(a => a.includes(s) ? a.filter(x => x !== s) : [...a, s]);
  const canNext = step === 0 ? !!ticket : step === 1 ? form.nama && form.email && form.wa : true;
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
    href: "../landing/index.html",
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
    src: "../../assets/logo-tda-bekasi.png",
    style: {
      height: 32
    },
    alt: "TDA Bekasi"
  })), /*#__PURE__*/React.createElement(PWBBadge, {
    tone: "brand"
  }, "Pendaftaran PWB 2026")), /*#__PURE__*/React.createElement("div", {
    style: RStyles.shell
  }, /*#__PURE__*/React.createElement(PWBCard, {
    variant: "white",
    pad: "xl",
    style: {
      minHeight: 440
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    step: step,
    steps: steps
  }), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "0 0 6px",
      color: "var(--text-heading)"
    }
  }, "Pilih jenis tiket Anda"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      color: "var(--text-body)",
      fontSize: ".95rem"
    }
  }, "Tiket masuk GRATIS, namun kuota sangat terbatas demi kualitas networking."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, TICKETS.map(t => {
    const on = ticket === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTicket(t.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        textAlign: "left",
        cursor: "pointer",
        padding: "16px 18px",
        borderRadius: "var(--radius-lg)",
        background: on ? "var(--pwb-blue-50)" : "#fff",
        border: on ? "2px solid var(--pwb-blue-azure)" : "1.5px solid var(--border-subtle)",
        transition: "all .2s"
      }
    }, /*#__PURE__*/React.createElement(PWBIconCoin, {
      tone: on ? "azure" : "soft",
      size: 48
    }, /*#__PURE__*/React.createElement(PWBIcon, {
      name: t.icon,
      size: 24
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: "1.02rem",
        color: "var(--text-heading)"
      }
    }, t.name), /*#__PURE__*/React.createElement(PWBBadge, {
      tone: "neutral",
      size: "sm"
    }, t.note)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: ".86rem",
        color: "var(--text-body)",
        marginTop: 3
      }
    }, t.desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: t.price === "GRATIS" ? "var(--state-yes)" : "var(--pwb-blue-royal)"
      }
    }, t.price));
  }))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "0 0 18px",
      color: "var(--text-heading)"
    }
  }, "Lengkapi data diri"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nama Lengkap *"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.nama,
    onChange: e => set("nama", e.target.value),
    placeholder: "Nama Anda"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Email *"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.email,
    onChange: e => set("email", e.target.value),
    placeholder: "email@contoh.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "No. WhatsApp *"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.wa,
    onChange: e => set("wa", e.target.value),
    placeholder: "08xx xxxx xxxx"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Bidang Usaha / Profesi"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.usaha,
    onChange: e => set("usaha", e.target.value),
    placeholder: "F&B, Fashion, Mahasiswa\u2026"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: ".82rem",
      color: "var(--text-heading)",
      marginBottom: 10
    }
  }, "Sesi yang diminati"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, SESSIONS.map(s => {
    const on = sessions.includes(s);
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => toggleSession(s),
      style: {
        cursor: "pointer",
        padding: "8px 14px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: ".82rem",
        border: "1.5px solid " + (on ? "var(--pwb-blue-azure)" : "var(--border-strong)"),
        background: on ? "var(--pwb-blue-azure)" : "#fff",
        color: on ? "#fff" : "var(--text-body)",
        transition: "all .15s"
      }
    }, on ? "✓ " : "", s);
  })))), step === 2 && /*#__PURE__*/React.createElement("div", {
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
    name: "party-popper",
    size: 32
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "0 0 4px",
      color: "var(--text-heading)"
    }
  }, "E-Ticket Anda siap! \uD83D\uDE80"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      color: "var(--text-body)",
      fontSize: ".95rem"
    }
  }, "Tunjukkan QR ini di pintu masuk Pakuwon Mall Bekasi."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--pwb-blue-royal)",
      borderRadius: "var(--radius-xl)",
      padding: 4,
      maxWidth: 420,
      margin: "0 auto",
      boxShadow: "var(--shadow-pop)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "calc(var(--radius-xl) - 4px)",
      padding: "22px 24px",
      display: "flex",
      gap: 18,
      alignItems: "center",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 92,
      borderRadius: "var(--radius-md)",
      background: "conic-gradient(#0F1419 0 25%,#fff 0 50%,#0F1419 0 75%,#fff 0)",
      backgroundSize: "16px 16px",
      flex: "0 0 auto",
      border: "4px solid #0F1419"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pwb-eyebrow",
    style: {
      color: "var(--pwb-blue-azure)"
    }
  }, selected.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "1.15rem",
      color: "var(--text-heading)",
      margin: "2px 0"
    }
  }, form.nama || "Peserta PWB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)"
    }
  }, "27 Juli \u2013 2 Agustus 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)"
    }
  }, "Pakuwon Mall Bekasi \xB7 Lt.2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      marginTop: 6,
      color: "var(--pwb-blue-royal)",
      letterSpacing: ".05em"
    }
  }, "#PWB26-", (form.nama || "PESERTA").slice(0, 3).toUpperCase(), "208")))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: ".82rem",
      color: "var(--text-muted)"
    }
  }, "Salinan e-ticket juga dikirim ke ", form.email || "email Anda", ".")), /*#__PURE__*/React.createElement("div", {
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
    onClick: () => setStep(step + 1),
    iconRight: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "arrow-right",
      size: 18
    })
  }, step === 1 ? "Terbitkan E-Ticket" : "Lanjut") : /*#__PURE__*/React.createElement(PWBButton, {
    variant: "accent",
    onClick: () => {
      setStep(0);
      setForm({
        nama: "",
        email: "",
        wa: "",
        usaha: ""
      });
    },
    iconLeft: /*#__PURE__*/React.createElement(PWBIcon, {
      name: "download",
      size: 18
    })
  }, "Selesai \xB7 Daftar Lagi"))), /*#__PURE__*/React.createElement(PWBCard, {
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
  }, "Ringkasan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(PWBIconCoin, {
    tone: "soft",
    size: 44
  }, /*#__PURE__*/React.createElement(PWBIcon, {
    name: selected.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      color: "var(--text-heading)",
      whiteSpace: "nowrap"
    }
  }, selected.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".8rem",
      color: "var(--text-muted)"
    }
  }, selected.note))), /*#__PURE__*/React.createElement(Row, {
    label: "Tanggal",
    value: "27 Jul \u2013 2 Agu 2026"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Jam",
    value: "10.00 \u2013 21.00 WIB"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Lokasi",
    value: "Pakuwon Mall Bekasi"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sesi dipilih",
    value: `${sessions.length} sesi`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "14px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-heading)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.4rem",
      color: selected.price === "GRATIS" ? "var(--state-yes)" : "var(--pwb-blue-royal)"
    }
  }, selected.price)), /*#__PURE__*/React.createElement("div", {
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
  }), " Data Anda aman & hanya untuk keperluan acara."))));
}
function Row({
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
window.RegistrationApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/registration/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconCoin = __ds_scope.IconCoin;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.SponsorTierCard = __ds_scope.SponsorTierCard;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
