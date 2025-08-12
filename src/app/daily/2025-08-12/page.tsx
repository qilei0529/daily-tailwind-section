import { Button } from "@/components/ui/button";

export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-08-12</div>

    <div className="max-w-[980px] relative mx-auto bg-gray-500/10 relative p-6">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="w-full md:w-[392px] h-[400px] bg-gray-500/10">
          </div>
          <div className="w-full md:w-[392px] relative overflow-x-auto">
            <div style={{ width: 540 }} className="flex flex-row gap-4 h-[120px] bg-gray-500/10">
              <div className="w-[120px] h-[120px] bg-red-500/10">
              </div>
              <div className="w-[120px] h-[120px] bg-red-500/10">
              </div>
              <div className="w-[120px] h-[120px] bg-red-500/10">
              </div>
              <div className="w-[120px] h-[120px] bg-red-500/10">
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex-1 bg-white">
          <div className="flex flex-col gap-2 md:gap-4 p-4 h-full">
            <div className="text-xs">
              + Chair
            </div>
            <div className="text-2xl font-bold">
              NSC
            </div>
            <div className="text-md">
              Louge Chair L10
            </div>
            <div className="text-sm">
              The NSC Lounge Chair L10 blends industrial elegance with everyday comfort. Featuring a matte black frame and high-resilience foam cushioning, the L10 offers firm support without compromising on
              softness
            </div>

            <div className="flex-1 min-h-[40px]">

            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row text-sm border-b border-gray-500/10 pb-2">
                <strong>Structure</strong>
                <div className="flex-1"></div>
                <div>
                  Powder-coated steel frame
                </div>
              </div>

              <div className="flex flex-row text-sm border-b border-gray-500/10 pb-2">
                <strong>Suspension</strong>
                <div className="flex-1"></div>
                <div>
                  Elastic webbing base for flexible
                </div>
              </div>

              <div className="flex flex-row text-sm border-b border-gray-500/10 pb-2">
                <strong>Seat & Backrest</strong>
                <div className="flex-1"></div>
                <div>
                  High-resilience foam with fabric upholstery
                </div>
              </div>

            </div>
            <div className="flex flex-row gap-2 mt-4">
              <Button className="rounded-full shadow-none border-none min-w-[180px] text-[12px] h-[32px]" size="sm" variant="outline">Add to Cart</Button>
              <Button className="rounded-full min-w-[180px] text-[12px] h-[32px]" size="sm">Buy Now <span className="text-[14px]">$1,299</span></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-[980px] relative mx-auto bg-gray-500/10 relative p-6 mt-4 h-[600px]"></div>

  </div>
}