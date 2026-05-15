"use client";
import BackButton from "@/src/components/back-button";
import Footer from "@/src/components/footer";
import Image from "next/image";
import TopNavbar from "@/src/components/top-navbar";

export default function Materi8() {
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
              Karakter
            </span>
          </div>

          {/* Title */}
          <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Kekeluargaan
          </h1>

          {/* Meta */}
          <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            <span>Oleh Annisa Esha Utami</span>
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
                src="/kekeluargaan.jpg"
                alt="Ilustrasi kekeluargaan dalam organisasi"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
              Ilustrasi nilai kekeluargaan dalam kehidupan berorganisasi dan bermasyarakat.
            </figcaption>
          </figure>

          {/* Content */}
          <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              Kekeluargaan merupakan salah satu nilai penting yang perlu dimiliki dalam kehidupan sehari-hari, baik di lingkungan rumah, kampus, maupun organisasi. Kekeluargaan tidak hanya diartikan sebagai hubungan yang memiliki ikatan darah, tetapi juga hubungan yang dibangun dari rasa peduli, saling menghargai, saling memahami, dan saling memiliki. Dengan adanya kekeluargaan, seseorang tidak hanya merasa berada dalam suatu kelompok, tetapi juga merasa menjadi bagian penting di dalamnya.
            </p>

            <p>
              Dalam materi ini, kekeluargaan dapat dipahami bukan hanya sekadar saling tahu nama atau saling mengenal satu sama lain. Kekeluargaan memiliki makna yang lebih dalam, yaitu adanya rasa tanggung jawab untuk saling menjaga, membantu, dan mendukung. Ketika seseorang memiliki rasa kekeluargaan, maka ia akan lebih peka terhadap keadaan orang lain dan tidak hanya mementingkan dirinya sendiri. Rasa peduli inilah yang membuat hubungan antarindividu menjadi lebih erat dan nyaman.
            </p>

            <p>
              Dalam organisasi, kekeluargaan sangat dibutuhkan karena organisasi tidak dapat berjalan dengan baik jika setiap anggotanya hanya bekerja sendiri-sendiri. Setiap anggota perlu memiliki rasa memiliki terhadap organisasi agar mau berkontribusi dan bertanggung jawab terhadap tugasnya. Jika rasa kekeluargaan sudah terbentuk, maka anggota akan lebih mudah bekerja sama, saling membantu saat ada kesulitan, dan bersama-sama berusaha mencapai tujuan organisasi.
            </p>

            <p>
              Kekeluargaan juga dapat menciptakan suasana organisasi yang lebih terbuka dan harmonis. Anggota akan merasa lebih nyaman untuk menyampaikan pendapat, berdiskusi, ataupun meminta bantuan ketika mengalami kendala. Selain itu, kekeluargaan juga mengajarkan pentingnya menghargai perbedaan, karena dalam organisasi pasti terdapat banyak karakter, pendapat, dan cara berpikir yang berbeda. Perbedaan tersebut seharusnya tidak menjadi penghalang, tetapi menjadi kekuatan untuk saling melengkapi.
            </p>

            <p>
              Namun, kekeluargaan tetap harus diimbangi dengan sikap disiplin dan tanggung jawab. Kedekatan antaranggota tidak boleh menjadi alasan untuk mengabaikan tugas atau aturan yang ada. Justru, kekeluargaan yang baik adalah ketika setiap anggota mampu saling mengingatkan, saling mendukung, dan sama-sama ingin berkembang. Dengan adanya kekeluargaan, organisasi dapat menjadi tempat yang nyaman, solid, dan mampu membentuk pribadi yang lebih peduli serta bertanggung jawab.
            </p>
          </section>

          <hr className="my-10 border-neutral-200" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Kekeluargaan
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Organisasi
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Karakter
            </span>
            <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
              Solidaritas
            </span>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}