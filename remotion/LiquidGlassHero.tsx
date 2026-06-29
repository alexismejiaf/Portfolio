import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

const BLOBS = [
  { base: 0.18, radius: 520, ax: 320, ay: 180, phase: 0 },
  { base: 0.14, radius: 460, ax: 280, ay: 240, phase: 2.1 },
  { base: 0.1, radius: 600, ax: 360, ay: 160, phase: 4.2 },
];

export const LiquidGlassHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();
  const t = (frame / durationInFrames) * Math.PI * 2; // 0..2π over the loop

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0b" }}>
      <AbsoluteFill style={{ filter: "blur(60px)" }}>
        {BLOBS.map((b, i) => {
          const cx = width / 2 + Math.cos(t + b.phase) * b.ax;
          const cy = height / 2 + Math.sin(t * 2 + b.phase) * b.ay;
          const opacity = interpolate(Math.sin(t * 2 + b.phase), [-1, 1], [b.base * 0.5, b.base]);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: cx - b.radius / 2,
                top: cy - b.radius / 2,
                width: b.radius,
                height: b.radius,
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(255,255,255,${opacity}) 0%, transparent 65%)`,
              }}
            />
          );
        })}
      </AbsoluteFill>
      {/* subtle grain/vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 40%, rgba(10,10,11,0.6) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
