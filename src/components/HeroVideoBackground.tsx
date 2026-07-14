"use client";

import { useEffect, useRef } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function loadVideo() {
      video?.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach((source) => {
        source.src = source.dataset.src!;
      });
      video?.load();
      video?.play().catch(() => {});
    }

    if (document.readyState === "complete") {
      loadVideo();
      return;
    }
    window.addEventListener("load", loadVideo, { once: true });
    return () => window.removeEventListener("load", loadVideo);
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      poster="/hero-poster.jpg"
      className="h-full w-full object-cover opacity-60 motion-reduce:hidden light:hidden"
    >
      <source data-src="/hero-loop.webm" type="video/webm" />
      <source data-src="/hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
