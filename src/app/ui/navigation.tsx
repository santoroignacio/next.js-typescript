'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  let activeLink = false

  const regex = new RegExp(`${pathname}$`)
  if (regex.test(href)) {
    activeLink = true
  }
  return (
    <Link
      href={href}
      className='text-base inline-block text-gray-600 hover:text-gray-800'
    >
      {children}
    </Link>
  )
}

export default NavLink
