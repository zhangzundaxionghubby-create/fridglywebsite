"use client";

type Benefit = {
  title: string;
  desc: string;
  icon: "protein" | "waste" | "weekly";
};

const BENEFITS: Benefit[] = [
  {
    title: "Hit protein without overthinking",
    desc: "Clear suggestions that match your goals — no spreadsheets needed.",
    icon: "protein",
  },
  {
    title: "Stop wasting food",
    desc: "Use what’s already in your fridge and pantry before buying more.",
    icon: "waste",
  },
  {
    title: "Shop once, cook all week",
    desc: "Turn a plan into a tidy list so your week runs itself.",
    icon: "weekly",
  },
];

function BenefitIcon({ icon }: { icon: Benefit["icon"] }) {
  switch (icon) {
    case "protein":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M12 3a9 9 0 1 0 9 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 7v6l4 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "waste":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M9 7V6a3 3 0 0 1 6 0v1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 7h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M7 7l1 14h8l1-14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11v6M14 11v6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "weekly":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M7 4v3M17 4v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 9h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 6.5h11A2.5 2.5 0 0 1 20 9v10.5A2.5 2.5 0 0 1 17.5 22h-11A2.5 2.5 0 0 1 4 19.5V9A2.5 2.5 0 0 1 6.5 6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function BenefitsRow() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-6 py-10 sm:py-14">
        <div className="mb-6">
          <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">
            OUTCOMES
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
            Benefits you feel, not features you manage
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.06),0_12px_34px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(0,0,0,0.08),0_18px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-neutral-100 text-neutral-900">
                <BenefitIcon icon={b.icon} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">
                {b.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {b.desc}
              </p>

              <div className="mt-7 h-px w-10 bg-emerald-500/0 transition group-hover:bg-emerald-500/40" />
            </article>
          ))}
        </div>

        <div className="mt-8">
          <div className="h-px w-full bg-black/10" />
        </div>
      </div>
    </section>
  );
}
