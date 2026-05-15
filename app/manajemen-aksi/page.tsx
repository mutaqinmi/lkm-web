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
              Organisasi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Aksi
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Manajemen Aksi
          </h1>

          {/* Meta */}
          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh A Defri Crisna Pramudi</span>
            <span>•</span>
            <span>3 Mei 2026</span>
            <span>•</span>
            <span>8 Menit Baca</span>
          </div>

          <hr className="my-8 border-neutral-200" />

          {/* Image */}
          <figure className="mb-10">
            <div className="relative h-107.5 w-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/manajemen-aksi.jpg"
                alt="Ilustrasi manajemen aksi"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
              Ilustrasi pengorganisasian dan pelaksanaan aksi secara terstruktur.
            </figcaption>
          </figure>

          {/* Intro */}
          <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              Manajemen aksi adalah proses pengorganisasian, pengurusan, dan pelaksanaan kegiatan dengan tujuan tertentu agar mencapai hasil dan pihak yang dituju dapat menerima informasi dengan baik.
            </p>
          </section>

          {/* Fungsi Manajemen Aksi */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Fungsi Manajemen Aksi
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <p>
                Salah satu model pengorganisasian aksi adalah penyusunan kegiatan dengan jumlah massa tertentu dan bentuk acara agar mendapat perhatian dari pihak yang dituju supaya maksud tersampaikan.
              </p>
            </div>
          </section>

          {/* Landasan Hukum */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Landasan Hukum
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <p>
                UU No. 9 Tahun 1998 tentang kebebasan penyampaian pendapat di muka umum.
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-2">Isi Pokok</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Dilarang membawa benda yang membahayakan keselamatan.</p>
                    <p className="mt-1 text-neutral-600">
                      Peserta aksi tidak diperbolehkan membawa benda berbahaya seperti senjata tajam atau alat lain yang dapat mengancam keselamatan orang lain agar aksi tetap aman dan tertib.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Menyampaikan laporan tertulis pada polisi.</p>
                    <p className="mt-1 text-neutral-600">
                      Penyelenggara aksi wajib memberikan surat pemberitahuan kepada pihak kepolisian sebelum kegiatan dilaksanakan sebagai bentuk koordinasi dan pengamanan.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Surat mencakup maksud, tujuan, waktu, rute, dan jumlah massa.</p>
                    <p className="mt-1 text-neutral-600">
                      Informasi tersebut diperlukan agar pihak keamanan dapat memahami tujuan aksi dan membantu pengaturan kegiatan di lapangan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mekanisme Aksi */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Mekanisme Aksi
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-1">Diskusi awal</h3>
                <p className="text-neutral-600">
                  Tahap awal untuk menentukan isu utama, tujuan aksi, dan alasan aksi perlu dilaksanakan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Diskusi lanjutan</h3>
                <p className="text-neutral-600">
                  Digunakan untuk menyusun strategi, konsep kegiatan, dan pembagian tugas agar aksi berjalan lebih terarah.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Pembentukan tim</h3>
                <p className="text-neutral-600">
                  Setiap anggota diberikan tugas tertentu sesuai kemampuan agar koordinasi selama aksi menjadi lebih efektif.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Aksi lapangan</h3>
                <p className="text-neutral-600">
                  Merupakan tahap pelaksanaan aksi secara langsung sesuai rencana yang telah dibuat sebelumnya.
                </p>
              </div>
            </div>
          </section>

          {/* Terdapat dalam Aksi */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Terdapat dalam Aksi
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-1">Koor lapangan</h3>
                <p className="text-neutral-600">Bertugas mengatur jalannya aksi dan memastikan peserta mengikuti arahan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Orator</h3>
                <p className="text-neutral-600">Menyampaikan pidato atau tuntutan aksi kepada massa dan pihak terkait.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Negosiator</h3>
                <p className="text-neutral-600">Menjadi perwakilan peserta aksi untuk berdialog dengan pihak yang dituju.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Agitator</h3>
                <p className="text-neutral-600">Bertugas membangkitkan semangat dan kekompakan peserta aksi.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Logistik</h3>
                <p className="text-neutral-600">Menyediakan kebutuhan seperti makanan, minuman, dan perlengkapan aksi.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Kreatif</h3>
                <p className="text-neutral-600">Membuat media visual seperti poster, banner, dan konsep kreatif lainnya.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Humas</h3>
                <p className="text-neutral-600">Menghubungkan peserta aksi dengan media, masyarakat, dan pihak luar.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Medis</h3>
                <p className="text-neutral-600">Memberikan pertolongan pertama kepada peserta yang membutuhkan bantuan kesehatan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Border keamanan</h3>
                <p className="text-neutral-600">Menjaga keamanan dan ketertiban massa selama aksi berlangsung.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Dokumenter</h3>
                <p className="text-neutral-600">Bertugas mengambil foto dan video sebagai dokumentasi kegiatan.</p>
              </div>
            </div>
          </section>

          {/* Merancang Aksi */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Merancang Aksi
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-1">Planning</h3>
                <p className="text-neutral-600">Tahap penyusunan konsep dan strategi aksi agar tujuan dapat tercapai.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Perlengkapan</h3>
                <p className="text-neutral-600">Menyiapkan alat dan kebutuhan teknis seperti sound system, spanduk, dan alat komunikasi.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Pelaksanaan</h3>
                <p className="text-neutral-600">Menjalankan aksi sesuai rencana dan koordinasi yang telah ditentukan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Kegiatan pasca aksi</h3>
                <p className="text-neutral-600">Melakukan evaluasi dan tindak lanjut setelah aksi selesai dilaksanakan.</p>
              </div>
            </div>
          </section>

          {/* Hal yang Harus Diperhatikan */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Hal yang Harus Diperhatikan
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-1">Tema / grand issue</h3>
                <p className="text-neutral-600">Tema utama harus jelas agar tujuan aksi mudah dipahami masyarakat.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Susunan anggota</h3>
                <p className="text-neutral-600">Pembagian anggota diperlukan agar setiap orang mengetahui tugasnya masing-masing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Skenario dan rute</h3>
                <p className="text-neutral-600">Penentuan jalur dan alur kegiatan membantu aksi berjalan lebih tertib dan aman.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Pembentukan</h3>
                <p className="text-neutral-600">Struktur organisasi aksi perlu dibuat agar koordinasi lebih jelas.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Format / bentuk aksi</h3>
                <p className="text-neutral-600">Bentuk aksi dapat berupa demonstrasi, teatrikal, diskusi publik, atau long march sesuai tujuan kegiatan.</p>
              </div>
            </div>
          </section>

          <hr className="my-10 border-neutral-200" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Aksi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Organisasi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Manajemen
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Advokasi
            </span>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}