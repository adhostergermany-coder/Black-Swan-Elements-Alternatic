'use client'

import React from 'react'
import Navbar from './componets/nav'
import Hero from './componets/hero'
import ProductShowcase from './componets/product-showcase'

export default function VikingsMineralsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#12181D] text-[#E8E1D3] selection:bg-[#B5652D] selection:text-[#E8E1D3]">
      {/* Font & Token Definition (self-contained within vikings-minerals) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600..900;1,9..144,600..900&family=Manrope:wght@400;500;600;700&display=swap');

            :root {
              --font-fraunces: 'Fraunces', Georgia, serif;
              --font-manrope: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            .font-fraunces {
              font-family: var(--font-fraunces);
            }

            .font-manrope {
              font-family: var(--font-manrope);
            }
          `,
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Stacking Card Scroll Container */}
      <div className="relative w-full">
        {/* Sticky Hero */}
        <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
          <Hero />
        </div>

        {/* Section 2: Product Showcase & Specifications */}
        <ProductShowcase />
      </div>
    </div>
  )
}