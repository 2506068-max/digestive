# AGENTS.md

## Project

Website edukatif interaktif tentang sistem pencernaan manusia.

Tujuan utama project adalah membuat media pembelajaran anatomi yang mudah dipahami masyarakat umum dengan visual yang menarik, informasi yang akurat, dan interaksi yang sederhana.

## Core Rules

1. Jangan mengubah tujuan utama website.
2. Prioritaskan pemahaman pengguna dibanding dekorasi visual.
3. Jangan mengarang fakta medis.
4. Gunakan bahasa Indonesia yang sederhana untuk konten pengguna.
5. Istilah medis harus diberi konteks atau penjelasan.
6. Jangan memberikan diagnosis atau saran medis personal.
7. Jangan membuat UI terlalu ramai.
8. Jangan menggunakan animasi berlebihan.
9. Semua fitur harus responsive.
10. Jangan mengulang data organ di banyak komponen.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- SVG untuk diagram anatomi interaktif

## Architecture

Gunakan struktur modular:

```text
src/
├── components/
├── pages/
├── data/
├── types/
├── assets/
├── hooks/
├── utils/
├── App.tsx
└── main.tsx
```

Komponen UI harus reusable.

Data edukasi harus dipisahkan dari komponen presentasi.

Contoh:
- `data/organs.ts` berisi data organ.
- `components/OrganDetail.tsx` menampilkan data organ.
- Jangan menulis data organ berulang di setiap halaman.

## Design Direction

Visual harus terasa seperti gabungan:
- Medical illustration
- Modern educational platform
- Clean editorial design

Hindari:
- Neon berlebihan.
- Gradient ekstrem.
- Glassmorphism berlebihan.
- Card berlapis-lapis.
- Ikon organ yang terlalu kartun.
- Animasi yang mengganggu pembelajaran.

Organ harus terlihat jelas dan mudah dikenali.

## Anatomy Interaction

Diagram sistem pencernaan harus:
- Memiliki hotspot yang jelas.
- Menampilkan nama organ.
- Memiliki hover/focus/active state.
- Bisa digunakan pada layar sentuh.
- Tidak hanya mengandalkan warna.
- Menyediakan alternatif informasi melalui daftar organ.

Jika SVG digunakan, setiap organ harus memiliki identifier yang stabil.

## Content Rules

Untuk setiap organ gunakan format:

1. Nama.
2. Nama Inggris bila relevan.
3. Deskripsi singkat.
4. Fungsi utama.
5. Bagian-bagian.
6. Fungsi setiap bagian.
7. Fakta tambahan bila diperlukan.

Jangan membuat paragraf terlalu panjang.

Contoh gaya:

> Lambung adalah organ berbentuk kantong yang menyimpan dan mengolah makanan sebelum diteruskan ke usus halus.

Lebih baik daripada:

> Lambung merupakan suatu organ gastrointestinal yang memiliki morfologi kompleks dan berfungsi...

Targetnya manusia umum, bukan ujian anatomi kedokteran.

## Medical Accuracy

Jika informasi anatomi tidak pasti:
- Jangan menebak.
- Gunakan sumber medis/pendidikan tepercaya.
- Pertahankan konsistensi istilah.
- Hindari klaim absolut jika konteks ilmiahnya membutuhkan pengecualian.

Sumber yang dapat diprioritaskan:
- Kementerian Kesehatan RI.
- WHO.
- MedlinePlus.
- NIH.
- NCBI.
- Buku teks anatomi/fisiologi akademik yang kredibel.

## Accessibility

Wajib:
- Semantic HTML.
- Alt text.
- Keyboard navigation.
- Visible focus state.
- Kontras yang cukup.
- `aria-label` untuk hotspot yang diperlukan.
- Support `prefers-reduced-motion`.

Jangan menyampaikan informasi penting hanya melalui warna.

## Responsive Rules

Desktop:
- Diagram dapat menggunakan layout dua kolom.
- Detail organ dapat muncul sebagai panel samping.

Mobile:
- Gunakan single-column layout.
- Panel detail berubah menjadi bottom sheet/card.
- Hotspot harus cukup besar untuk disentuh.
- Hindari horizontal overflow.

## Animation Rules

Gunakan Framer Motion secara ringan.

Animasi yang disarankan:
- Fade.
- Slide.
- Scale kecil.
- Path/route animation pada perjalanan makanan.

Durasi umumnya:
- Micro interaction: 150-250ms.
- Section transition: 300-500ms.

Hormati:

```css
@media (prefers-reduced-motion: reduce) {
  /* minimize or disable non-essential animation */
}
```

## Performance

- Optimalkan gambar.
- Gunakan SVG untuk diagram bila sesuai.
- Lazy-load asset besar.
- Jangan memasukkan library besar tanpa alasan.
- Hindari rendering ulang yang tidak diperlukan.
- Jangan menggunakan video berat sebagai background.

## Code Quality

- Gunakan TypeScript.
- Hindari `any` kecuali benar-benar diperlukan.
- Gunakan nama komponen yang jelas.
- Hindari komponen terlalu besar.
- Pisahkan data, UI, dan logic.
- Gunakan reusable utilities/hooks jika diperlukan.

Sebelum menyelesaikan perubahan:
1. Jalankan typecheck.
2. Jalankan build.
3. Periksa console error.
4. Periksa responsive layout.
5. Periksa keyboard accessibility pada komponen interaktif.

## Git Rules

Gunakan commit yang jelas, misalnya:

```text
feat: add interactive digestive system
feat: add organ detail panel
feat: add food journey animation
feat: add digestive system quiz
fix: improve mobile anatomy layout
fix: correct organ information
refactor: separate organ data from UI
```

Jangan menggunakan commit seperti:
- `update`
- `fix`
- `changes`
- `final`
- `done`

## Agent Behavior

Saat mengerjakan task:

1. Pahami struktur project terlebih dahulu.
2. Cari komponen/data yang sudah ada sebelum membuat file baru.
3. Reuse komponen yang relevan.
4. Jangan menghapus fitur yang tidak terkait.
5. Jangan melakukan perubahan besar tanpa alasan.
6. Setelah implementasi, validasi build/typecheck.
7. Jika ada konflik antara desain dan usability, prioritaskan usability.
8. Jika ada konflik antara dekorasi dan akurasi edukasi, prioritaskan akurasi.

## Definition of Done

Task selesai jika:
- Implementasi sesuai requirement.
- TypeScript tidak error.
- Build berhasil.
- Tidak ada console error yang disebabkan perubahan.
- Mobile dan desktop tetap usable.
- Konten edukasi mudah dipahami.
- Interaksi dapat diakses dengan keyboard bila relevan.
- Tidak ada fitur existing yang rusak tanpa alasan.

## Important

Website ini adalah media edukasi. Jangan mengubahnya menjadi aplikasi diagnosis kesehatan.

Fokus:
**Explore → Understand → Follow → Test**
