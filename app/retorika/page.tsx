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
              Retorika
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Komunikasi
            </span>
          </div>

          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Retorika: Seni Berbicara dan Menulis Persuasif
          </h1>

          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh A Abdillah Mulyasidik</span>
            <span>•</span>
            <span>2 Mei 2026</span>
            <span>•</span>
            <span>5 Menit Baca</span>
          </div>

          <hr className="my-8 border-neutral-200" />

          <figure className="mb-10">
            <div className="relative h-107.5 w-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/retorika.jpg"
                alt="Ilustrasi retorika"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </figure>

          <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              Retorika adalah seni berbicara atau menulis secara efektif dan persuasif.
              Tujuannya adalah mempengaruhi, meyakinkan, atau menginspirasi audiens melalui
              bahasa yang tepat dan strategi yang terencana.
            </p>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Prinsip Dasar Retorika
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-xl font-semibold">1. Ethos (Kredibilitas)</h3>
                  <p>
                    Ethos merujuk pada kualitas kredibilitas pembicara atau penulis. Audiens harus
                    melihat bahwa sumber pesan dapat dipercaya, memiliki pengalaman, dan niat baik.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">2. Pathos (Emosi)</h3>
                  <p>
                    Pathos adalah cara penyampaian yang berfokus pada perasaan audiens. Dengan
                    memanfaatkan simpati, empati, dan emosi lainnya, pembicara dapat membuat
                    audiens terhubung secara mendalam dengan pesan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">3. Logos (Logika)</h3>
                  <p>
                    Logos adalah argumen yang masuk akal dan berbasis bukti. Pesan harus didukung
                    oleh data, fakta, dan logika yang kuat untuk menjadi persuasif.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Ruang Lingkup Retorika
              </h2>
              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-xl font-semibold">Teknik Berbicara</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Storytelling untuk membangun narasi yang menarik dan mudah diingat</li>
                    <li>Bahasa tubuh dan intonasi untuk memperkuat pesan</li>
                    <li>Struktur yang jelas agar audiens mudah mengikuti alur</li>
                    <li>Data dan contoh konkret untuk memperkuat argumen</li>
                    <li>Latihan berkelanjutan untuk membuat penyampaian terasa alami</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Memahami Audiens dan Gaya Bicara
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li><strong>Background Audiens:</strong> Pahami latar belakang, pendidikan, budaya, dan pengalaman mereka</li>
                <li><strong>Penyesuaian Gaya Bicara:</strong> Sesuaikan gaya antara formal dan non-formal berdasarkan konteks</li>
                <li><strong>Istilah yang Relevan:</strong> Gunakan terminologi yang sesuai agar pesan terasa dekat dan tepat sasaran</li>
              </ul>
            </section>

            <section>
              <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
                Kombinasi Ideal: Emosi, Logika, dan Kredibilitas
              </h2>
              <p className="mt-5">
                Retorika yang efektif adalah kombinasi sempurna antara emosi (pathos), logika (logos),
                dan kredibilitas (ethos). Ketiganya harus berjalan beriringan untuk menciptakan pesan
                yang tidak hanya persuasif, tetapi juga bermakna dan berkesan. Ketika elemen-elemen ini
                terintegrasi dengan baik, audiens akan percaya, memahami, dan terdorong untuk bertindak.
              </p>
            </section>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}