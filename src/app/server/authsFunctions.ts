'use server'

import { signIn, signOut } from '@/auth'

export async function getUser (credentials: Partial<Record<'username' | 'password', unknown>>) {
  if (credentials.username === 'demo' && credentials.password === 'secure') {
    console.log('Usuario correcto')
    return {
      id: credentials.username,
      name: credentials.username
    }
  }
  console.log('Usuario incorrecto')
  return null
}

export async function signOutServer () {
  await signOut()
}

export async function signInServer (credentials: Partial<Record<'username' | 'password', unknown>>): Promise<{ error: string }> {
  console.log('Iniciando sesión...')
  try {
    await signIn('credentials', credentials)
    return { error: 'false' }
  } catch (error: Error | any) {
    // Siempre entra acá ¿?
    if (error.name === 'CredentialsSignin') {
      console.log('Error al iniciar sesión <3')
      return { error: 'CredentialsSignin' }
    } else if (error.name === 'Error') {
      console.log('Inicio de sesión correcto <3')
      return { error: 'Error' }
    } else {
      console.log('Error al iniciar sesión <3: ', error)
      return { error: 'true' }
    }
  }
}
