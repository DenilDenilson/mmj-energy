import dynamic from 'next/dynamic'

const DashboardAbly = dynamic(async () => await import('@/components/dashboardAbly'), { ssr: false })
const MessageReceived = dynamic(async () => await import('@/components/MessageReceived'), { ssr: false })

export default function Page () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        DAQ LORA PRIVADO
      </h1>
      <DashboardAbly>
        <MessageReceived />
      </DashboardAbly>
      <a href="/api/signout">Cerrar sesión</a>
    </main>
  )
}
