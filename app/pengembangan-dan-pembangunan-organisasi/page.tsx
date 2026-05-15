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
              Sosial
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Organisasi
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Pengembangan dan Pembangunan Organisasi
          </h1>

          {/* Meta */}
          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh A Wildan Fauzi Agustian</span>
            <span>•</span>
            <span>3 Mei 2026</span>
            <span>•</span>
            <span>5 Menit Baca</span>
          </div>

          <hr className="my-8 border-neutral-200" />

          {/* Image */}
          <figure className="mb-10">
            <div className="relative h-107.5 w-full overflow-hidden border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/pengembangan-dan-pembangunan-organisasi.jpg"
                alt="Ilustrasi pengembangan organisasi"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
              Ilustrasi proses pembangunan dan pengembangan organisasi.
            </figcaption>
          </figure>

          {/* Content */}
          <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              <strong>Definisi:</strong> Proses terencana untuk meningkatkan efektivitas organisasi dengan fokus pada perbaikan sistem, struktur, budaya, dan sumber daya manusia. Melibatkan perubahan berkelanjutan untuk mencapai tujuan jangka panjang.
            </p>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Tujuan Pembangunan Organisasi</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Meningkatkan produktivitas dan efisiensi kerja</li>
              <li>Menyesuaikan organisasi dengan perubahan lingkungan</li>
              <li>Meningkatkan kualitas SDM dan kepemimpinan</li>
              <li>Menciptakan budaya kerja yang positif</li>
            </ul>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Pengertian Pengembangan</h2>
            <p className="mt-4">Pengembangan organisasi adalah proses berkelanjutan untuk meningkatkan kemampuan organisasi melalui intervensi terhadap perilaku, struktur, dan teknologi, dengan tujuan mencapai efektivitas jangka panjang.</p>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Ciri-ciri Pengembangan Organisasi</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Berorientasi pada perubahan yang terencana</li>
              <li>Melibatkan seluruh anggota organisasi</li>
              <li>Bersifat partisipatif dan kolaboratif</li>
              <li>Fokus pada peningkatan efektivitas dan kinerja</li>
            </ul>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Faktor Pendukung</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Kepemimpinan yang visioner</li>
              <li>Budaya organisasi yang positif dan adaptif</li>
              <li>Sistem komunikasi yang efektif</li>
              <li>SDM yang kompeten dan terbuka terhadap perubahan</li>
            </ul>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Tahapan</h2>
            <ol className="mt-4 list-decimal pl-6 space-y-2">
              <li>Identifikasi kebutuhan perubahan</li>
              <li>Perencanaan intervensi dan strategi</li>
              <li>Implementasi perubahan</li>
              <li>Evaluasi dan tindak lanjut</li>
            </ol>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Manfaat</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Meningkatkan efektivitas organisasi</li>
              <li>Mencapai tujuan jangka panjang dengan lebih efisien</li>
            </ul>

            <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">Kesimpulan</h2>
            <p className="mt-4">Pembangunan dan pengembangan organisasi penting untuk keberlangsungan. Memerlukan perencanaan, partisipasi, dan evaluasi berkelanjutan untuk membentuk organisasi yang adaptif, efektif, dan produktif.</p>
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