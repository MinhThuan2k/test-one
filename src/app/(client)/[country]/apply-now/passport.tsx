import { Dropdown } from '@/components/ui'
import { Input } from '@/components/ui/Input'
import { months, NATIONALITIES } from '@/constants/STEPS'
import { cn } from '@/lib/utils'
import { ArrowLeft, ChevronDown, Plus, Trash } from 'lucide-react'
import React, { useState } from 'react'
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext
} from 'react-hook-form'
import { FormData } from './StepComponent'
import Image from 'next/image'

export default function Passport({
  goToStep,
  goPrevStep,
  formData,
  setFormData
}: {
  goToStep?: () => void
  goPrevStep?: () => void
  formData: FormData
  setFormData?: (data: any) => void
}) {
  const methods = useForm<FormData>({
    defaultValues: {
      ...formData,
      passport: Array.from({ length: formData.travelers.length }, (_, i) => {
        const today = new Date()
        return {
          nationality: '',
          passport_num: '',
          day: String(today.getDate()).padStart(2, '0'),
          month: String(today.getMonth() + 1).padStart(2, '0'),
          year: String(today.getFullYear())
        }
      })
    }
  })

  const { handleSubmit, control } = methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'passport'
  })

  const onSubmit = (data: any) => {
    setFormData?.(data || [])
    console.log('✅ Toàn bộ dữ liệu travelers:', data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="flex flex-col gap-8 px-0 lg:px-14">
            <h1 className="text-xl lg:text-2xl font-bold text-(--text-title)">
              Passport details
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
                onClick={goToStep}
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
                onClick={goPrevStep}
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
  const [isCheck, setIsCheck] = useState(false)

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
            <label className="text-sm font-medium">
              Nationality on passport
            </label>
            <Controller
              name={`passport.${index}.nationality`}
              control={control}
              rules={{ required: 'Nationality is required' }}
              render={({ field }) => (
                <Dropdown
                  data={NATIONALITIES}
                  onChange={(val: any) => field.onChange(val.value)}
                  defaultValue={NATIONALITIES[0]}
                  className="max-h-10"
                  classNameBtn="hover:border-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-[#6a7282]/30"
                  renderSelected={(item) =>
                    item ? (
                      <div className="flex items-center gap-2 text-(--text-title)">
                        <Image
                          src={item.image}
                          alt={item.value}
                          width={20}
                          height={20}
                        />
                        <span className="text-[14px] font-medium text-(--text-title)">
                          {item.label}
                        </span>
                      </div>
                    ) : (
                      <span>Select a country</span>
                    )
                  }
                  renderItem={(item) => (
                    <div className="flex items-center gap-2 text-(--text-title)">
                      <Image
                        src={item.image}
                        alt={item.value}
                        width={20}
                        height={20}
                      />
                      <span className="text-[14px] font-medium text-(--text-title)">
                        {item.label}
                      </span>
                    </div>
                  )}
                />
              )}
            />
            <div className="flex gap-3 mt-5">
              <label className="block text-sm font-normal mb-1 text-(--text-title)">
                <input type="checkbox" onChange={() => setIsCheck(!isCheck)} />
                <span className="ml-3 text-sm font-medium">
                  Add passport details later
                </span>
              </label>
            </div>
            {!isCheck ? (
              <>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Passport number
                  </label>
                  <Input
                    placeholder="Passport number"
                    type="number"
                    {...register(`passport.${index}.passport_num`, {
                      required: 'Passport number is required'
                    })}
                  />
                  {errors.passport?.[index]?.passport_num && (
                    <p className="text-red-500 text-sm">
                      {errors.passport[index].passport_num?.message as string}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Passport expiration date
                  </label>
                  <div className="flex gap-3">
                    <Controller
                      name={`passport.${index}.day`}
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
                      name={`passport.${index}.month`}
                      control={control}
                      rules={{ required: 'Month is required' }}
                      render={({ field }) => (
                        <Dropdown
                          data={months}
                          onChange={(val: any) =>
                            setValue(`passport.${index}.month`, val.value)
                          }
                          title={field.value}
                          className="max-h-10"
                          classNameBtn="hover:border-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-[#6a7282]/30"
                        />
                      )}
                    />
                    <Controller
                      name={`passport.${index}.year`}
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
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
