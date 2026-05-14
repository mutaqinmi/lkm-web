export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-[680px] px-5 py-12">
        <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Materi 1: Analisis dan Pengembangan Masyarakat
        </h1>

        <div className="mt-4 text-center text-sm font-semibold uppercase tracking-wide text-neutral-500">
          <span>Pemateri: Ace Hermawan</span>
        </div>

        <hr className="my-8 border-neutral-200" />

        <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
          <h2 className="text-2xl font-bold">Tri Gatra Perspektif Organisasi</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Perumusan</li>
            <li>Implementasi</li>
            <li>Evaluasi</li>
          </ol>

          <h2 className="text-2xl font-bold">Analisis dan Pengembangan Masyarakat</h2>
          <p>
            <strong>Analisis</strong>: proses memahami suatu kelompok secara sistematis.
          </p>
          <p>
            <strong>Pengembangan</strong>: proses terencana untuk meningkatkan kualitas hidup suatu kelompok.
          </p>

          <h2 className="text-2xl font-bold">Tujuan Utama</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Meningkatkan kesejahteraan</li>
            <li>Kebutuhan berbasis data</li>
            <li>Keadilan sosial</li>
            <li>Keberlanjutan</li>
            <li>Kemandirian</li>
            <li>Inklusivitas</li>
          </ul>

          <h2 className="text-2xl font-bold">Metode Pengembangan</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Observasi</li>
            <li>Survei</li>
            <li>Wawancara</li>
            <li>Participatory Rural</li>
            <li>Focus Group Discussion (FGD)</li>
            <li>Social Mapping</li>
          </ul>

          <h2 className="text-2xl font-bold">Faktor Pendorong</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Internal</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pertumbuhan</li>
                <li>Inovasi dan kreativitas</li>
                <li>Pendidikan</li>
                <li>Kesadaran sosial</li>
                <li>Nilai dan budaya</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Eksternal</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Globalisasi</li>
                <li>Perkembangan teknologi</li>
                <li>Kebijakan pemerintah</li>
                <li>Interaksi antarbudaya</li>
                <li>Bencana atau krisis</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold">Alat Bantu Analisis</h2>
          <p>SWOT</p>

          <h2 className="text-2xl font-bold">Tahapan Pengembangan</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Identifikasi masalah</li>
            <li>Analisis kebutuhan</li>
            <li>Perancangan program</li>
            <li>Implementasi</li>
            <li>Evaluasi</li>
            <li>Keberlanjutan</li>
          </ol>

          <h2 className="text-2xl font-bold">Tantangan</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Kurangnya partisipasi</li>
            <li>Keterbatasan SDM</li>
            <li>Konflik kepentingan</li>
            <li>Budaya yang sulit berubah</li>
            <li>Intervensi yang tidak sesuai konteks</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
