import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Bars from '@/components/data/Bars'
import Lines from '@/components/data/Lines'
// import dynamic from 'next/dynamic'

// const DashboardAbly = dynamic(async () => await import('@/components/dashboardAbly'), { ssr: false })
// const MessageReceived = dynamic(async () => await import('@/components/MessageReceived'), { ssr: false })

export default function Page () {
  return (
    <main className="bg-slate-200 min-h-screen">
      <NavBar />
      <section className='px-4 py-8 flex items-center justify-center flex-wrap gap-4'>
        <Bars title='CO3' />
        <Lines title='Temperatura' />
        <Lines title='Humedad Relativa' />
        <Bars title='Gas' />
        <Lines title='Altitud' />
        <Lines title='Presión Atmosférica' />
      </section>
      {/* <DashboardAbly> */}
        {/* <MessageReceived />
      </DashboardAbly> */}
      <Footer />
    </main>
  )
}
