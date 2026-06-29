import { Composition } from "remotion";
import { LiquidGlassHero } from "./LiquidGlassHero";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LiquidGlassHero"
      component={LiquidGlassHero}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
