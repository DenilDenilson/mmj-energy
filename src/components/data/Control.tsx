'use client'

import { useChannel } from 'ably/react'
import dynamic from 'next/dynamic'

const Motor = dynamic(async () => await import('./Motor'), { ssr: false })
const Contactor = dynamic(async () => await import('./Contactor'), { ssr: false })

export default function Control () {
  const { channel } = useChannel('mmj-plc/btns')

  return (
    <section className='flex h-full w-full items-center bg-slate-100 shadow-lg shadow-slate-400 '>
      <Contactor channel={channel} />
      <Motor channel={channel} />
    </section>
  )
}
