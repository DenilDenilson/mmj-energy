// import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import NavIntern from '@/components/NavIntern'
import dynamic from 'next/dynamic'
// import Image from 'next/image'

const DashboardAbly = dynamic(
  async () => await import('@/components/dashboardAbly'),
  { ssr: false },
)
const VoltageProvider = dynamic(
  async () => await import('@/components/VoltageProvider'),
  { ssr: false },
)
// const Leds = dynamic(async () => await import('@/components/data/Leds'), {
//   ssr: false,
// })
// const Control = dynamic(async () => await import('@/components/data/Control'), {
//   ssr: false,
// })

export default function Page() {
  return (
    <main className="overflow-y-hidden bg-neutral-300">
      <NavBar />
      <div className='h-screen overflow-y-auto'>
        <NavIntern />
        <DashboardAbly>
          <section className="p-4 ml-14 md:ml-64 pt-20">
            <h1 className='font-semibold text-xl'>Indicadores principales para la señal</h1>
            <h3 className='font-medium text-gray-500 mb-2'>Para una instalación monofásica</h3>
            <VoltageProvider />
            {/* <section className="flex flex-col items-center gap-1 lg:flex-row">
              <Leds />
              <Control />
            </section> */}
          </section>
          {/* <MessageReceived /> */}
        </DashboardAbly>
      </div>
      {/* <Footer /> */}
    </main>
  )
}
