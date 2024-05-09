/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { useState } from 'react'
import { signInServer } from '../server/authsFunctions'
import { redirect } from 'next/navigation'

export default function Page () {
  const [error, setError] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        className="flex flex-col gap-4"
        action={ async (formData) => {
          const credentials = Object.fromEntries(formData)
          const errorState = await signInServer(credentials)
          console.log('* Error: ', errorState.error)
          if (errorState.error === 'CredentialsSignin') {
            // Auth js lanza este error al no encontrar el usuario
            setError(true)
          } else if (errorState.error === 'Error') {
            // Auth js lanza este error al encontrar el usuario
            redirect('/dashboard')
          } else {
            // Caso para errores desconocidos
            console.log('* Error al iniciar sesión: ', errorState.error)
            setError(true)
          }
        }}
      >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" className= "text-black" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className= "text-black" id="password" />
        <button type="submit">Inicia sesión</button>
        {
        error && <p className="text-red-500">Error al iniciar sesión</p>
        }
      </form>
    </main>
  )
}
