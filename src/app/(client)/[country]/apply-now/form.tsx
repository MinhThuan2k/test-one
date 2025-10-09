'use client'
import { Dropdown, NumberInput } from '@/components/ui'
import { DATA_VIRTUAL } from '@/constants/CONFIG_APPLY'
import { NATIONALITIES } from '@/constants/STEPS'
import { useVisaStore } from '@/store/visaStore'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'

export function FormApplyNow({ country }: { country: string }) {
  const {
    nationality,
    config: configStore,
    setNationality,
    setConfig: setConfigStore
  } = useVisaStore()
  const [ready, setReady] = useState(false)

  const [national, setNational] = React.useState<any>(null)
  const [listConfig, setListConfig] = React.useState<any[]>([])
  const [config, setConfig] = React.useState(null)
  const data_config_by_country = useMemo(() => DATA_VIRTUAL[country] || [], [])

  const onChangeConfig = (value: any) => {
    setConfig(value)
    setConfigStore(value)
  }
  const onChangeNational = (value: any) => {
    setNational(value)
    setNationality(value)
  }

  const defaultValue = useMemo(
    () => NATIONALITIES.find((item) => item.value === nationality?.value),
    [nationality]
  )

  useEffect(() => {
    setConfigStore(listConfig?.[0])
  }, [listConfig])

  useEffect(() => {
    if (nationality) {
      console.log(
        data_config_by_country?.filter((item) =>
          item?.eligible_nationalities.includes(nationality?.value)
        )
      )

      setListConfig(
        data_config_by_country?.filter((item) =>
          item?.eligible_nationalities.includes(nationality?.value)
        ) || []
      )
    }
  }, [nationality])

  useEffect(() => {
    const unsub = useVisaStore.persist.onFinishHydration(() => setReady(true))
    if (useVisaStore.persist.hasHydrated()) setReady(true)
    return () => unsub()
  }, [])

  if (!ready) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <label className="block text-sm font-medium mb-1 text-(--text-title)">
          What's your nationality?
        </label>
        <Dropdown
          data={NATIONALITIES}
          defaultValue={national ?? defaultValue}
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
      {listConfig.length > 0 && (
        <div className="w-full flex flex-col gap-2">
          <label className="font-medium text-(--text-title)">
            Applying for
          </label>
          <Dropdown
            data={listConfig}
            defaultValue={config ?? listConfig?.[0]}
            onChange={onChangeConfig}
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
      )}
      <div className="w-full flex flex-col gap-2">
        <label className="font-medium text-(--text-title)">
          Number of applicants
        </label>
        <NumberInput />
      </div>
    </div>
  )
}
