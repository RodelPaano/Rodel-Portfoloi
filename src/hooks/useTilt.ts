import { useEffect, useRef, useState } from "react";

type UseTiltOptions = {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  enabled?: boolean;
};

const useTilt = (options: UseTiltOptions = {}) => {
  const { maxTilt = 8, perspective = 1000, scale = 1.02, speed = 400, enabled = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetX = ((y - centerY) / centerY) * -maxTilt;
      targetY = ((x - centerX) / centerX) * maxTilt;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * (speed / 1000);
      currentY += (targetY - currentY) * (speed / 1000);

      setTransform(
        `perspective(${perspective}px) rotateX(${currentX}deg) rotateY(${currentY}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      rafId = requestAnimationFrame(animate);
    };

    element.addEventListener("mousemove", handleMouseMove as EventListener);
    element.addEventListener("mouseleave", handleMouseLeave);

    rafId = requestAnimationFrame(animate);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener);
      element.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
      setTransform("");
    };
  }, [maxTilt, perspective, scale, speed, enabled]);

  return { ref, transform };
};

export default useTilt;
