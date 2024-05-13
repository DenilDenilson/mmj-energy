import { auth } from '@/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home () {
  const session = await auth()
  if (session === null) {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">
          Bienvenido al controlador de PLC IoT Industrial
        </h1>
        <p className="text-center">
          Para acceder al dashboard, inicia sesión
        </p>

      <Link className='border-2 border-black hover:bg-slate-100 cursor-pointer px-8 py-2' href="/api/auth/signin">Inicia sesión</Link>
    </main>
    )
  } else {
    return redirect('/dashboard')
  }
}
