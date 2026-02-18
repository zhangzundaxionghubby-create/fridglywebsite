"use client";

import FeatureWithDevice from "./bento/FeatureWithDevice";
import IPhoneScreenshot from "./bento/IPhoneScreenshot";

export default function MealPlansFeatures() {
  return (
    <FeatureWithDevice
      title="Plan your Week."
      description="Pick your goals and schedule, then let Fridgly generate a balanced plan you can tweak in seconds."
      device={
        <IPhoneScreenshot
          src="/mealplan.jpg"
          alt="Fridgly meal plan screen"
          className="w-[260px] sm:w-[300px]"
        />
      }
    />
  );
}
