'use client'
import { Dropdown, NumberInput } from '@/components/ui'
import { DATA_VIRTUAL } from '@/constants/CONFIG_APPLY'
import { COUNTRIES } from '@/constants/STEPS'
import Image from 'next/image'
import React from 'react'

export function FormApplyNow({ country }: { country: string }) {
  const data_config = DATA_VIRTUAL[country] ?? []
  const [national, setNational] = React.useState(null)
  const [config, setConfig] = React.useState(null)
  const onChangeConfig = (value: any) => {
    setConfig(value)
  }
  const onChangeNational = (value: any) => {
    setNational(value.value)
  }
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium mb-1 text-(--text-title)">
          What's your nationality?
        </label>
        <Dropdown
          data={COUNTRIES}
          defaultValue={country}
          onChange={onChangeNational}
          renderSelected={(item) =>
            item ? (
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
            ) : (
              <span>Select a country</span>
            )
          }
          renderItem={(item) => (
            <div className="flex items-center gap-2">
              <Image src={item.image} alt={item.value} width={20} height={20} />
              <span className="text-[14px] font-medium text-(--text-title)">
                {item.label}
              </span>
            </div>
          )}
        />
        <h4 className="text-[14px] font-light text-(--text-title)">
          Ensure you select the nationality of the passport you'll be traveling
          with.
        </h4>
      </div>
      <div className="w-full flex flex-col">
        <label className="font-medium text-(--text-title)">Applying for</label>
        <Dropdown
          data={data_config}
          defaultValue={data_config?.[0].value}
          onChange={onChangeConfig}
          selectedItemCallback={(item) =>
            data_config.find((d) => d.value === item)
          }
          renderSelected={(item) => {
            return item ? (
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-medium text-(--text-title)">
                  {item.name}
                </span>
              </div>
            ) : (
              <span>Select a country</span>
            )
          }}
          renderItem={(item) => (
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-medium text-(--text-title)">
                {item.name}
              </span>
            </div>
          )}
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="font-medium text-(--text-title)">
          Number of applicants
        </label>
        <NumberInput />
      </div>
    </div>
  )
}
