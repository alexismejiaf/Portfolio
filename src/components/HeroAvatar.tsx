"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function HeroAvatar() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <div className="glass relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl">
      {photoFailed ? (
        <span role="img" aria-label={profile.name} className="text-base font-semibold text-text">
          {profile.initials}
        </span>
      ) : (
        <Image
          src={profile.photoPath}
          alt={profile.name}
          fill
          sizes="64px"
          priority
          className="object-cover"
          onError={() => setPhotoFailed(true)}
        />
      )}
    </div>
  );
}
