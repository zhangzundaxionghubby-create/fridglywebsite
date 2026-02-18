"use client";

import * as React from "react";

type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  tag?: string;
  size?: "sm" | "md" | "lg";
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Finally a meal planner that doesn’t feel like homework. Super clean.",
    name: "Aisha",
    meta: "Student • London",
    tag: "Meal plans",
    size: "lg",
  },
  {
    quote: "The shopping list feature is the one. I waste way less food now.",
    name: "Ben",
    meta: "Busy grad • Durham",
    tag: "Shopping list",
    size: "md",
  },
  {
    quote: "Hit my protein target without thinking about it all day.",
    name: "Sofia",
    meta: "Gym-goer • Manchester",
    tag: "Macros",
    size: "md",
  },
  {
    quote: "I like that it’s simple. Beige + calm UI = actually usable.",
    name: "James",
    meta: "Intern • London",
    tag: "UI",
    size: "sm",
  },
  {
    quote: "Good suggestions from what I already had in my fridge.",
    name: "Nur",
    meta: "Home cook • Birmingham",
    tag: "Smart pantry",
    size: "lg",
  },
  {
    quote: "Feels like a nutritionist — but faster, and way less judgmental.",
    name: "Lena",
    meta: "Runner • Bristol",
    tag: "Recipes",
    size: "md",
  },
];

function cardWidth(size: Testimonial["size"]) {
  switch (size) {
    case "sm":
      return "w-[260px] sm:w-[280px]";
    case "lg":
      return "w-[420px] sm:w-[480px]";
    case "md":
    default:
      return "w-[320px] sm:w-[360px]";
  }
}

export default function TestimonialsMarquee() {
  // Duplicate list for seamless loop
  const items = React.useMemo(() => [...TESTIMONIALS, ...TESTIMONIALS], []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-16">
        <div className="mb-8">
          <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">
            TESTIMONIALS
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            Loved by people who just want to eat well
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600 sm:text-base">
            Simple planning, higher protein, less waste — without the clutter.
          </p>
        </div>

        {/* Marquee viewport */}
        <div className="relative overflow-hidden">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />

          {/* Track */}
          <div className="marquee-track flex w-max gap-4">
            {items.map((t, idx) => (
              <article
                key={`${t.name}-${idx}`}
                className={[
                  "group relative overflow-hidden rounded-[24px] border border-black/10 bg-white",
                  "shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)]",
                  "transition",
                  cardWidth(t.size),
                ].join(" ")}
              >
                {/* warm beige hint */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FBF8F2] via-white to-white opacity-70" />

                <div className="relative p-6">
                  {t.tag ? (
                    <div className="inline-flex items-center rounded-full border border-black/10 bg-[#F6F1E7] px-3 py-1 text-xs font-medium text-neutral-900">
                      {t.tag}
                    </div>
                  ) : null}

                  <p className="mt-3 text-sm leading-relaxed text-neutral-800 sm:text-base">
                    “{t.quote}”
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <div className="text-sm font-semibold text-neutral-950">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.meta}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Divider under section */}
          <div className="mt-10 h-px w-full bg-black/10" />
        </div>
      </div>

      {/* Scoped CSS for marquee animation + reduced motion */}
      <style jsx>{`
        .marquee-track {
          animation: marquee 45s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
