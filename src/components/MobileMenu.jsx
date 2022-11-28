import { XMarkIcon } from '@heroicons/react/24/outline'
import { navLinks } from '../constants'

const MobileMenu = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-white/95 transition-all duration-500 ease-in z-50 ${
        open ? 'mobile-open' : 'mobile-close'
      }`}
    >
      <button onClick={closeMenu} className='absolute top-6 right-14'>
        <XMarkIcon className='h-10' />
      </button>
      <nav className='flex h-screen justify-center items-center'>
        <ul className='flex flex-col gap-8 text-center text-2xl'>
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                className={`${link.className} text-2xl`}
                href={`#${link.id}`}
                onClick={closeMenu}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default MobileMenu
