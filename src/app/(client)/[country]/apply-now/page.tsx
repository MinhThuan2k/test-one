import Link from 'next/link'
import { FormApplyNow } from './form'
import { COUNTRIES } from '@/constants/STEPS'
import ValidForm from './valid-form'
import StepComponent from './StepComponent'

export default async function ApplyNowPage({
  params
}: {
  params: Promise<{ country: string }>
}) {
  const { country: countrySlug } = await params
  const country = COUNTRIES.find(
    (c) => c.label && c.label.toLowerCase().replace(/\s+/g, '-') === countrySlug
  )

  return (
    <div className="w-full flex font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <div className="container flex flex-col items-center justify-center row-start-2 px-0 lg:px-15">
        <StepComponent country={country?.value ?? ''} />
      </div>
    </div>
  )
}
