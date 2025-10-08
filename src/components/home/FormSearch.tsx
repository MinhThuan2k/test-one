'use client'

import Link from 'next/link'
import { Dropdown } from '../ui'
import { COUNTRIES, NATIONALITIES } from '@/constants/STEPS'
import { useEffect, useState } from 'react'
import slugify from 'slugify'
import Image from 'next/image'

export function FormSearch() {
  const [to, setTo] = useState<(typeof COUNTRIES)[number] | null>(null)
  const [national, setNational] = useState<
    (typeof NATIONALITIES)[number] | null
  >(null)
  const onChangeNational = (value: any) => {
    setNational(value)
  }
  const onChangeCountryTo = (value: any) => {
    setTo(value)
  }

  useEffect(() => {
    setTo(COUNTRIES?.[0])
    setNational(NATIONALITIES?.[0])
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 w-full items-end">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Quốc tịch</label>
          <Dropdown
            data={NATIONALITIES}
            onChange={onChangeNational}
            defaultValue={national?.value}
            renderSelected={(item) =>
              item ? (
                <div className="flex items-center gap-2 ">
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
              <div className="flex items-center gap-2">
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
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Điểm đến</label>
          <Dropdown
            data={COUNTRIES}
            onChange={onChangeCountryTo}
            defaultValue={to?.value}
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
        </div>
      </div>
      <div className="flex justify-center items-end">
        <Link
          href={`${slugify(to?.label.toString() ?? '', { lower: true })}/apply-now`}
          className="block text-xl w-full py-4 rounded-2xl bg-gradient-to-r from-[#25CBD6] to-[#00EE8A] hover:from-white hover:to-white hover:border-2 hover:border-black font-semibold text-center"
        >
          Get started!
        </Link>
      </div>
    </div>
  )
}
