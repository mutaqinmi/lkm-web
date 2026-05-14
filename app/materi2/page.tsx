export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-[680px] px-5 py-12">
        {/* Category */}
        <div className="mb-3 flex justify-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Sosial
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Politik
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Dinamika Sosial dan Politik
        </h1>

        {/* Meta */}
        <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
          <span>By A Arul Misbahul Khoer</span>
          <span>•</span>
          <span>May 14, 2026</span>
          <span>•</span>
          <span>10 Menit Baca</span>
        </div>

        <hr className="my-8 border-neutral-200" />

        {/* Image Placeholder */}
        <figure className="mb-10">
          <div className="h-[430px] w-full border border-neutral-200 bg-white shadow-sm" />
          <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
            Ilustrasi dinamika sosial dan politik dalam konteks mahasiswa Indonesia.
          </figcaption>
        </figure>

        {/* Content */}
        <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
          <p>
            Dinamika sosial dan politik merupakan aspek penting dalam kehidupan
            bermasyarakat, terutama bagi mahasiswa yang memiliki tanggung jawab
            untuk memahami dan berkontribusi dalam perubahan sosial. Pemahaman
            tentang spektrum ideologi dan peran mahasiswa dalam politisasi kampus
            adalah fondasi dari partisipasi yang bertanggung jawab.
          </p>






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
  );
}