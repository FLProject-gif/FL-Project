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
- `daftar.html` — halaman registrasi pengunjung (alur 3 langkah → e-ticket)
- `registration-app.jsx` — logika halaman registrasi pengunjung
- `sponsor.html` — halaman pendaftaran sponsor (alur 3 langkah B2B)
- `sponsor-app.jsx` — logika pendaftaran sponsor (paket Platinum → Bronze)
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

- Tombol **"Daftar Gratis"** mengarah ke `daftar.html`. Form di langkah "Data Diri"
  di-submit ke **Netlify Forms** (nama form: `pwb-registration`) saat klik
  "Terbitkan E-Ticket". Data pendaftar muncul di Netlify → tab **Forms**.
  Netlify Forms hanya aktif setelah situs di-deploy di Netlify.
- Tombol **"Pilih [Platinum/Gold/Silver/Bronze]"** di section Sponsor mengarah ke
  `sponsor.html?tier=<paket>` (alur terpisah dari tiket pengunjung). Form di-submit
  ke **Netlify Forms** (nama form: `pwb-sponsor`). Tidak ada pembayaran online —
  tim sponsorship menghubungi mitra untuk penawaran & invoice.
- E-Ticket + QR di langkah akhir masih tampilan (QR belum di-generate unik /
  belum kirim email otomatis). Bisa ditambah nanti bila diperlukan.
- Domain: `pwbekasi.id` (disiapkan, belum dihubungkan ke Netlify).
