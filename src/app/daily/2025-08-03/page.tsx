
import RotatingScene from '@/components/3d/RotatingScene'

export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-08-03</div>

    <div className="max-w-[980px] md:h-[400px] relative mx-auto bg-gray-500/10 relative p-6">
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-[56px] md:text-[56px] bg-red-500/10 md:w-[400px] lg:w-[400px] lg:text-[56px] font-medium md:text-left leading-[1.2]">
          Parenting <br /> in Beta mode.
        </h1>
        <p className="text-sm text-gray-500 w-[320px] md:w-[260px]">
          A modern guide to raising tiny humans — with smart tools, real advice, and support to help you grow together.
        </p>

        <div className='md:absolute md:w-1/2 top-0 right-0 w-[400px] h-[400px]'>
          <RotatingScene />
        </div>
      </div>

    </div>
  </div>
}
