import { Dropdown } from '@/components/ui'
import { Input } from '@/components/ui/Input'
import { months } from '@/constants/STEPS'
import { cn } from '@/lib/utils'
import { ArrowLeft, ChevronDown, Plus, Trash } from 'lucide-react'
import React from 'react'
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext
} from 'react-hook-form'
import { FormData } from './StepComponent'

export default function InfoForm({
  goToStep,
  goPreStep,
  setFormData
}: {
  goToStep?: () => void
  goPreStep?: () => void
  setFormData?: (data: any) => void
}) {
  const methods = useForm<FormData>({
    defaultValues: {
      travelers: [
        {
          firstName: '',
          lastName: '',
          email: '',
          day: String(new Date().getDate()).padStart(2, '0'),
          month: String(new Date().getMonth() + 1).padStart(2, '0'),
          year: String(new Date().getFullYear())
        }
      ]
    }
  })
  const { handleSubmit, control } = methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'travelers'
  })

  const { reset, watch } = methods
  const travelers = watch('travelers')

  React.useEffect(() => {
    if (travelers?.length) {
      const today = new Date()
      reset({
        travelers,
        passport: Array.from({ length: travelers.length }, () => ({
          nationality: '',
          passport_num: '',
          day: String(today.getDate()).padStart(2, '0'),
          month: String(today.getMonth() + 1).padStart(2, '0'),
          year: String(today.getFullYear())
        }))
      })
    }
  }, [travelers?.length, reset])

  const onSubmit = (data: any) => {
    console.log('✅ Toàn bộ dữ liệu travelers:', data)
    goToStep?.()
    setFormData?.({ ...data })
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="flex flex-col gap-8 px-0 lg:px-14">
            <h1 className="text-xl lg:text-2xl font-bold text-(--text-title)">
              Your personal details
            </h1>
            <h4 className="text-[15px] font-medium text-(--text-title)">
              Enter the details exactly as they appear on your passport.
            </h4>
            <div className="flex flex-col gap-3">
              {fields.map((field, index) => (
                <InfoComponent
                  key={field.id}
                  number={index + 1}
                  index={index}
                  remove={remove}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                const today = new Date()
                append({
                  firstName: '',
                  lastName: '',
                  email: '',
                  day: String(today.getDate()).padStart(2, '0'),
                  month: String(today.getMonth() + 1).padStart(2, '0'),
                  year: String(today.getFullYear())
                })
              }}
              className="flex justify-center items-center w-1/2 py-3 rounded-2xl bg-gradient-to-r from-[#25CBD6] to-[#00EE8A]
                hover:from-white hover:to-white hover:border-2 hover:border-black
                font-semibold text-center transition-all duration-200"
            >
              <Plus />
              Add another traveler
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-gray-100 rounded-2xl border border-gray-200">
              <div
                className={cn(
                  'flex justify-between items-start gap-2 px-6 pt-4'
                )}
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
                className={cn(
                  'flex justify-between items-start gap-2 px-6 pt-5'
                )}
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
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#25CBD6] to-[#00EE8A]
                  border-2 border-transparent hover:border-black hover:from-white hover:to-white
                  font-semibold text-center transition-all duration-200 cursor-pointer"
                type="submit"
              >
                Save and continue
              </button>
            </div>
            <div>
              <button
                onClick={goPreStep}
                className="flex justify-start items-center text-blue-600 text-lg w-full py-2 rounded-2xl font-bold text-center cursor-pointer"
              >
                <ArrowLeft />
                <span className="pl-2">Previous</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

type InfoProps = { number: number; index: number; remove: (i: number) => void }

export function InfoComponent({ number, index, remove }: InfoProps) {
  const [open, setOpen] = React.useState(false)
  const {
    register,
    setValue,
    control,
    formState: { errors }
  } = useFormContext<FormData>()

  return (
    <div className="bg-gray-100 rounded-2xl border border-gray-200">
      <div
        className={cn(
          'flex justify-between px-8 py-5 cursor-pointer',
          open && 'border-b border-gray-200'
        )}
        onClick={() => setOpen(!open)}
      >
        <h1 className="text-xl font-bold text-(--text-title)">
          Traveler #{number}
        </h1>
        <ChevronDown
          className={cn('transition-transform', open && 'rotate-180')}
        />
      </div>

      {open && (
        <div className="px-8 py-5 bg-white rounded-bl-2xl rounded-br-2xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                First and middle name
              </label>
              <Input
                placeholder="Enter your name"
                {...register(`travelers.${index}.firstName`, {
                  required: 'First name is required'
                })}
              />
              {errors.travelers?.[index]?.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.travelers[index].firstName?.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Last name</label>
              <Input
                placeholder="Last name"
                {...register(`travelers.${index}.lastName`, {
                  required: 'Last name is required'
                })}
              />
              {errors.travelers?.[index]?.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.travelers[index].lastName?.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Date of birth</label>
              <div className="flex gap-3">
                <Controller
                  name={`travelers.${index}.day`}
                  control={control}
                  rules={{ required: 'Day is required' }}
                  render={({ field }) => (
                    <Dropdown
                      data={Array.from({ length: 31 }, (_, i) => {
                        const d = (i + 1).toString().padStart(2, '0')
                        return { value: d, label: d }
                      })}
                      onChange={(val: any) => field.onChange(val.value)}
                      title={field.value}
                      className="max-h-10"
                      classNameBtn="hover:border-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-[#6a7282]/30"
                    />
                  )}
                />
                <Controller
                  name={`travelers.${index}.month`}
                  control={control}
                  rules={{ required: 'Month is required' }}
                  render={({ field }) => (
                    <Dropdown
                      data={months}
                      onChange={(val: any) =>
                        setValue(`travelers.${index}.month`, val.value)
                      }
                      title={field.value}
                      className="max-h-10"
                      classNameBtn="hover:border-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-[#6a7282]/30"
                    />
                  )}
                />
                <Controller
                  name={`travelers.${index}.year`}
                  control={control}
                  rules={{ required: 'Year is required' }}
                  render={({ field }) => (
                    <Dropdown
                      data={Array.from(
                        { length: new Date().getFullYear() - 2000 + 1 },
                        (_, i) => {
                          const year = (2000 + i).toString()
                          return { value: year, label: year }
                        }
                      )}
                      title={field.value}
                      onChange={(val: any) => field.onChange(val.value)}
                      className="max-h-10"
                      classNameBtn="hover:border-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-[#6a7282]/30"
                    />
                  )}
                />
              </div>
            </div>

            {number === 1 && (
              <>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Email address
                  </label>
                  <Input
                    placeholder="Email address"
                    {...register(`travelers.${index}.email`, {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email format'
                      }
                    })}
                  />
                  {errors.travelers?.[index]?.email && (
                    <p className="text-red-500 text-sm">
                      {errors.travelers[index].email?.message as string}
                    </p>
                  )}
                </div>
                <h4 className="text-[14px] font-light text-(--text-title)">
                  Your approved Singapore SG Arrival Card + Health Declaration
                  will be sent to this email address.
                </h4>
                <div className="flex gap-3">
                  <label className="block text-sm font-normal mb-1 text-(--text-title)">
                    <input type="checkbox" />
                    <span className="ml-3">
                      I want to receive iVisa's updates, product launches and
                      personalized offers. I can opt out anytime. Terms and
                      Privacy Policy apply.
                    </span>
                  </label>
                </div>
              </>
            )}

            {number !== 1 && (
              <button
                type="button"
                className="w-full py-3 flex items-center justify-center gap-2 border-t border-gray-200 font-semibold text-blue-600"
                onClick={() => remove(index)}
              >
                <Trash />
                <span>Remove this traveler</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
