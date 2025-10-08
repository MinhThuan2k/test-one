'use client'
import { useVisaStore } from '@/store/visaStore'

export default function ValidForm({ country }: { country: string }) {
  const { config, destination, setConfig } = useVisaStore()
  if (!config) {
    return null
  }
  return (
    <div className="flex flex-col w-full rounded-2xl border border-gray-300 text-(--text-title)">
      <h2 className="text-md lg:text-lg pt-4 pb-2 border-b border-b-gray-200 text-center font-medium">
        {`${destination?.label} Tourist eVisa + eArrival Card`}
      </h2>
      <div className="flex-1 flex flex-col gap-5 p-5">
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-days-icon lucide-calendar-days"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-[12px] font-normal text-(--text-sub-title)">
              Valid for
            </h3>
            <h3 className="text-[15px] font-normal">
              {config?.validity?.visa_validity}
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plane-landing-icon lucide-plane-landing"
            >
              <path d="M2 22h20" />
              <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
            </svg>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-[12px] font-normal text-(--text-sub-title)">
              Valid for
            </h3>
            <h3 className="text-[15px] font-normal">
              {config?.validity?.num_entries}
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-check-icon lucide-calendar-check"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-[12px] font-normal text-(--text-sub-title)">
              Valid for
            </h3>
            <h3 className="text-[15px] font-normal">
              {config?.validity?.max_stay}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
