"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ Data Structure
const faqData = [
  {
    category: "Pricing & Subscription",
    items: [
      {
        question: "Is Fridgly free to use?",
        answer:
          "Yes! Fridgly is completely free to use. All features including tailored recipe suggestions, smart shopping lists, pantry tracking, and macro logging are available at no cost.",
      },
      {
        question: "Are there any usage limits?",
        answer:
          "Each account has a monthly limit of 200 AI-powered actions (API calls). This includes recipe generation, shopping list creation, cooking step generation, receipt scanning, and macro estimation. The limit resets at the beginning of each month.",
      },
      {
        question: "What counts as an API call?",
        answer:
          "The following actions count toward your monthly limit: generating personalized recipes, creating a shopping list from your meal plan, getting AI-generated cooking steps, scanning a receipt to add pantry items, importing a recipe from a screenshot, estimating macros from a meal photo, and generating recipes based on your macro goals.",
      },
      {
        question: "Will there be a premium version?",
        answer:
          "We're focused on providing a great free experience for now. If we introduce premium features in the future, we'll make sure the core functionality remains free.",
      },
    ],
  },
  {
    category: "Shopping List",
    items: [
      {
        question: "Where does my shopping list come from?",
        answer:
          "Your shopping list is automatically generated from your weekly meal plan. When you add recipes to your daily plans, Fridgly intelligently combines all the ingredients you'll need for the week.",
      },
      {
        question: "How does the smart shopping list work?",
        answer:
          "Fridgly's shopping list is smart in several ways: it combines ingredients (if multiple recipes need onions, they're combined into one entry), converts units (different measurements are converted and combined), excludes pantry items (ingredients already in your pantry are automatically excluded), and excludes staples (common kitchen staples like salt, oil, pepper are not added).",
      },
      {
        question: "Can I manually add items to my shopping list?",
        answer:
          'Yes! You can tap the "+" button to manually add any item to your shopping list, even if it\'s not from a recipe.',
      },
      {
        question: "What happens when I check off an item?",
        answer:
          "When you mark an item as purchased (checked), it's automatically added to your pantry. This keeps your pantry inventory up to date as you shop.",
      },
      {
        question: "Why are some ingredients missing from my shopping list?",
        answer:
          "Items are excluded if they're already in your pantry, they're marked as a staple item (like salt, oil, or flour), or you've already purchased them this week.",
      },
    ],
  },
  {
    category: "Pantry",
    items: [
      {
        question: "How do I add items to my pantry?",
        answer:
          'There are several ways to add items to your pantry: check off grocery items (when you mark shopping list items as purchased), scan a receipt (use the receipt scanner to automatically extract and add items), manual entry (tap the "+" button to add items manually), or add staple items (common kitchen staples that you always have on hand).',
      },
      {
        question: "What are staple items?",
        answer:
          "Staple items are common ingredients you always keep stocked (like salt, cooking oil, flour, sugar). These are excluded from your shopping list since you typically don't need to buy them.",
      },
      {
        question: 'How does the "consumed" feature work?',
        answer:
          'When you tap the "consumed" button on a pantry item, it reduces the remaining quantity by 25%. This helps you track how much of each item you have left without needing exact measurements.',
      },
      {
        question: "Does my pantry affect recipe suggestions?",
        answer:
          'Yes! When you use "Generate from Pantry," Fridgly creates recipes based on what you already have. It shows full matches (recipes you can make with current ingredients) and partial matches (recipes that need just 1-2 more items).',
      },
    ],
  },
  {
    category: "Recipes & Meal Planning",
    items: [
      {
        question: "How are recipes personalized for me?",
        answer:
          "Fridgly learns your preferences through dietary restrictions (Halal, Kosher, Vegetarian, Vegan, etc.), allergies (Gluten-free, Dairy-free, Nut-free, etc.), cuisine preferences (Italian, Mexican, Asian, Mediterranean, etc.), macro preferences (High protein, low carb, calorie-conscious, etc.), and swipe feedback (swiping left/right helps the AI learn your taste).",
      },
      {
        question: "What do the swipes do?",
        answer:
          "Swipe right adds the recipe to your cookbook and tells the AI you like this style. Swipe left skips the recipe and helps the AI avoid similar recipes in the future.",
      },
      {
        question: "Can I import my own recipes?",
        answer:
          "Yes! You can use screenshot import (take a photo of a recipe from a book, website, etc. and Fridgly will extract the details) or manual entry (add recipes manually with your own ingredients and instructions).",
      },
      {
        question: "How do I plan my week?",
        answer:
          "Browse or generate recipes, add recipes to specific days, your shopping list automatically updates, and view your week in the calendar view.",
      },
    ],
  },
  {
    category: "Cooking Mode",
    items: [
      {
        question: "What is Cooking Mode?",
        answer:
          "Cooking Mode provides step-by-step guidance while you cook. Each step includes clear instructions, estimated time for each step, built-in timers, and ingredient prep reminders.",
      },
      {
        question: "Can I customize the cooking instructions?",
        answer:
          "Yes! You can adjust skill level (1-5, simpler instructions for beginners, more concise for experts), detail level (1-5, how much explanation each step includes), and serving size (1-8, instructions scale to your portion needs).",
      },
      {
        question: "Why are cooking steps generated separately?",
        answer:
          "To save your monthly API calls, cooking steps are only generated when you actually start cooking a recipe, not when browsing. This means you can browse unlimited recipes without using your quota.",
      },
    ],
  },
  {
    category: "Macros & Nutrition",
    items: [
      {
        question: "How do I track my macros?",
        answer:
          "Go to the Macros tab, log meals by type (Breakfast, Lunch, Dinner, Snack), either enter manually or take a photo for AI estimation, and view your daily and weekly progress.",
      },
      {
        question: "How accurate is the photo macro estimation?",
        answer:
          "The AI provides reasonable estimates based on visual analysis. For precise tracking, we recommend using it for general guidance, manually adjusting values when you know exact portions, and logging recipe-based meals for better accuracy.",
      },
      {
        question: "Can I set custom macro goals?",
        answer:
          "Yes! You can set your daily targets for calories, protein, carbohydrates, and fats.",
      },
      {
        question: 'What is "Generate from Macros"?',
        answer:
          "This feature creates recipes specifically designed to help you hit your remaining macro targets for the day. Perfect for meal prepping or when you need a meal with specific nutritional content.",
      },
    ],
  },
  {
    category: "Receipt Scanning",
    items: [
      {
        question: "How do I scan a receipt?",
        answer:
          'Go to Pantry, tap "Scan Receipt", take a photo of your grocery receipt, review the extracted items, and confirm to add them to your pantry.',
      },
      {
        question: "What receipts work best?",
        answer:
          "For best results, use clear, well-lit photos, ensure text is readable, standard grocery store receipts work best, and note that handwritten lists may not work as well.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    items: [
      {
        question: "What sign-in options are available?",
        answer:
          "You can sign in with email and password, Google account, or Apple ID (iOS).",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. We use industry-standard security practices including secure authentication (OAuth 2.0 with PKCE), encrypted data transmission, and no sharing of personal data with third parties.",
      },
      {
        question: "Can I use the app without an account?",
        answer:
          "You can browse the app as a guest, but you'll need to create an account to save recipes to your cookbook, generate personalized recipes, use AI-powered features, and sync across devices.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Go to Profile > Settings and look for the account deletion option. This will permanently remove all your data from our servers.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    items: [
      {
        question: 'Why am I seeing "API limit reached"?',
        answer:
          "You've used your 200 monthly AI actions. Your limit resets on the 1st of each month. In the meantime, you can browse your saved cookbook recipes, manually add items to pantry and shopping list, and use the cooking mode for already-generated recipes.",
      },
      {
        question: "Recipes aren't matching my dietary restrictions",
        answer:
          "Make sure your preferences are up to date: go to Profile > Preferences, review your dietary restrictions and allergies, save any changes, and generate new recipes.",
      },
      {
        question: "The app isn't syncing properly",
        answer:
          "Try these steps: check your internet connection, pull down to refresh on any screen, log out and log back in. If issues persist, contact support.",
      },
      {
        question: "My shopping list seems wrong",
        answer:
          "This usually happens when pantry items are out of date (check and update your pantry), recipes were removed after the list was generated (regenerate the list), or ingredients were manually removed from the list.",
      },
    ],
  },
  {
    category: "Tips & Best Practices",
    items: [
      {
        question: "How can I get the best recipe recommendations?",
        answer:
          'Complete the onboarding preferences thoroughly, swipe on recipes regularly to train the AI, update your preferences as your tastes change, and use "Generate from Pantry" to reduce food waste.',
      },
      {
        question: "How can I save API calls?",
        answer:
          "Browse your cookbook instead of generating new recipes daily, plan your whole week at once instead of day-by-day, use manual entry for simple items, and generate cooking steps only when you're ready to cook.",
      },
      {
        question: "How do I keep my pantry accurate?",
        answer:
          'Scan receipts right after shopping, use the "eaten" button as you use items, review and clean up your pantry weekly, and mark staple items so they\'re excluded from shopping lists.',
      },
    ],
  },
];

// Search Icon Component
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// Chevron Icon Component
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="h-5 w-5 text-neutral-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-neutral-600"
      >
        <span className="pr-4 text-sm font-medium text-neutral-900 sm:text-base">
          {question}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm leading-relaxed text-neutral-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Category Component
function FAQCategory({
  category,
  items,
  openItems,
  toggleItem,
  searchQuery,
}: {
  category: string;
  items: { question: string; answer: string }[];
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  searchQuery: string;
}) {
  const filteredItems = useMemo(() => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  if (filteredItems.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-neutral-950 sm:text-xl">
        {category}
      </h2>
      <div>
        {filteredItems.map((item) => {
          const id = `${category}-${item.question}`;
          return (
            <FAQItem
              key={id}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(id)}
              onToggle={() => toggleItem(id)}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return faqData;
    const query = searchQuery.toLowerCase();
    return faqData
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  const totalResults = filteredCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );

  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-screen-md px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            How can we help?
          </h1>
          <p className="mt-3 text-base text-neutral-600">
            Search our FAQ or browse by category below
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-3.5 pl-12 pr-4 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200 sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-neutral-500">
              {totalResults} result{totalResults !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        {/* FAQ Categories */}
        <div className="mt-8 space-y-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <FAQCategory
                key={cat.category}
                category={cat.category}
                items={cat.items}
                openItems={openItems}
                toggleItem={toggleItem}
                searchQuery={searchQuery}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center">
              <p className="text-neutral-600">
                No results found for &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Try a different search term or browse the categories below
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-950">
            Still need help?
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Can&apos;t find what you&apos;re looking for? Send us an email and
            we&apos;ll get back to you as soon as we can.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm font-medium text-neutral-700">
                General & Support
              </p>
              <a
                href="mailto:samuelcch9@gmail.com"
                className="text-base font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
              >
                samuelcch9@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-700">
                Business Enquiries
              </p>
              <a
                href="mailto:davidzhang.businesshelping@gmail.com"
                className="text-base font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600"
              >
                davidzhang.businesshelping@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-neutral-50 p-4">
            <p className="text-sm text-neutral-700">
              When contacting us, please include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Your account email (if relevant)</li>
              <li>Your device + iOS/Android version</li>
              <li>A short description of the issue</li>
              <li>Screenshots (optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
