import { auth } from '@/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Home () {
  const session = await auth()
  if (session === null) {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-center">
          Bienvenido a Next Js, con Ably y Auth js
        </h1>
        <p className="text-center">
          Para continuar, inicia sesión.
        </p>

      <Link href="/api/auth/signin">Inicia sesión</Link>
    </main>
    )
  } else {
    return redirect('/dashboard')
  }
}
