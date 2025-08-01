'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-07-31</div>

    <div className="max-w-[980px] relative mx-auto bg-gray-500/10 relative mb-4">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-blue-300 flex flex-col items-center justify-center">
          <div className="h-[40px]"></div>
          <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-2 md:gap-4">
            <h1 className="text-[56px] md:text-[56px] bg-red-500/10 md:w-[400px] lg:w-[400px] lg:text-[56px] font-medium md:text-left leading-[1.2]">
              Parenting <br /> in Beta mode.
            </h1>
            <p className="text-sm text-gray-500 w-[320px] md:w-[260px]">
              A modern guide to raising tiny humans — with smart tools, real advice, and support to help you grow together.
            </p>
          </div>
        </div>
      </div>
      <ResizableSection >
        <div className="w-screen lg:w-[980px] h-[500px] bg-red-300 flex flex-col items-center justify-center">
          <div className="h-[40px]"></div>
          <div className="flex flex-col md:flex-row items-center justify-center md:items-end gap-2 md:gap-4">
            <h1 className="text-[56px] md:text-[56px] bg-red-500/10 md:w-[400px] lg:w-[400px] lg:text-[56px] font-medium md:text-left leading-[1.2]">
              Parenting <br /> in Beta mode.
            </h1>
            <p className="text-sm text-gray-500 w-[320px] md:w-[260px]">
              A modern guide to raising tiny humans — with smart tools, real advice, and support to help you grow together.
            </p>
          </div>

        </div>
      </ResizableSection>
    </div>
  </div>
}


export function ResizableSection({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full relative"
    >
      <ResizablePanel className="" >
        {children}
      </ResizablePanel>
      <ResizableHandle className="bg-white w-1" withHandle />
      <ResizablePanel className="bg-blue-500/10" >
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}