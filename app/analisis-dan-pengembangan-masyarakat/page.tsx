"use client";
import Image from "next/image";
import BackButton from "@/src/components/back-button";
import Footer from "@/src/components/footer";
import TopNavbar from "@/src/components/top-navbar";

export default function Page() {
  return (
    <>
      <TopNavbar />

      <main className="min-h-screen bg-white text-neutral-900 mt-8">
        <article className="mx-auto max-w-170 px-5 py-12">
          <BackButton />

          <div className="mb-3 flex justify-center gap-2">
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Sosial
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Masyarakat
            </span>
          </div>

          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Analisis dan Pengembangan Masyarakat
          </h1>

          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh A Ace Hermawan</span>
            <span>•</span>
            <span>25 April 2026</span>
            <span>•</span>
            <span>5 Menit Baca</span>
          </div>

          <hr className="my-8 border-neutral-200" />

          <figure className="mb-10">
            <div className="relative h-107.5 w-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/analisis-dan-pengembangan-masyarakat.jpg"
                alt="Ilustrasi analisis dan pengembangan masyarakat"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </figure>

          <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              Analisis dan pengembangan masyarakat adalah proses memahami suatu
              kelompok secara sistematis sekaligus merancang langkah terencana untuk
              meningkatkan kualitas hidup kelompok tersebut.
            </p>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Tri Gatra Perspektif Organisasi
              </h2>
              <ol className="mt-5 list-decimal space-y-2 pl-6">
                <li>Perumusan</li>
                <li>Implementasi</li>
                <li>Evaluasi</li>
              </ol>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Analisis dan Pengembangan Masyarakat
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  <strong>Analisis</strong>: proses memahami suatu kelompok secara sistematis.
                </p>
                <p>
                  <strong>Pengembangan</strong>: proses terencana untuk meningkatkan kualitas hidup suatu kelompok.
                </p>
              </div>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Tujuan Utama
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>Meningkatkan kesejahteraan</li>
                <li>Kebutuhan berbasis data</li>
                <li>Keadilan sosial</li>
                <li>Keberlanjutan</li>
                <li>Kemandirian</li>
                <li>Inklusivitas</li>
              </ul>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Metode Pengembangan
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>Observasi</li>
                <li>Survei</li>
                <li>Wawancara</li>
                <li>Participatory Rural</li>
                <li>Focus Group Discussion (FGD)</li>
                <li>Social Mapping</li>
              </ul>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Faktor Pendorong
              </h2>
              <div className="mt-5 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Internal</h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Pertumbuhan</li>
                    <li>Inovasi dan kreativitas</li>
                    <li>Pendidikan</li>
                    <li>Kesadaran sosial</li>
                    <li>Nilai dan budaya</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eksternal</h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Globalisasi</li>
                    <li>Perkembangan teknologi</li>
                    <li>Kebijakan pemerintah</li>
                    <li>Interaksi antarbudaya</li>
                    <li>Bencana atau krisis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Alat Bantu Analisis
              </h2>
              <p className="mt-5">SWOT</p>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Tahapan Pengembangan
              </h2>
              <ol className="mt-5 list-decimal space-y-2 pl-6">
                <li>Identifikasi masalah</li>
                <li>Analisis kebutuhan</li>
                <li>Perancangan program</li>
                <li>Implementasi</li>
                <li>Evaluasi</li>
                <li>Keberlanjutan</li>
              </ol>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Tantangan
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>Kurangnya partisipasi</li>
                <li>Keterbatasan SDM</li>
                <li>Konflik kepentingan</li>
                <li>Budaya yang sulit berubah</li>
                <li>Intervensi yang tidak sesuai konteks</li>
              </ul>
            </section>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
