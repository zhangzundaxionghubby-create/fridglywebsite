"use client";

import FeatureWithDevice from "./bento/FeatureWithDevice";
import IPhoneScreenshot from "./bento/IPhoneScreenshot";

export default function BentoFeatures() {
  return (
    <FeatureWithDevice
      title="Tailored Meals."
      description="Tell Fridgly your preferences once — dietary goals, allergies, and likes — and it tailors recipes and meals automatically."
      device={
        <IPhoneScreenshot
          src="/recipegen.jpg"
          alt="Fridgly recipe ideas screen"
          className="w-[260px] sm:w-[300px]"
        />
      }
    />
  );
}
