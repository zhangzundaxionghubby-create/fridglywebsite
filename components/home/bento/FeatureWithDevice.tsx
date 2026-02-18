"use client";

import type { ReactNode } from "react";

type FeatureWithDeviceProps = {
  title: string;
  description?: string;
  device: ReactNode;
};

export default function FeatureWithDevice({ title, description, device }: FeatureWithDeviceProps) {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">{device}</div>
        <div className="max-w-xl lg:-mt-80">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-300">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
