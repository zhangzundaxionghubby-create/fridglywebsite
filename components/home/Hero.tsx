"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#F6F1E7] blur-3xl opacity-60" />
        <div className="absolute top-10 right-[10%] h-[260px] w-[260px] rounded-full bg-emerald-500 blur-3xl opacity-[0.08]" />
      </div>
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Welcome to Fridgly
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg">
              An AI-powered nutritionist that makes your cooking easier
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <motion.a
                href="#get-started"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                aria-label="Download on the App Store"
                className="inline-flex items-center justify-center overflow-hidden rounded-[10px] transition focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white"
              >
                <Image src="/download.svg" alt="" width={120} height={40} priority />
              </motion.a>

              <a
                href="#features"
                className="
                  inline-flex items-center justify-center rounded-full
                  border border-black/10 bg-[#FBF8F2] px-6 py-3 text-sm font-semibold text-neutral-900
                  transition
                  hover:bg-[#F6F1E7]
                  focus:outline-none focus:ring-4 focus:ring-emerald-500/25 focus:ring-offset-2 focus:ring-offset-white
                "
              >
                See features
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Clean eating, less thinking — pantry to plate.
            </p>
          </motion.div>

          {/* clean divider like your original */}
          <div className="mt-10">
            <div className="h-px w-full bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
