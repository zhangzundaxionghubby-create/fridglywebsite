"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../components/home/Hero";
import TopTabs from "../components/home/TopTabs";
import BentoFeatures from "../components/home/BentoFeatures";
import MealPlansFeatures from "../components/home/MealPlansFeatures";
import MacroTrackerFeatures from "../components/home/MacroTrackerFeatures";
import SmartPantryFeatures from "../components/home/SmartPantryFeatures";
import TestimonialsMarquee from "../components/home/Testimonies";
import Benefits from "../components/home/Benefits";
import PricingFreePro from "@/components/home/Pricing";

type TabKey = "recipes" | "mealPlans" | "macroTracker" | "smartPantry";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("recipes");

  return (
    <>
      <Hero />
      <TestimonialsMarquee />
      <section id="features" className="scroll-mt-24">
        <TopTabs
          activeKey={activeTab}
          onSelect={(key) => {
            setActiveTab(key);
          }}
        />
      </section>
      
      
      <AnimatePresence mode="wait">
        {activeTab === "recipes" && (
          <motion.section
            key="recipes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="py-6"
          >
            <BentoFeatures />
          </motion.section>
        )}

        {activeTab === "mealPlans" && (
          <motion.section
            key="mealPlans"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="py-6"
          >
            <MealPlansFeatures />
          </motion.section>
        )}

        {activeTab === "macroTracker" && (
          <motion.section
            key="macroTracker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="py-6"
          >
            <MacroTrackerFeatures />
          </motion.section>
        )}

        {activeTab === "smartPantry" && (
          <motion.section
            key="smartPantry"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="py-6"
          >
            <SmartPantryFeatures />
          </motion.section>
        )}
        
      </AnimatePresence>
      <Benefits />
      <PricingFreePro />
    </>
  );
}
