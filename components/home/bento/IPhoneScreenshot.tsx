"use client";

import Image from "next/image";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

type IPhoneScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function IPhoneScreenshot({ src, alt, className }: IPhoneScreenshotProps) {
  return (
    <div className={className}>
      <div className="origin-top scale-[0.85]">
        <DeviceFrameset device="iPhone X" color="black">
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 260px, 300px"
              className="object-cover"
              priority
            />
          </div>
        </DeviceFrameset>
      </div>
    </div>
  );
}

