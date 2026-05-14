export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-[680px] px-5 py-12">
        {/* Category */}
        <div className="mb-3 flex justify-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Retorika
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Komunikasi
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Retorika: Seni Berbicara dan Menulis Persuasif
        </h1>

        {/* Meta */}
        <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
          <span>By Tim Materi</span>
          <span>•</span>
          <span>May 14, 2026</span>
          <span>•</span>
          <span>7 Menit Baca</span>
        </div>

        <hr className="my-8 border-neutral-200" />

        {/* Image Placeholder */}
        <figure className="mb-10">
          <div className="h-[430px] w-full border border-neutral-200 bg-white shadow-sm" />
          <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
            Ilustrasi Retorika dalam presentasi dan komunikasi publik.
          </figcaption>
        </figure>

        {/* Content */}
        <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
          <p>
            Retorika adalah seni berbicara atau menulis secara efektif dan
            persuasif. Tujuannya adalah mempengaruhi, meyakinkan, atau
            menginspirasi audiens melalui bahasa yang tepat dan strategi yang
            terencana.
          </p>

          <p>
            Dalam komunikasi retoris, setiap kata dipilih untuk membangun
            kredibilitas, membangkitkan emosi, dan menyajikan logika yang kuat.
            Teknik ini digunakan dalam pidato, presentasi, tulisan, dan semua
            bentuk pesan yang ingin berdampak.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-neutral-800 pl-6 font-serif text-2xl font-semibold italic leading-snug text-neutral-900">
            “Retorika bukan hanya tentang apa yang kita katakan; itu juga tentang
            bagaimana kita membuat audiens percaya, merasakan, dan memahami.”
          </blockquote>

          <p>
            Peran emosi, logika, dan kredibilitas sangat penting. Retorika yang
            efektif selalu menggabungkan ketiganya agar pesan tidak hanya kuat,
            tetapi juga relevan dan dapat dipercaya.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
            Prinsip Dasar Retorika
          </h2>

          <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
            <div>
              <h3 className="text-lg font-semibold">1. Ethos (Kredibilitas)</h3>
              <p>
                Ethos adalah kualitas pembicara atau penulis. Audiens harus
                melihat bahwa sumber pesan dapat dipercaya, berpengalaman, dan
                memiliki niat baik.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Pathos (Emosi)</h3>
              <p>
                Pathos fokus pada perasaan audiens. Penyampaian yang baik akan
                memanfaatkan simpati, empati, antusiasme, atau kekhawatiran untuk
                membuat audiens terhubung secara emosional.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Logos (Logika)</h3>
              <p>
                Logos adalah argumentasi berbasis bukti dan rasionalitas. Argumen
                harus masuk akal, jelas, dan didukung oleh data, fakta, atau contoh
                konkret.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
            Ruang Lingkup Retorika
          </h2>

          <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              Retorika mencakup berbagai teknik yang membantu menyampaikan pesan
              secara persuasif. Bukan sekadar kata-kata, retorika adalah kombinasi
              strategi bahasa, struktur, dan penyajian yang ideal.
            </p>

            <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                Teknik Utama Retorika
              </h3>
              <ul className="space-y-2">
                <li>Storytelling untuk membangun narasi yang mudah diingat.</li>
                <li>Bahasa tubuh dan intonasi untuk menambah kekuatan pesan.</li>
                <li>Struktur yang jelas agar audiens mengikuti alur dengan mudah.</li>
                <li>Data dan contoh konkret untuk memperkuat argumen.</li>
                <li>Latihan sebagai kunci agar penyampaian terasa alami.</li>
              </ul>
            </div>

            <p>
              Ketika retorika berjalan dengan baik, pesan menjadi lebih mudah
              diterima karena audiens tidak hanya memahami fakta, tetapi juga
              merasakan dan mempercayai sumbernya.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
            Memahami Audiens dan Gaya Bicara
          </h2>

          <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              Memahami audiens adalah fondasi retorika. Gaya bicara harus disesuaikan
              dengan latar belakang, kebutuhan, dan ekspektasi penerima pesan.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Background audiens: pendidikan, budaya, dan pengalaman mereka.</li>
              <li>Penyesuaian gaya bicara: formal atau non-formal sesuai situasi.</li>
              <li>Gunakan istilah yang relevan agar pesan terasa dekat dan tepat sasaran.</li>
            </ul>

            <p>
              Ketika emosi, logika, dan kredibilitas bekerja bersama, hasilnya
              menjadi pesan persuasif yang kuat dan berdampak.
            </p>
          </div>
        </section>

        <hr className="my-10 border-neutral-200" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
            Ethos
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
            Pathos
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
            Logos
          </span>
        </div>
      </article>
    </main>
  );
}