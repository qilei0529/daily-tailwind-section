'use client'

import { useEffect, useMemo, useRef, useState } from "react";

export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-07-31</div>
    <div className="max-w-[980px] mx-auto bg-gray-500/10 relative mb-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-2 md:gap-4">
        <h1 className="text-[56px] md:text-[56px] bg-red-500/10 md:w-[400px] lg:w-[400px] lg:text-[56px] font-medium md:text-left leading-[1.2]">
          Parenting <br /> in Beta mode.
        </h1>
        <p className="text-sm text-gray-500 w-[320px] md:w-[260px]">
          A modern guide to raising tiny humans — with smart tools, real advice, and support to help you grow together.
        </p>
      </div>
    </div>
    <BlockSliderScroll>
      <BlockCard>1</BlockCard>
      <BlockCard>2</BlockCard>
      <BlockCard>3</BlockCard>
      <BlockCard>4</BlockCard>
      <BlockCard>5</BlockCard>
    </BlockSliderScroll>
  </div>
}

function BlockCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[300px] h-[300px] bg-slate-500/20 flex items-center justify-center text-2xl text-slate-700 font-bold">{children}</div>
  )
}


function BlockSliderScroll({ children }: { children: React.ReactNode }) {

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const width = 300;
  const padding = 16;
  const start = 2 * (width + padding);

  const leftRef = useRef(start);

  useEffect(() => {
    if (sliderRef.current) {
      const length = Array.isArray(children) ? children.length : 0;
      const maxWidth = width * length + padding * (length - 1) + start;

      let animationFrameId: number;

      const baseSpeed = 0.9;

      const animate = () => {
        // 获取当前位置
        const currentX = leftRef.current;
        const speed = isHovered ? baseSpeed / 3 : baseSpeed;
        const left = currentX + speed;
        leftRef.current = left;
        if (sliderRef.current) {
          if (left > maxWidth) {
            leftRef.current = start;
          }
          sliderRef.current.style.transform = `translateX(-${left}px)`;
        }
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isHovered]);


  const lastTwoChildren = useMemo(() => {
    return Array.isArray(children) ? children.slice(-2) : [];
  }, [children]);

  return (
    <div className="w-screen overflow-x-hidden">
      <div className="max-w-[980px] mx-auto bg-gray-500/10 relative">
        <div className="w-full h-[300px] bg-red-500/10">
          <div className="w-full h-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex flex-row gap-4 w-fit absolute top-0 left-0" ref={sliderRef}>
              {lastTwoChildren}
              {children}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>)
}