'use client'

import React from 'react'
import Image from 'next/image'
import trioCopperImg from '../Images/image.png'

export default function ProductShowcase() {
  return (
    <section
      id="specimens"
      className="relative z-10 w-full rounded-t-3xl bg-transparent pt-24 sm:pt-28 md:pt-36 pb-32 sm:pb-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Top Narrative Block — Left Aligned, Carved Tone */}
        <div className="max-w-3xl text-left">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E1D3] leading-[1.08]"
            style={{
              fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
              fontVariationSettings: '"opsz" 144, "wght" 700',
            }}
          >
            Elemental Integrity, Carved by Deep Earth
          </h2>

          <p
            className="mt-6 text-base sm:text-lg md:text-xl text-[#6E6A63] leading-relaxed"
            style={{
              fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
            }}
          >
            Vikings Minerals preserves the elemental permanence of Nordic bedrock. Every bar is
            cast from virgin electrolytic copper and high-purity minerals, unadorned by
            artificial polish, and struck with its verified metallurgical assay.
          </p>
        </div>

        {/* Specimen Ingot Visual Showcase */}
        <div className="mt-16 md:mt-20 border-t border-[#6E6A63]/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Physical Copper Ingot Specimen Frame */}
            <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] md:h-[480px] w-full overflow-hidden flex items-center justify-center p-6 sm:p-10">
              <div className="relative h-full w-full max-w-md">
                <Image
                  src={trioCopperImg}
                  alt="Three virgin copper ingot specimens resting on dark Nordic slate"
                  fill
                  priority={false}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              {/* Subtle corner registration marks reminiscent of surveyor stones */}
              <span className="absolute top-3 left-3 text-[10px] text-[#6E6A63] font-mono select-none">
                NO. 60°12′N
              </span>
              <span className="absolute bottom-3 right-3 text-[10px] text-[#5C6E52] font-mono select-none">
                SPECIMEN SERIES 01
              </span>
            </div>

            {/* Secondary Ingot Detail & Material Provenance */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#E8E1D3]"
                  style={{
                    fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
                  }}
                >
                  Virgin Copper Ingot
                </h3>
                <p
                  className="mt-4 text-sm sm:text-base text-[#6E6A63] leading-relaxed"
                  style={{
                    fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  }}
                >
                  Formed through high-heat induction casting into heavy refractory molds. The
                  untreated surface records cooling grain boundaries, resulting in a unique
                  crystalline topography on every bar.
                </p>
              </div>

              {/* Tactile Dimension Metrics (Hairline Granite Divided) */}
              <div className="border-t border-[#6E6A63]/20 pt-6 space-y-4">
                <div className="flex justify-between items-baseline text-sm">
                  <span
                    className="text-[#6E6A63]"
                    style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                  >
                    Standard Specimen Weight
                  </span>
                  <span className="font-mono text-[#E8E1D3]">1,000 Grams (1.00 kg)</span>
                </div>

                <div className="flex justify-between items-baseline text-sm">
                  <span
                    className="text-[#6E6A63]"
                    style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                  >
                    Refining Assay
                  </span>
                  <span className="font-mono text-[#E8E1D3]">99.99% Cu Purity</span>
                </div>

                <div className="flex justify-between items-baseline text-sm">
                  <span
                    className="text-[#6E6A63]"
                    style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                  >
                    Surface Finish
                  </span>
                  <span className="font-mono text-[#E8E1D3]">Raw Mill / Unlacquered</span>
                </div>
              </div>

              <div>
                <a
                  href="#archive"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#6E6A63]/40 text-[#E8E1D3] text-sm font-medium transition-colors hover:border-[#B5652D] hover:text-[#C98F3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C98F3A]"
                  style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
                >
                  View Assay Certificates
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Simple 3-Column Feature / Spec Grid with Hairline Dividers */}
        <div className="mt-24 sm:mt-28 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#6E6A63]/20 border-y border-[#6E6A63]/20">
          {/* Column 1 */}
          <div className="py-10 md:py-12 md:pr-10 lg:pr-12 flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[#E8E1D3]"
                style={{
                  fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
                  fontVariationSettings: '"opsz" 144, "wght" 600',
                }}
              >
                99.99% Virgin Copper
              </h3>
              <p
                className="mt-4 text-sm sm:text-base text-[#6E6A63] leading-relaxed"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                }}
              >
                Electrolytically refined to commercial bullion density. Untreated surfaces reveal
                natural crystalline grain, developing a gradual, storied patina over centuries
                of atmospheric exposure.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#6E6A63]/15 flex items-baseline justify-between text-xs text-[#6E6A63] font-mono">
              <span>Density Standard</span>
              <span className="text-[#E8E1D3]">8.96 g/cm³</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="py-10 md:py-12 md:px-8 lg:px-12 flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[#E8E1D3]"
                style={{
                  fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
                  fontVariationSettings: '"opsz" 144, "wght" 600',
                }}
              >
                Fennoscandian Shield
              </h3>
              <p
                className="mt-4 text-sm sm:text-base text-[#6E6A63] leading-relaxed"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                }}
              >
                Sourced from primeval bedrock formations in the Scandinavian interior. Each
                specimen batch carries a verified geological isotope footprint and certified
                geographical lineage.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#6E6A63]/15 flex items-baseline justify-between text-xs text-[#6E6A63] font-mono">
              <span>Geological Origin</span>
              <span className="text-[#E8E1D3]">Nordic Craton</span>
            </div>
          </div>

          {/* Column 3 */}
          <div className="py-10 md:py-12 md:pl-8 lg:pl-12 flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[#E8E1D3]"
                style={{
                  fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
                  fontVariationSettings: '"opsz" 144, "wght" 600',
                }}
              >
                Cold-Stamped Hallmarks
              </h3>
              <p
                className="mt-4 text-sm sm:text-base text-[#6E6A63] leading-relaxed"
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                }}
              >
                Individual serial numbers, elemental symbol, and assayer hallmark are deeply
                struck into cold metal. A tactile archive of geological permanence designed for
                generations.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#6E6A63]/15 flex items-baseline justify-between text-xs text-[#6E6A63] font-mono">
              <span>Assay Registry</span>
              <span className="text-[#E8E1D3]">Individually Serialized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
