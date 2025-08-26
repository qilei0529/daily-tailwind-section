"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function DragBox({
  offset,
  children,
  align = "left",
}: {
  offset: {
    x: number;
    y: number;
  },
  align?: "left" | "right",
  children: React.ReactNode,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  })

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - mousePos.x,
      y: e.clientY - mousePos.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setMousePos({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const pos = useMemo(() => {
    if (align === "left") {
      return {
        left: offset.x + mousePos.x,
        top: offset.y + mousePos.y,
      }
    } else {
      return {
        right: offset.x - mousePos.x,
        top: offset.y + mousePos.y,
      }
    }
  }, [offset, mousePos, align])

  return <div
    ref={ref}
    style={{
      width: 200,
      height: 200,
      position: "absolute",
      cursor: isDragging ? "grabbing" : "default",
      userSelect: "none",
      ...pos,
    }}
    onMouseDown={handleMouseDown}
  >
    {children}
  </div>
}