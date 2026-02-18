"use client";

import FeatureWithDevice from "./bento/FeatureWithDevice";
import IPhoneScreenshot from "./bento/IPhoneScreenshot";

export default function SmartPantryFeatures() {
  return (
    <FeatureWithDevice
      title="Know your Kitchen."
      description="Keep an inventory automatically, get expiry reminders, and generate recipes based on what you already have."
      device={
        <IPhoneScreenshot
          src="/pantry.jpg"
          alt="Fridgly pantry screen"
          className="w-[260px] sm:w-[300px]"
        />
      }
    />
  );
}
