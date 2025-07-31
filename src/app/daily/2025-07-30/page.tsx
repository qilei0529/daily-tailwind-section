export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-07-30</div>
    <div className="max-w-[980px] mx-auto bg-gray-500/10 relative">
      <div className="panel-left">
        <div className="flex flex-col gap-4 p-2 mx-auto md:m-0 md:p-4 w-[380px] md:w-[400px] md:min-h-[300px] lg:w-[480px] lg:min-h-[400px]  text-center md:text-left">
          <h1 className="text-[32px] md:text-[38px] bg-red-500/10 md:w-[270px] lg:w-[340px] lg:text-[48px] font-bold md:text-left leading-[1.2]">
            Attract new high-intent customers
            <span className="text-red-500 mx-1">with Reddit Ads</span>
          </h1>
          <p className="text-sm text-gray-500">
            Get more high-intent customers with Reddit Ads.
          </p>
          <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
            <button className="bg-red-500 text-white border-2 border-red-500 px-3 py-1 md:px-4 md:py-2 rounded-full leading-1.5 h-10 text-[14px] md:text-[16px]">
              Speak with an expert
            </button>
            <button className="border-red-500 border-2 text-red-500 px-2 py-1 md:px-4 md:py-2 rounded-full leading-1.5 h-10">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="panel-right mx-auto mt-4 md:m-0 md:absolute md:top-0 md:right-4 w-[300px] h-[200px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
        <div className="w-full h-full bg-red-500/10">
        </div>
      </div>
    </div>
  </div>;
}