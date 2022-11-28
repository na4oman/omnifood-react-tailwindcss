import logo from '../assets/omnifood-logo.png'
import { footerLinks, socialMedia } from '../constants/index.js'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer>
      <div className='text-[#666] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-y-16 gap-x-6 p-14'>
        <div className='flex flex-col gap-6'>
          <a href='/'>
            <img src={logo} alt='logo' className='h-4 lg:h-5' />
          </a>
          <ul className='flex mb-8'>
            {socialMedia.map(link => (
              <li
                key={link.id}
                style={{
                  color: 'currentcolor',
                  fontSize: '1.3rem',
                  marginRight: '2rem',
                }}
              >
                <a href='/'>{link.icon}</a>
              </li>
            ))}
          </ul>
          <p className='text-xs'>
            Copyright &copy; ${year} by Omnifood, Inc. All rights reserved.
            <span className='block'>
              Designed by{' '}
              <a
                href='https://codingheroes.io/'
                target='_blank'
                rel='noreferrer'
                className='text-shades inline-block hover:rotate-[-2deg] hover:scale-110 transition-all duration-200 z-10 hover:bg-tints'
              >
                Jonas Schmedtmann
              </a>
              .
            </span>
          </p>
        </div>

        {footerLinks.map((footerLink, index) => (
          <div key={index} className='flex flex-col gap-8'>
            <h5 className='font-medium color-[#555]'>{footerLink.title}</h5>
            <ul className='text-sm flex flex-col gap-4'>
              {footerLink.links.map((link, index) => (
                <li key={index}>
                  <a href='/'>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
export default Footer
