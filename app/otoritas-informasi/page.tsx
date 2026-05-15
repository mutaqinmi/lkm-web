"use client";
import BackButton from "@/src/components/back-button";
import Footer from "@/src/components/footer";
import Image from "next/image";
import TopNavbar from "@/src/components/top-navbar";

export default function Page() {
  return (
    <>
      <TopNavbar />
      <main className="min-h-screen bg-white text-neutral-900 mt-8">
        <article className="mx-auto max-w-170 px-5 py-12">
          <BackButton />

          {/* Category */}
          <div className="mb-3 flex justify-center gap-2">
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Teknologi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Informasi
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Otoritas Informasi
          </h1>

          {/* Meta */}
          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh A Ikmal</span>
            <span>•</span>
            <span>2 Mei 2026</span>
            <span>•</span>
            <span>5 Menit Baca</span>
          </div>

          <hr className="my-8 border-neutral-200" />

          {/* Image Placeholder */}
          <figure className="mb-10">
            <div className="relative h-107.5 w-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/otoritas-informasi.jpg"
                alt="Ilustrasi otoritas informasi"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
              Ilustrasi pengelolaan dan proteksi informasi organisasi.
            </figcaption>
          </figure>

          {/* Content */}
          <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              <strong>Definisi:</strong> Otoritas informasi adalah kemampuan seorang
              pemimpin atau organisasi dalam mengelola, mengatur, membagikan, serta
              menjaga kerahasiaan informasi agar data tetap aman, terstruktur, dan
              tidak disalahgunakan. Tujuan utamanya adalah menjaga stabilitas,
              keamanan, dan kedaulatan organisasi, terutama di era digital yang penuh
              pertukaran informasi cepat.
            </p>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Tiga Pilar Utama</h2>

            <h3 className="text-xl font-semibold">1. Struktur</h3>
            <p>
              Struktur berarti adanya susunan atau sistem yang jelas dalam pengelolaan informasi.
            </p>
            <ul className="list-disc pl-6">
              <li>Data anggota disimpan berdasarkan divisi</li>
              <li>File organisasi dipisahkan sesuai kategori</li>
              <li>Ada alur komunikasi yang jelas</li>
            </ul>
            <p className="mt-2"><strong>Fungsi:</strong> Mempermudah pencarian data, mengurangi kekacauan informasi, membantu koordinasi organisasi.</p>

            <h3 className="text-xl font-semibold">2. Validasi</h3>
            <p>Validasi adalah proses memastikan bahwa informasi yang diterima benar, akurat, dan dapat dipercaya.</p>
            <ul className="list-disc pl-6">
              <li>Mengecek sumber berita sebelum disebarkan</li>
              <li>Verifikasi data anggota</li>
              <li>Crosscheck informasi kegiatan</li>
            </ul>
            <p className="mt-2"><strong>Fungsi:</strong> Mencegah hoaks, menghindari kesalahan keputusan, menjaga kredibilitas organisasi.</p>

            <h3 className="text-xl font-semibold">3. Hak Akses</h3>
            <p>Hak akses adalah pengaturan siapa saja yang boleh melihat, mengedit, atau menyebarkan informasi tertentu.</p>
            <ul className="list-disc pl-6">
              <li>Ketua dapat mengakses seluruh data</li>
              <li>Anggota hanya dapat melihat informasi tertentu</li>
              <li>Dokumen rahasia hanya untuk pengurus inti</li>
            </ul>
            <p className="mt-2"><strong>Fungsi:</strong> Menjaga keamanan data, mencegah kebocoran informasi, membatasi penyalahgunaan akses.</p>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Konsep Penting</h2>
            <h3 className="text-lg font-semibold">Digital Sovereignty</h3>
            <p>
              Digital Sovereignty (Kedaulatan Digital) adalah kemampuan suatu negara, organisasi, atau individu untuk mengendalikan data dan teknologinya sendiri tanpa ketergantungan penuh pada pihak luar.
            </p>
            <ul className="list-disc pl-6">
              <li>Menyimpan data di server sendiri</li>
              <li>Menggunakan sistem buatan lokal</li>
              <li>Mengontrol penyebaran data pengguna</li>
            </ul>
            <p className="mt-2"><strong>Tujuan:</strong> Melindungi privasi, mengurangi risiko penyalahgunaan data, menjaga keamanan digital.</p>

            <h3 className="text-lg font-semibold">Mahasiswa sebagai Perancang Sistem (“Code is Law”)</h3>
            <p>
              Konsep “Code is Law” berarti aturan dalam sistem digital ditentukan oleh kode atau program yang dibuat oleh pengembang. Programmer memiliki pengaruh besar terhadap cara sistem bekerja — fitur dalam aplikasi bisa membatasi atau mengatur perilaku pengguna.
            </p>
            <p className="mt-2">Contoh: Sistem absensi otomatis menentukan siapa dianggap hadir; hak akses akun ditentukan oleh coding sistem.</p>

            <h3 className="text-lg font-semibold">Pengguna Sistem Teknologi Memiliki Otoritas Tertentu</h3>
            <p>Setiap pengguna memiliki tingkat otoritas berbeda sesuai perannya.</p>
            <ul className="list-disc pl-6">
              <li>Admin dapat menghapus data</li>
              <li>Editor hanya dapat mengubah isi</li>
              <li>Viewer hanya dapat melihat data</li>
            </ul>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Klasifikasi Otoritas Akses</h2>
            <h3 className="text-lg font-semibold">Akses Publik</h3>
            <p>Informasi yang boleh diketahui semua orang (poster acara, media sosial organisasi, profil organisasi).</p>
            <h3 className="text-lg font-semibold mt-3">Internal</h3>
            <p>Informasi yang hanya boleh diketahui anggota atau pihak tertentu (rundown rapat, data anggota, evaluasi kegiatan).</p>
            <h3 className="text-lg font-semibold mt-3">Rahasia</h3>
            <p>Informasi penting yang tidak boleh disebarkan sembarangan (strategi organisasi, password akun, data keuangan sensitif).</p>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Siklus Manajemen Otoritas</h2>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>
                <strong>Akuisisi Data:</strong> Pengumpulan data (mengisi formulir anggota, mengambil data survei, mengumpulkan laporan).
              </li>
              <li>
                <strong>Pengorganisasian Data:</strong> Pengelompokan dan penyimpanan (database, pengarsipan dokumen).
              </li>
              <li>
                <strong>Distribusi Informasi:</strong> Pembagian sesuai hak akses (pengumuman grup, laporan pengurus, publikasi media sosial).
              </li>
              <li>
                <strong>Proteksi Integritas Data:</strong> Menjaga agar data tetap aman dan tidak diubah sembarangan (password, enkripsi, backup, pembatasan akses).
              </li>
            </ol>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Contoh Kasus</h2>
            <p className="mt-4">Kasus Komdigi (April 2026) — menunjukkan pentingnya pengelolaan dan keamanan informasi dalam lembaga digital. Pelajaran: kebocoran data merusak kepercayaan, validasi dan keamanan sistem penting, hak akses tidak terkontrol jadi celah masalah.</p>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Kesimpulan</h2>
            <p className="mt-4">Otoritas informasi sangat penting di era digital karena setiap organisasi bergantung pada data dan teknologi. Dengan pengelolaan informasi yang baik melalui struktur yang jelas, validasi data, dan pengaturan hak akses, organisasi dapat menjaga keamanan, stabilitas, serta kepercayaan anggotanya.</p>
          </section>

          {/* Timeline */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Timeline Politik Indonesia
            </h2>

            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
                <ul className="space-y-3">
                  <li><strong>Pra Kemerdekaan:</strong> Sebelum 1945</li>
                  <li><strong>Orde Lama:</strong> 1945–1968</li>
                  <li><strong>Orde Baru:</strong> 1968–1998</li>
                  <li><strong>Reformasi:</strong> 1998–sekarang</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Konstelasi dan Spektrum */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Konstelasi dan Spektrum Politik
            </h2>

            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Ideologi Pemikiran</h3>
                <p>
                  Ideologi kiri-kanan berasal dari Revolusi Prancis. Partai Kanan
                  cenderung konservatif dan menjunjung keteraturan, sementara Partai Kiri
                  berfokus pada kesetaraan, solidaritas, dan keadilan sosial.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Pro dan Oposisi</h3>
                <p>
                  Tidak boleh memilih hanya satu sisi. Mahasiswa harus belajar melihat
                  perspektif kedua belah pihak untuk membangun sikap yang seimbang dan
                  objektif dalam menganalisis isu-isu politik.
                </p>
              </div>
            </div>
          </section>


          {/* Mahasiswa Moderat dan Kritis */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Mahasiswa Moderat dan Kritis
            </h2>

            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Sikap yang Salah</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fanatik terhadap satu ideologi</li>
                  <li>Tidak mampu menganalisis dengan objektif</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Sikap yang Benar</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Objektif dalam melihat permasalahan</li>
                  <li>Moderat dengan pandangan ke depan yang jelas</li>
                  <li>Kritis sebelum bertindak</li>
                  <li>Memahami perbedaan yang ada di masyarakat</li>
                </ul>
              </div>

              <p className="italic text-neutral-600">
                Menjadi mahasiswa adalah sebuah privilege. Dengan privilege tersebut,
                mahasiswa diharapkan menjadi moderat namun kritis dalam merespons
                dinamika sosial-politik.
              </p>
            </div>
          </section>

          {/* Teknologi dalam Dinamika Sosial-Politik */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Teknologi dalam Dinamika Sosial-Politik
            </h2>

            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Aspek Teknologi
                </h3>
                <ul className="space-y-2">
                  <li><strong>Positif:</strong> Dapat melampaui batasan waktu dan ruang dalam penyebaran informasi.</li>
                  <li><strong>Negatif:</strong> Penyebaran hoax dan misinformasi yang cepat dan luas.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Peran Mahasiswa Informatika</h3>
                <p>
                  Mahasiswa informatika memiliki tanggung jawab khusus untuk mengedukasi
                  masyarakat tentang penggunaan teknologi yang bijaksana, membedakan
                  informasi yang valid dari hoax, dan berkontribusi dalam menciptakan
                  ekosistem digital yang sehat.
                </p>
              </div>
            </div>
          </section>



          <hr className="my-10 border-neutral-200" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Ideologi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Mahasiswa
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Reformasi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Teknologi
            </span>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}