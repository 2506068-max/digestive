# PRD - Website Edukasi Sistem Pencernaan

## 1. Ringkasan Produk

Website edukatif interaktif tentang sistem pencernaan manusia yang dapat digunakan oleh masyarakat umum, pelajar, dan mahasiswa untuk memahami organ pencernaan, bagian-bagiannya, fungsi, serta perjalanan makanan di dalam tubuh.

Website harus mengutamakan visual anatomi yang jelas, bahasa sederhana, interaksi yang intuitif, dan pengalaman belajar yang menarik tanpa mengorbankan akurasi ilmiah.

## 2. Tujuan

- Membantu pengguna mengenali organ-organ sistem pencernaan.
- Menjelaskan setiap organ beserta bagian dan fungsi utamanya.
- Memvisualisasikan perjalanan makanan dari mulut hingga anus.
- Menjelaskan organ aksesori: hati, kantung empedu, dan pankreas.
- Membuat pembelajaran anatomi lebih interaktif dibandingkan halaman teks biasa.
- Menyediakan kuis untuk menguji pemahaman pengguna.

## 3. Target Pengguna

- Masyarakat umum.
- Siswa SMP/SMA.
- Mahasiswa tingkat awal.
- Guru/dosen sebagai media pembelajaran pendukung.

Pengetahuan awal pengguna dianggap minimal. Istilah medis harus selalu disertai penjelasan bahasa sederhana.

## 4. Konsep Utama

### Explore
Pengguna dapat menjelajahi diagram sistem pencernaan dan memilih organ.

### Understand
Setiap organ menampilkan nama, nama Inggris bila relevan, deskripsi, bagian-bagian, dan fungsi.

### Follow
Pengguna dapat mengikuti perjalanan makanan dari mulut sampai anus melalui animasi/step-by-step.

### Test
Pengguna dapat mengerjakan kuis dan melihat hasilnya.

## 5. Halaman / Section

### A. Beranda
- Hero section.
- Judul: "Kenali Sistem Pencernaanmu"
- Deskripsi singkat.
- CTA "Mulai Eksplorasi".
- Ilustrasi sistem pencernaan manusia.
- Ringkasan fungsi sistem pencernaan.

### B. Explore Sistem Pencernaan
Tampilkan diagram anatomi interaktif.

Organ utama:
- Mulut
- Faring
- Esofagus
- Lambung
- Usus halus
- Usus besar
- Rektum
- Anus

Organ aksesori:
- Hati
- Kantung empedu
- Pankreas

Setiap organ harus memiliki hotspot/click target yang jelas.

### C. Detail Organ
Setiap organ menampilkan:
- Nama Indonesia.
- Nama Inggris jika relevan.
- Ilustrasi.
- Deskripsi.
- Fungsi utama.
- Bagian-bagian organ.
- Penjelasan setiap bagian.
- Fakta singkat bila relevan.

### D. Detail Lambung
Minimal:
- Kardia
- Fundus
- Korpus
- Antrum
- Pilorus
- Sfingter pilorus

### E. Detail Usus Halus
Minimal:
- Duodenum
- Jejunum
- Ileum
- Vili
- Mikrovili

### F. Detail Usus Besar
Minimal:
- Sekum
- Kolon asendens
- Kolon transversum
- Kolon desendens
- Kolon sigmoid
- Rektum
- Anus

### G. Organ Aksesori
- Hati
- Kantung empedu
- Pankreas

Jelaskan hubungan ketiganya dengan proses pencernaan.

### H. Perjalanan Makanan
Buat visual step-by-step:
1. Mulut
2. Faring
3. Esofagus
4. Lambung
5. Duodenum
6. Jejunum
7. Ileum
8. Usus besar
9. Rektum
10. Anus

Setiap tahap menjelaskan apa yang terjadi pada makanan.

### I. Tahukah Kamu?
Kartu fakta pendek dan mudah dipahami.

### J. Quiz
- Pertanyaan pilihan ganda.
- Minimal 10 soal.
- Skor akhir.
- Feedback jawaban.
- Penjelasan jawaban benar.
- Tombol ulangi kuis.

## 6. Prinsip Konten

- Gunakan bahasa Indonesia yang sederhana.
- Hindari paragraf terlalu panjang.
- Istilah anatomi penting boleh digunakan, tetapi harus dijelaskan.
- Jangan membuat klaim medis yang tidak didukung sumber tepercaya.
- Konten harus bersifat edukatif, bukan diagnosis atau konsultasi medis.
- Informasi anatomi harus konsisten antarhalaman.

## 7. UX/UI

Gaya:
- Modern.
- Clean.
- Edukatif.
- Medical-inspired.
- Ramah untuk semua umur.
- Tidak terlihat seperti dashboard enterprise.
- Tidak terlalu ramai.

Visual organ sebaiknya realistis/medis, bukan ikon kartun generik.

Gunakan:
- Hierarki tipografi yang jelas.
- Card secukupnya.
- Animasi lembut.
- Hover state.
- Active state.
- Tooltip/hotspot.
- Progress indicator pada perjalanan makanan.

Responsive:
- Mobile-first.
- Tablet.
- Desktop.

Navigasi mobile tidak boleh terlalu penuh.

## 8. Aksesibilitas

- Kontras teks yang baik.
- Semua gambar informatif memiliki alt text.
- Hotspot dapat dipahami tanpa hanya mengandalkan warna.
- Tombol memiliki ukuran yang nyaman disentuh.
- Animasi tidak boleh menjadi satu-satunya cara memperoleh informasi.
- Hormati prefers-reduced-motion.

## 9. Teknologi

Frontend:
- React
- TypeScript
- Vite
- Tailwind CSS

Animation:
- Framer Motion

Icons:
- Lucide React

Diagram:
- SVG interaktif jika memungkinkan.

Backend/database tidak diperlukan untuk MVP kecuali ada kebutuhan penyimpanan skor atau akun.

## 10. Struktur Data

Organ harus disimpan sebagai data terstruktur, bukan hard-coded berulang di banyak komponen.

Contoh:

```ts
interface Organ {
  id: string;
  name: string;
  englishName?: string;
  description: string;
  functions: string[];
  parts?: OrganPart[];
  image?: string;
}

interface OrganPart {
  id: string;
  name: string;
  description: string;
  function: string;
}
```

## 11. Non-Functional Requirements

- Loading cepat.
- Tidak ada layout shift besar.
- Responsive.
- Komponen reusable.
- TypeScript strict.
- Tidak ada console error pada production.
- SEO dasar.
- Metadata halaman.
- Semantic HTML.
- Kode mudah dipelihara.

## 12. MVP

MVP wajib memiliki:
- Beranda.
- Diagram sistem pencernaan interaktif.
- Detail organ.
- Detail bagian organ utama.
- Perjalanan makanan.
- Organ aksesori.
- Quiz.
- Responsive design.

## 13. Future Enhancement

- Mode belajar anak.
- Audio narration.
- Search organ.
- Bookmark materi.
- Progress belajar.
- Sistem achievement.
- 3D anatomy.
- Bahasa Inggris.
- Dashboard guru.
- Backend untuk menyimpan progress.

## 14. Definition of Done

Fitur dianggap selesai apabila:
- Berfungsi di desktop dan mobile.
- Tidak menghasilkan error TypeScript/build.
- Tidak memiliki console error.
- Informasi dapat dipahami pengguna non-medis.
- Semua organ utama memiliki nama dan fungsi.
- Interaksi hotspot berfungsi.
- Journey dapat diselesaikan dari awal sampai akhir.
- Quiz memberikan skor dan feedback.
- Accessibility dasar terpenuhi.
