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

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const rect = element.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = ((y - centerY) / centerY) * -maxTilt * 0.3;
        targetY = ((x - centerX) / centerX) * maxTilt * 0.3;
      }
    };

    const handleTouchEnd = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      const easing = speed / 1000;
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;

      setTransform(
        `perspective(${perspective}px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      rafId = requestAnimationFrame(animate);
    };

    element.addEventListener("mousemove", handleMouseMove as EventListener);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("touchmove", handleTouchMove, { passive: true });
    element.addEventListener("touchend", handleTouchEnd);

    rafId = requestAnimationFrame(animate);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove as EventListener);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(rafId);
      setTransform("");
    };
  }, [maxTilt, perspective, scale, speed, enabled]);

  return { ref, transform };
};

export default useTilt;
