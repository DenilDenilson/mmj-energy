'use client'

import { usePathname } from 'next/navigation'

export default function NavIntern() {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col justify-between items-center pb-24 pt-12 bg-gray-100 mr-1 max-h-svh'>
    {/* <Image src="/Images/MMJ-Branding.png" alt="Logo" width={128} height={40} /> */}
    <p>MMJ SMART ELECTRONICS</p>
    <ul className='font-semibold text-2xl flex flex-col gap-4'>
      <a href="/dashboard" className={`${pathname === '/dashboard' ? 'text-[#b52016] font-extrabold' : ''}`}>Home</a>
      <a href="/dashboard/corriente" className={`${pathname === '/dashboard/corriente' ? 'text-[#b52016] font-extrabold' : ''}`}>Corriente</a>
      <a href="/dashboard/tension" className={`${pathname === '/dashboard/tension' ? 'text-[#b52016] font-extrabold' : ''}`}>Tensión</a>
      <a href="/dashboard/potencia" className={`${pathname === '/dashboard/potencia' ? 'text-[#b52016] font-extrabold' : ''}`}>Potencia</a>
    </ul>
    <footer className='text-center text-sm'>
      Software desarrollado por <br></br> <strong>MMJ Smart Electronics</strong>
    </footer>
  </nav>
  )
}
