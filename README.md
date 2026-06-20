# Pesta Wirausaha Planet Bekasi 2026 — Landing Page

Marketing site untuk **Pesta Wirausaha Planet Bekasi 2026** (TDA Bekasi).
Landing page statis berbasis React (UMD + Babel via CDN), di-deploy ke **Netlify**.

## Struktur

- `index.html` — entry halaman, memuat React/Babel/Lucide dari CDN
- `styles.css` — entry token (meng-`@import` folder `tokens/`)
- `tokens/` — design tokens (warna, font, spacing, dll)
- `ui.jsx` — komponen primitif (Button, Card, Badge, dll)
- `parts-top.jsx` — section Nav, Hero, Marquee, Tantangan, Kenapa Hadir
- `parts-bottom.jsx` — section Tema, Speaker, Sponsor, Galeri, Venue, CTA, Footer
- `assets/` — logo & foto

## Jalankan lokal

Karena memuat file `.jsx` via fetch, harus lewat HTTP (bukan buka file langsung):

```bash
npx serve .
# atau
python -m http.server 8000
```

## Deploy (Netlify)

1. Login Netlify via GitHub, pilih repo `FLProject-gif/FL-Project`.
2. Build command: kosongkan. Publish directory: `.` (sudah diatur di `netlify.toml`).
3. Tiap `git push` ke `main` akan ter-deploy otomatis.

## Catatan

- Tombol **"Daftar Gratis"** saat ini scroll ke section CTA. Halaman registrasi
  (ada di bundle desain) belum di-deploy — perlu ditentukan tujuan akhirnya
  (deploy halaman registrasi / Google Form / link WhatsApp).
- Domain: `pwbekasi.id` (disiapkan, belum dihubungkan ke Netlify).
