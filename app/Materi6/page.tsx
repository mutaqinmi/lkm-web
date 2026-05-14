export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-[680px] px-5 py-12">
        <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Materi 6: Analisis Organisasi
        </h1>

        <div className="mt-4 text-center text-sm font-semibold uppercase tracking-wide text-neutral-500">
          <span>Pemateri: Fauzan Alvin</span>
        </div>

        <hr className="my-8 border-neutral-200" />

        <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
          <h2 className="text-2xl font-bold">Fokus Analisis Organisasi</h2>
          <p>
            Membahas bagaimana organisasi berjalan secara sistematis dan terstruktur.
          </p>

          <h2 className="text-2xl font-bold">Pengertian</h2>
          <p>
            Proses memahami organisasi, masalah, kekurangan, dan kelebihannya.
          </p>

          <h2 className="text-2xl font-bold">Tujuan</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Mengetahui kondisi organisasi</li>
            <li>Menemukan akar masalah</li>
            <li>Mendukung pengambilan keputusan</li>
            <li>Menyusun strategi organisasi</li>
          </ul>

          <h2 className="text-2xl font-bold">Ruang Lingkup</h2>

          <h3 className="text-xl font-semibold">Internal</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Struktur</li>
            <li>SDM</li>
            <li>Budaya kerja</li>
            <li>Komunikasi</li>
          </ul>

          <h3 className="text-xl font-semibold">Eksternal</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Peluang</li>
            <li>Tantangan</li>
            <li>Ancaman</li>
            <li>Kebutuhan lingkungan</li>
          </ul>

          <h2 className="text-2xl font-bold">Metode dan Alat Analisis</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Observasi</li>
            <li>Wawancara atau diskusi</li>
            <li>Studi dokumen</li>
            <li>Klasifikasi temuan (SWOT)</li>
          </ul>

          <h2 className="text-2xl font-bold">Analisis ke Problem Solving</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Menemukan fakta utama</li>
            <li>Mencari akar masalah</li>
            <li>Melihat dampak</li>
            <li>Menyusun alternatif solusi</li>
            <li>Menentukan tindak lanjut</li>
          </ol>
        </section>
      </article>
    </main>
  );
}