import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import dynamic from 'next/dynamic'

const DashboardAbly = dynamic(async () => await import('@/components/dashboardAbly'), { ssr: false })
const VoltageProvider = dynamic(async () => await import('@/components/VoltageProvider'), { ssr: false })
const Leds = dynamic(async () => await import('@/components/data/Leds'), { ssr: false })
const Control = dynamic(async () => await import('@/components/data/Control'), { ssr: false })

export default function Page () {
  return (
    <main className="bg-slate-200 min-h-screen">
      <NavBar />
      <DashboardAbly>
        <section className='p-4 grid grid-rows-[656px_256px] grid-cols-1 gap-2'>
          <VoltageProvider />
          <section className="flex items-center gap-1">
            <Leds />
            <Control />
          </section>
        </section>
        {/* <MessageReceived /> */}
      </DashboardAbly>
      <Footer />
    </main>
  )
}
