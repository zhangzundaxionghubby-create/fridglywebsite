"use client";

type TabKey = "recipes" | "mealPlans" | "macroTracker" | "smartPantry";

type Tab = {
  key: TabKey;
  label: string;
};

const tabs: Tab[] = [
  { key: "recipes", label: "Recipe Ideas" },
  { key: "mealPlans", label: "Meal Plans" },
  { key: "macroTracker", label: "Macro Tracker" },
  { key: "smartPantry", label: "Smart Pantry" },
];

type TopTabsProps = {
  onSelect?: (key: TabKey) => void; // optional callback for later
  activeKey?: TabKey | null;
};


function Icon({ tab }: { tab: TabKey }) {
  // Simple inline icons (monochrome, iOS-ish). Swap for your own later if you want.
  switch (tab) {
    case "recipes":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M6 21V7a3 3 0 0 1 3-3h9v14a3 3 0 0 1-3 3H6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M6 19h9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mealPlans":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
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
    case "macroTracker":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M21 12a9 9 0 1 1-9-9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M21 12h-6l3-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "smartPantry":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M7.5 10.5V9.5C7.5 6.74 9.74 4.5 12.5 4.5S17.5 6.74 17.5 9.5v1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 10.5h12A2 2 0 0 1 20.5 12.5v4A4 4 0 0 1 16.5 20.5h-8.0A4 4 0 0 1 4.5 16.5v-4A2 2 0 0 1 6.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function TopTabs({ onSelect, activeKey }: TopTabsProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-center gap-6 py-6 text-sm text-neutral-600 dark:text-neutral-300">
        {tabs.map((t) => (
          (() => {
            const isActive = activeKey === t.key;

            return (
          <button
            key={t.key}
            type="button"
            onClick={() => {
              onSelect?.(t.key);
            }}
            aria-pressed={isActive}
            className={
              isActive
                ? "inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-neutral-900 transition dark:bg-white/10 dark:text-white"
                : "inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-white/10 dark:hover:text-white"
            }
          >
            <Icon tab={t.key} />
            <span className="font-medium">{t.label}</span>
          </button>
            );
          })()
        ))}
      </div>
    </div>
  );
}
