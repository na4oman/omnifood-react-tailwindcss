import logo from '../assets/omnifood-logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { navLinks } from '../constants'

const Header = ({ isVisible }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`flex items-center justify-between px-10 ${
          isVisible ? 'sticky-nav' : 'bg-tints'
        }`}
      >
        <a href='#top'>
          <img src={logo} alt='Omnifood logo' className='h-4 lg:h-5' />
        </a>

        <nav className='flex h-24 items-center'>
          <ul className='hidden lg:inline-flex items-center gap-10'>
            {navLinks.map(nav => (
              <li key={nav.id}>
                <a className={nav.className} href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <button className='lg:hidden' onClick={() => setOpen(true)}>
            <Bars3Icon className='h-10' />
          </button>
        </nav>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  )
}
export default Header
