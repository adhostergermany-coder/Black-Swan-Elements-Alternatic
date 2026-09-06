'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

import skyImg from '../Images/paralaxBG/sky.png'
import bottomBgImg from '../Images/paralaxBG/bottom bg.png'
import rightHillImg from '../Images/paralaxBG/right hill.png'
import leftHillImg from '../Images/paralaxBG/left hill.png'
import bottomCloudImg from '../Images/paralaxBG/bottom bg.png'
import product from "../Images/images.png"

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Track window scroll for responsive, real-time parallax
  const { scrollY } = useScroll()

  // Asset layer parallax shifts:
  // sky.png — base, 0% parallax shift
  // right_hill.png & left_hill.png — subtle cinematic depth shifts
  // bottomCloudImg (at top-[83%]) — smoothly rises UPWARDS as user scrolls:
  // "যতটুকু scroll করবে ততটুকুই উঠবে"
  const skyY = useTransform(scrollY, [0, 1000], ['0%', '0%'])
  const bottomBgY = useTransform(scrollY, [0, 1000], ['0%', '8%'])
  const rightHillY = useTransform(scrollY, [0, 1000], ['0%', '18%'])
  const leftHillY = useTransform(scrollY, [0, 1000], ['0%', '28%'])
  const bottomCloudY = useTransform(scrollY, [0, 1000], ['0%', '-83%'])

  // Hero text container orchestration
  // Starts after the mountain layers finish their grand sequential entrance (~1.25s)
  const heroContentVariants = {
    hidden: { opacity: shouldReduceMotion ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: shouldReduceMotion ? 0.2 : 1.25,
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }

  const heroItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#12181D]"
    >
      {/* Parallax Layers */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        {/* Layer 1: sky.png (Base - no entrance slide, stays steady) */}
        <motion.div
          style={{ y: shouldReduceMotion ? '10%' : skyY }}
          className="absolute top-[0%] left-0 right-0 h-[100%] w-full"
        >
          <Image
            src={skyImg}
            alt="Nordic highland sky"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </motion.div>

        {/* Layer 2: bottom bg.png (commented out by user) */}

        {/* Layer 3: right hill.png (1st to slide up) */}
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : rightHillY }}
          className="absolute top-[6%] left-0 right-0 h-[100%] w-full"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1.15,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative h-full w-full"
          >
            <Image
              src={rightHillImg}
              alt="Far hazy mountain peak"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </motion.div>
        </motion.div>
{/* Layer : Hero product */}
         <motion.div
          style={{ y: shouldReduceMotion ? '0%' : rightHillY }}
          className="absolute top-[6%] left-0 right-0 h-[100%] w-full"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1.9,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative h-full w-full"
          >
            <Image
              src={product}
              alt="Far hazy mountain peak"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </motion.div>
        </motion.div>

        {/* Layer 4: left hill.png (2nd to slide up) */}
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : leftHillY }}
          className="absolute -top-[0%] left-0 right-0 h-[105%] w-full"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1.15,
              delay: shouldReduceMotion ? 0 : 0.45,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative h-full w-full"
          >
            <Image
              src={leftHillImg}
              alt="Sunlit ridge slope"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </motion.div>
        </motion.div>

        {/* Layer 5: bottom cloude.png (3rd to slide up) */}
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : bottomCloudY }}
          className="absolute top-[83%] left-0 right-0 h-[100%] w-full z-30"
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1.15,
              delay: shouldReduceMotion ? 0 : 0.75,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative h-full w-full"
          >
            <Image
              src={bottomCloudImg}
              alt="Foreground ink-wash ridge"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </motion.div>
        </motion.div>

        {/* Cinematic atmospheric gradient overlay to ensure text contrast while preserving landscape */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12181D]/90 via-[#12181D]/25 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 bg-gradient-to-r from-[#12181D]/60 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* Hero Content — Sitting in the lower-left third of the viewport */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 sm:px-8 lg:px-12 pb-24 sm:pb-28 md:pb-32">
        <motion.div
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left"
        >
          {/* Display Headline in Fraunces */}
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8E1D3] leading-[1.06]"
            style={{
              fontFamily: "var(--font-fraunces), 'Fraunces', Georgia, serif",
              fontVariationSettings: '"opsz" 144, "wght" 800',
            }}
          >
            Forged in silence.
            <span className="block text-[#E8E1D3]/90">Carved from bedrock.</span>
          </motion.h1>

          {/* Supporting Copy in Manrope */}
          <motion.p
            variants={heroItemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#9E988F] max-w-xl text-left leading-relaxed"
            style={{
              fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
            }}
          >
            Certified virgin copper and geological ore bars, hallmarked with raw Nordic provenance.
          </motion.p>

          {/* Single CTA in ore-copper */}
          <motion.div variants={heroItemVariants} className="mt-8 flex items-center">
            <a
              href="#specimens"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#B5652D] text-[#E8E1D3] text-sm font-medium tracking-normal transition-colors duration-200 hover:bg-[#9e5522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C98F3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12181D]"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
              }}
            >
              Explore Specimen Collection
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}