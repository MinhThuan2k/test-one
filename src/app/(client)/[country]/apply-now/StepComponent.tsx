'use client'

import { useEffect, useState } from 'react'
import { FormApplyNow } from './form'
import ValidForm from './valid-form'
import InfoForm from './info-form'
import Passport from './passport'
import ProcessingTime from './processing-time'

type Step = 'step-1' | 'step-2' | 'step-3' | 'step-3b' | 'step-4'

const steps: Step[] = ['step-1', 'step-2', 'step-3', 'step-3b', 'step-4']

export type Traveler = {
  firstName: string
  lastName: string
  email?: string
  month?: string
  day?: string
  year?: string
}

export type Passport = {
  nationality: string
  passport_num: string
  is_passport_late: boolean
  month?: string
  day?: string
  year?: string
}

export type FormData = {
  travelers: Traveler[]
  passport: Passport[]
}

export default function StepComponent({ country }: { country: string }) {
  const [formData, setFormData] = useState<FormData>({
    travelers: [],
    passport: []
  })
  const [currentStep, setCurrentStep] = useState<Step>('step-1')

  const updateStepFromHash = () => {
    const hashStep = window.location.hash.replace('#step=', '') as Step
    if (hashStep && steps.includes(hashStep)) {
      setCurrentStep(hashStep)
    }
  }

  useEffect(() => {
    updateStepFromHash()
    window.addEventListener('hashchange', updateStepFromHash)
    return () => {
      window.removeEventListener('hashchange', updateStepFromHash)
    }
  }, [])

  useEffect(() => {
    window.location.hash = `step=${currentStep}`
  }, [currentStep])

  const goToStep = (step: Step) => {
    if (steps.includes(step)) setCurrentStep(step)
  }

  return (
    <>
      {currentStep === 'step-1' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div className="flex flex-col gap-8 px-0 lg:px-14">
            <h1 className="text-xl lg:text-2xl font-bold text-(--text-title)">
              Apply now for your {country} Tourist eVisa
            </h1>
            <h4 className="text-[15px] font-medium text-(--text-title)">
              A visa is required to travel to {country}, but iVisa cannot
              provide it at this time.
            </h4>

            <FormApplyNow country={country} />
          </div>
          <ValidForm goToStep={() => goToStep('step-2')} />
        </div>
      )}
      {currentStep === 'step-2' && (
        <InfoForm
          goToStep={() => goToStep('step-3')}
          goPreStep={() => goToStep('step-1')}
          setFormData={setFormData}
        />
      )}
      {currentStep === 'step-3' && (
        <Passport
          goToStep={() => goToStep('step-4')}
          goPrevStep={() => goToStep('step-3')}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 'step-4' && <ProcessingTime />}
    </>
  )
}
