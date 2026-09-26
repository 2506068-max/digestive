# AGENT.md — Atlas Pencernaan

Panduan ini untuk agent/AI coding assistant (atau kontributor manusia) yang mengerjakan lanjutan proyek website edukasi "Atlas Pencernaan". Baca ini sebelum mengubah kode.

## Ringkasan Proyek

Website edukasi satu halaman (single-file HTML) tentang sistem pencernaan manusia, berbahasa Indonesia, ditujukan untuk masyarakat umum. Lihat `PRD.md` untuk tujuan produk dan lingkup lengkap.

## Struktur File

- `sistem-pencernaan.html` — seluruh produk: HTML + CSS + JavaScript dalam satu berkas mandiri. Tidak dipecah menjadi beberapa file kecuali diminta.
- `PRD.md` — dokumen kebutuhan produk.
- `AGENT.md` — file ini.

## Prinsip yang Harus Dijaga

1. **Satu file mandiri.** Jangan pecah menjadi banyak file tanpa alasan kuat — memudahkan hosting/pembagian sebagai artifact.
2. **Tanpa dependensi berat.** Hanya boleh memuat skrip/font eksternal dari host yang sudah diizinkan (Google Fonts, cdnjs). Jangan tambah framework besar (React, dsb.) untuk kebutuhan sekecil ini.
3. **Bahasa Indonesia sederhana.** Semua teks harus bisa dipahami orang awam, bukan mahasiswa kedokteran. Hindari istilah medis tanpa penjelasan singkat.
4. **Data organ terpusat.** Semua nama, deskripsi, dan fungsi organ disimpan dalam satu objek JavaScript `ORGANS` di bagian `<script>`. Tambah/ubah organ hanya lewat objek ini — jangan duplikasi teks di HTML statis.
5. **SVG, bukan gambar foto.** Ilustrasi organ digambar sebagai `<path>`/`<ellipse>`/`<rect>` inline agar ringan, mudah diwarnai, dan mudah diberi interaksi klik. Jangan impor gambar dari internet (masalah lisensi & akurasi anatomi).
6. **Aksesibilitas wajib.** Setiap organ interaktif butuh: `tabindex="0"`, `role="button"`, `aria-label`, dan harus merespons `Enter`/`Spasi` selain klik mouse. Jangan hilangkan ini saat menambah organ baru.
7. **Terang & gelap otomatis.** Semua warna didefinisikan sebagai CSS variable di `:root` dan memiliki versi mode gelap lewat `@media (prefers-color-scheme: dark)`. Jangan hardcode warna langsung di elemen.

## Cara Menambah Organ Baru

1. Tambah entri baru di objek `ORGANS` (nama, deskripsi, fungsi — minimal 3 poin).
2. Tambah bentuk SVG baru di dalam `<svg id="body">` dengan `class="organ"`, `data-organ="id-yang-sama-dengan-key-ORGANS"`, dan atribut aksesibilitas (lihat poin 6).
3. Tambah warna baru sebagai CSS variable di `:root` (dan pastikan kontrasnya cukup di mode gelap).
4. Kartu di bagian "Daftar Lengkap Organ" dibuat otomatis lewat JavaScript dari objek `ORGANS` — tidak perlu ditulis manual di HTML.

## Yang Tidak Boleh Dilakukan Tanpa Diskusi

- Menambahkan backend, API eksternal, atau penyimpanan data pengguna (lihat PRD §4, out-of-scope).
- Mengubah dari Bahasa Indonesia ke bahasa lain sebagai pengganti (boleh ditambah sebagai versi terpisah).
- Menambahkan konten tentang penyakit/gangguan pencernaan ke halaman utama — itu masuk rencana pengembangan lanjutan (PRD §10), sebaiknya jadi halaman/berkas terpisah agar halaman utama tetap fokus pada anatomi normal.

## Checklist Sebelum Menganggap Perubahan Selesai

- [ ] Semua organ di `ORGANS` punya pasangan bentuk SVG dengan `data-organ` yang cocok (dan sebaliknya).
- [ ] Halaman tetap enak dilihat di lebar layar ±360px (ponsel kecil).
- [ ] Kontras warna teks vs latar tetap cukup di mode terang maupun gelap.
- [ ] Interaksi klik dan keyboard sama-sama berfungsi untuk organ baru.
- [ ] Tidak ada teks medis yang butuh penjelasan tambahan bagi orang awam.
