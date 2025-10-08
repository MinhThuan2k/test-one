import Link from 'next/link'
import { FormApplyNow } from './form'
import { COUNTRIES } from '@/constants/STEPS'
import { log } from 'console'

const AppPlyPage = ({ params }: { params: { country: string } }) => {
  const countrySlug = params.country
  const country = COUNTRIES.find(
    (c) => c.label && c.label.toLowerCase().replace(/\s+/g, '-') === countrySlug
  )
  log(country)
  return (
    <div className="container font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="w-full flex flex-col items-center justify-center  row-start-2 sm:items-start">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="flex flex-col gap-8 px-10">
            <h1 className="text-3xl font-bold text-(--text-title)">
              {`Apply now for your ${country?.label.toString()} Tourist eVisa `}
            </h1>
            <h4 className="text-[15px] font-medium text-(--text-title)">
              {`A visa is required to travel to ${country?.label.toString()} but iVisa cannot provide it
              at this time.`}
            </h4>
            <FormApplyNow country={country?.value ?? ''} />
          </div>
          <div className="flex-1">
            <Link
              href={'/'}
              className="block w-full py-4 rounded-2xl bg-gradient-to-r from-[#25CBD6] to-[#00EE8A] hover:from-white hover:to-white hover:border-2 hover:border-black font-semibold text-center"
            >
              Check Other Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppPlyPage
