"use client";

import FeatureWithDevice from "./bento/FeatureWithDevice";
import IPhoneScreenshot from "./bento/IPhoneScreenshot";

export default function MacroTrackerFeatures() {
  return (
    <FeatureWithDevice
      title="Track with Ease."
      description="Log meals fast and see your remaining targets at a glance — calories, protein, carbs, and fats."
      device={
        <IPhoneScreenshot
          src="/macrotracker.jpg"
          alt="Fridgly macro tracker screen"
          className="w-[260px] sm:w-[300px]"
        />
      }
    />
  );
}
