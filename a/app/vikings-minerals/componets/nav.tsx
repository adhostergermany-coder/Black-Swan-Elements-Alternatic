'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion'
import logoImg from '../Images/logo.png'

interface NavProps {
  onCtaClick?: () => void
}

const navLinks = [
  { label: 'Ingots & Ore', href: '#specimens' },
  { label: 'Provenance', href: '#provenance' },
  { label: 'Metallurgy', href: '#metallurgy' },
  { label: 'Archive', href: '#archive' },
]

export default function Navbar({ onCtaClick }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const { scrollY } = useScroll()

  // On scroll past the hero, nav background transitions to solid ink-fjord with subtle bottom border in granite at 20% opacity
  const navBackground = useTransform(
    scrollY,
    [0, 240],
    ['rgba(18, 24, 29, 0)', 'rgba(18, 24, 29, 1)']
  )

  const navBorderColor = useTransform(
    scrollY,
    [0, 240],
    ['rgba(110, 106, 99, 0)', 'rgba(110, 106, 99, 0.2)']
  )

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { opacity: 0 } : { y: '-100%', opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
        transition={{
          ease: [0.16, 1, 0.3, 1] as const,
          duration: 0.8,
          delay: 0.2,
        }}
        style={{
          backgroundColor: navBackground,
          borderBottomColor: navBorderColor,
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Brand / Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C98F3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12181D]"
            aria-label="Vikings Minerals Home"
          >
            <div className="relative h-9 w-24 sm:w-28 transition-opacity duration-200 group-hover:opacity-90">
              <Image
                src={logoImg}
                alt="Vikings Minerals"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex md:items-center md:gap-8 lg:gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#E8E1D3] transition-colors duration-150 hover:text-[#C98F3A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C98F3A]"
                style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#specimens"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium bg-[#B5652D] text-[#E8E1D3] transition-colors duration-200 hover:bg-[#9e5522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C98F3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12181D]"
              style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
            >
              Acquire Ingot
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center text-[#E8E1D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C98F3A]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              <svg
                className="h-6 w-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#12181D] px-8 pt-28 pb-12 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="flex flex-col space-y-7">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : 0.08 * idx,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="text-3xl sm:text-4xl text-[#E8E1D3] hover:text-[#C98F3A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C98F3A]"
                  style={{
                    fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="border-t border-[#6E6A63]/20 pt-8">
              <a
                href="#specimens"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3.5 text-center text-sm font-medium bg-[#B5652D] text-[#E8E1D3] hover:bg-[#9e5522] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C98F3A]"
                style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
              >
                Acquire Ingot
              </a>
              <p
                className="mt-4 text-xs text-[#6E6A63] text-left"
                style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
              >
                Vikings Minerals — Geological Specimen Archive
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
