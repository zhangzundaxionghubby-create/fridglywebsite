"use client";

export default function PricingFreePro() {
  return (
    <section id="pricing" className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-16">
        <div className="mb-8">
          <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">
            PRICING
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            Simple. No surprises.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-600 sm:text-base">
            Start free, Stay free.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <article className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FBF8F2] via-white to-white opacity-70" />

            <div className="relative">
              <div className="text-sm font-semibold text-neutral-950">Free</div>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="text-4xl font-semibold tracking-tight text-neutral-950">£0</div>
                <div className="text-sm text-neutral-500">/ month</div>
              </div>

              <p className="mt-3 text-sm text-neutral-600">
                The essentials to plan meals and stay consistent.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Recipe ideas from your preferences
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Basic meal plans
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Simple shopping list
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/30" />
                  Dietary preferences (e.g., halal)
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-10 h-px w-full bg-black/10" />
      </div>
    </section>
  );
}
