import useTilt from "@/hooks/useTilt";
import type { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  style?: React.CSSProperties;
};

const TiltCard = ({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
  style,
}: TiltCardProps) => {
  const tilt = useTilt({ maxTilt, scale });

  return (
    <div
      ref={tilt.ref}
      style={{ ...style, transform: tilt.transform }}
      className={className}
    >
      {children}
    </div>
  );
};

export default TiltCard;
