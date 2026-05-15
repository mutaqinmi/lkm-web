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
              Manajemen
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Analisis Organisasi
          </h1>

          {/* Meta */}
          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh Fauzan Alvin</span>
            <span>•</span>
            <span>3 Mei 2026</span>
            <span>•</span>
            <span>3 Menit Baca</span>
          </div>

          <hr className="my-8 border-neutral-200" />

          {/* Image */}
          <figure className="mb-10">
            <div className="relative h-107.5 w-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/analisis-organisasi.jpg"
                alt="Ilustrasi analisis organisasi"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
              Ilustrasi proses analisis organisasi secara sistematis dan terstruktur.
            </figcaption>
          </figure>

          {/* Fokus Analisis Organisasi */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Fokus Analisis Organisasi
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <p>
                Membahas bagaimana organisasi berjalan secara sistematis dan terstruktur.
              </p>
            </div>
          </section>

          {/* Pengertian */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Pengertian
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <p>
                Proses memahami organisasi, masalah, kekurangan, dan kelebihannya.
              </p>
            </div>
          </section>

          {/* Tujuan */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Tujuan
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
                <ul className="space-y-3">
                  <li>Mengetahui kondisi organisasi</li>
                  <li>Menemukan akar masalah</li>
                  <li>Mendukung pengambilan keputusan</li>
                  <li>Menyusun strategi organisasi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ruang Lingkup */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Ruang Lingkup
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Internal</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Struktur</li>
                  <li>SDM</li>
                  <li>Budaya kerja</li>
                  <li>Komunikasi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Eksternal</h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Peluang</li>
                  <li>Tantangan</li>
                  <li>Ancaman</li>
                  <li>Kebutuhan lingkungan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Metode dan Alat Analisis */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Metode dan Alat Analisis
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
                <ul className="space-y-3">
                  <li>Observasi</li>
                  <li>Wawancara atau diskusi</li>
                  <li>Studi dokumen</li>
                  <li>Klasifikasi temuan (SWOT)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Analisis ke Problem Solving */}
          <section className="mt-8">
            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
              Analisis ke Problem Solving
            </h2>
            <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
              <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
                <ol className="space-y-3 list-decimal pl-4">
                  <li>Menemukan fakta utama</li>
                  <li>Mencari akar masalah</li>
                  <li>Melihat dampak</li>
                  <li>Menyusun alternatif solusi</li>
                  <li>Menentukan tindak lanjut</li>
                </ol>
              </div>
            </div>
          </section>

          <hr className="my-10 border-neutral-200" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Organisasi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              SWOT
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Problem Solving
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Manajemen
            </span>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}