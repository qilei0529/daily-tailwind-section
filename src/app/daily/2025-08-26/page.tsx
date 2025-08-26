import DragBox from "@/components/blocks/drag-box";

export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-08-26</div>
    <div className="max-w-[980px] relative mx-auto bg-gray-500/10 relative h-[400px] p-6">
      <div className="flex flex-col gap-2 md:gap-4 ">
        <h1 className="text-[56px] md:text-[56px] bg-red-500/10 md:w-[400px] lg:w-[400px] lg:text-[56px] font-medium md:text-left leading-[1.2]">
          Parenting <br /> in Beta mode.
        </h1>
        <p className="text-sm text-gray-500 w-[320px] md:w-[260px]">
          A modern guide to raising tiny humans — with smart tools, real advice, and support to help you grow together.
        </p>
      </div>
      <div className="h-[500px] absolute top-0 right-0">
        <DragBox offset={{ x: 100, y: 50 }} align="right">
          <div className="w-[200px] h-[200px] bg-red-500/60"></div>
        </DragBox>
        <DragBox offset={{ x: 200, y: 150 }} align="right">
          <div className="w-[200px] h-[200px] bg-green-500/60"></div>
        </DragBox>
        <DragBox offset={{ x: 250, y: 150 }} align="right">
          <div className="w-[100px] h-[100px] bg-blue-500/60"></div>
        </DragBox>
      </div>
    </div>
  </div>
}

