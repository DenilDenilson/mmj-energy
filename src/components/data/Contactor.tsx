/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { type RealtimeChannel } from 'ably'

export default function Contactor({
  channel,
  isChecked,
}: {
  channel: RealtimeChannel
  isChecked: boolean
}) {
  const handleInputChange = () => {
    if (isChecked) {
      // turnOn()
      channel.publish({ data: 'contactor=off' })
    } else {
      // turnOff()
      channel.publish({ data: 'contactor=on' })
    }
  }

  return (
    <label className="inline-flex mb-4 xl:mb-0 cursor-pointer items-center xl:-rotate-90">
      <input
        id="contactor"
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={isChecked}
        onChange={handleInputChange}
      />
      <div className="peer relative h-16 w-48 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[8px] after:h-12 after:w-12 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-32 peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-32 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
    </label>
  )
}
