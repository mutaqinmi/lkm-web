export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-[680px] px-5 py-12">
        {/* Category */}
        <div className="mb-3 flex justify-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Cognitive Theory
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            Neuroscience
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Tri Gatra Perspektif Organisasi
        </h1>

        {/* Meta */}
        <div className="mt-4 flex justify-center gap-3 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
          <span>By Dr. Elena Rostova</span>
          <span>•</span>
          <span>October 12, 2024</span>
          <span>•</span>
          <span>14 Min Read</span>
        </div>

        <hr className="my-8 border-neutral-200" />

        {/* Image Placeholder */}
        <figure className="mb-10">
          <div className="h-[430px] w-full border border-neutral-200 bg-white shadow-sm" />
          <figcaption className="mt-2 text-center text-[11px] text-neutral-500">
            Fig 1: Conceptual rendering of synaptic pathways in early
            neurodevelopment.
          </figcaption>
        </figure>

        {/* Content */}
        <section className="space-y-6 text-[15px] leading-7 text-neutral-700">
          <p>
            The prevailing models of human memory consolidation have long leaned
            heavily on the concept of long-term potentiation (LTP) as the primary
            mechanism for storing experiential data. However, recent longitudinal
            studies observing neuroplasticity in infants suggest a far more
            dynamic and perhaps chaotic baseline than previously understood. This
            essay seeks to deconstruct the rigid frameworks of historical
            neuroscience, proposing a fluid, environmentally responsive model of
            early synaptic architecture.
          </p>

          <p>
            To understand the sheer volume of neural pruning that occurs in the
            first three years of life, one must look beyond the purely biological
            and consider the profound impact of sensory deprivation versus
            sensory enrichment. The developing brain is less a passive hard drive
            recording data, and more an active, hungry organism constantly
            seeking optimal pathways for efficiency.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-neutral-800 pl-6 font-serif text-2xl font-semibold italic leading-snug text-neutral-900">
            “We have mistakenly viewed the infant mind as an empty vessel
            awaiting instruction, when in fact, it is an over-provisioned network
            desperately seeking signals to determine which connections to sever.”
          </blockquote>

          <p>
            This pruning process, contrary to being a loss of potential, is the
            very foundation of specialization. The connections that survive are
            those repeatedly validated by environmental interaction. It is a
            ruthless, highly efficient economy of cognitive resources. The
            implications for early childhood education and developmental
            interventions are staggering. If the brain actively destroys unused
            pathways to conserve metabolic energy, then the absence of a stimulus
            is not merely a missed opportunity for learning; it is an active
            signal to dismantle the hardware required for that specific modality.
          </p>
        </section>

        {/* Subheading */}
        <section className="mt-8">
          <h2 className="border-b border-neutral-300 pb-2 font-serif text-2xl font-bold">
            Methodological Shifts in Neuroimaging
          </h2>

          <div className="mt-5 space-y-6 text-[15px] leading-7 text-neutral-700">
            <p>
              The transition from structural MRI to high-resolution functional
              near-infrared spectroscopy (fNIRS) has allowed researchers to
              observe these phenomena in awake, behaving infants without the
              constraints of a scanner environment. This methodological leap
              provides a clearer picture of real-time synaptic engagement.
            </p>

            {/* Info Box */}
            <div className="rounded-sm border border-slate-200 bg-slate-50 p-5 text-[13px] leading-6 text-slate-700 shadow-sm">
              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                Key Findings from the 2024 Helsinki Cohort
              </h3>

              <ul className="space-y-2">
                <li>
                  Synaptic density peaks at 14 months, significantly earlier
                  than previous estimates.
                </li>
                <li>
                  Environmental noise levels directly correlate with
                  disorganized pruning patterns in the auditory cortex.
                </li>
                <li>
                  Visual enrichment during the first 6 months accelerates the
                  myelination of the optic radiations by a factor of 1.2.
                </li>
              </ul>
            </div>

            <p>
              In conclusion, reevaluating synaptic plasticity requires a
              paradigm shift away from viewing the brain as a static entity
              shaped solely by genetics. It demands a holistic integration of
              biological capability and environmental demand. Only by
              understanding the intricate dance between nature’s over-provisioning
              and nurture’s ruthless pruning can we begin to grasp the true
              architecture of human memory.
            </p>
          </div>
        </section>

        <hr className="my-10 border-neutral-200" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
            Neuroplasticity
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
            Child Development
          </span>
          <span className="rounded bg-slate-100 px-2 py-1 text-[11px] text-slate-500">
            Cognitive Architecture
          </span>
        </div>
      </article>
    </main>
  );
}