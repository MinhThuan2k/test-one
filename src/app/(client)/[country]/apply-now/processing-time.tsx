import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'

export default function ProcessingTime() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
      <div className="flex flex-col gap-8 px-0 lg:px-14">
        <h1 className="text-xl lg:text-2xl font-bold text-(--text-title)">
          Passport details
        </h1>
        <div className="bg-gray-100 rounded-2xl border border-gray-200">
          <div
            className={cn('flex justify-between items-start gap-2 px-6 pt-4')}
          >
            <h4 className="text-[16px] font-semibold text-(--text-title) flex-1 break-words">
              Standard
            </h4>
          </div>
          <div
            className={cn(
              'flex justify-between items-start gap-2 px-6 py-2 pb-4'
            )}
          >
            <h4 className="text-[15px] font-semibold text-(--text-sub-title) flex-1 break-words">
              24 hours processing
            </h4>
            <h5 className="text-[15px] font-semibold text-(--text-sub-title) whitespace-nowrap">
              +₫0.00
            </h5>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl border border-gray-200">
          <div
            className={cn('flex justify-between items-start gap-2 px-6 pt-4')}
          >
            <h4 className="text-[16px] font-semibold text-(--text-title) flex-1 break-words">
              Rush
            </h4>
          </div>
          <div
            className={cn(
              'flex justify-between items-start gap-2 px-6 py-2 pb-4'
            )}
          >
            <h4 className="text-[15px] font-semibold text-(--text-sub-title) flex-1 break-words">
              4 hours processing
            </h4>
            <h5 className="text-[15px] font-semibold text-(--text-sub-title) whitespace-nowrap">
              +₫834,432.00
            </h5>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl border border-gray-200">
          <div
            className={cn('flex justify-between items-start gap-2 px-6 pt-4')}
          >
            <h4 className="text-[16px] font-semibold text-(--text-title) flex-1 break-words">
              Super Rush
            </h4>
          </div>
          <div
            className={cn(
              'flex justify-between items-start gap-2 px-6 py-2 pb-4'
            )}
          >
            <h4 className="text-[15px] font-semibold text-(--text-sub-title) flex-1 break-words">
              30 minutes processing
            </h4>
            <h5 className="text-[15px] font-semibold text-(--text-sub-title) whitespace-nowrap">
              +₫1,947,008.00
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-gray-100 rounded-2xl border border-gray-200">
          <div
            className={cn('flex justify-between items-start gap-2 px-6 pt-4')}
          >
            <h4 className="text-[16px] font-semibold text-(--text-title) flex-1 break-words">
              Singapore SG Arrival Card + Health Declaration
            </h4>

            <h5 className="text-[13px] font-normal text-(--text-sub-title) whitespace-nowrap">
              3 travelers
            </h5>
          </div>
          <div
            className={cn(
              'flex justify-between items-start gap-2 px-6 py-2 pb-4'
            )}
          >
            <h4 className="text-[15px] font-normal text-(--text-sub-title) flex-1 break-words">
              Standard, 24 hours
            </h4>
            <h5 className="text-[15px] font-normal text-(--text-sub-title) whitespace-nowrap">
              ₫ 5506416.00
            </h5>
          </div>
        </div>
        <div className="w-full">
          <div
            className={cn('flex justify-between items-start gap-2 px-6 pt-5')}
          >
            <h4 className="text-lg font-semibold text-(--text-title) flex-1">
              Total
            </h4>
            <h4 className="text-lg font-semibold text-(--text-title) flex-1 whitespace-nowrap">
              Calculated at checkout
            </h4>
          </div>
          <div className="px-6">
            <h5 className="text-[13px] font-normal text-(--text-sub-title) whitespace-nowrap">
              For all travelers
            </h5>
          </div>
        </div>
        <div>
          <button
            // onClick={goToStep}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#25CBD6] to-[#00EE8A]
                  border-2 border-transparent hover:border-black hover:from-white hover:to-white
                  font-semibold text-center transition-all duration-200 cursor-pointer"
            type="submit"
          >
            Continue to Payment
          </button>
        </div>
        <div>
          <button
            // onClick={goToStep}
            className="flex justify-start items-center text-blue-600 text-lg w-full py-2 rounded-2xl font-bold text-center cursor-pointer"
          >
            <ArrowLeft />
            <span className="pl-2">Previous</span>
          </button>
        </div>
      </div>
    </div>
  )
}
