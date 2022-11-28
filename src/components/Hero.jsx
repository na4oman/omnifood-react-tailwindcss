import hero from '../assets/hero.png'
import { deliveredImages } from '../constants'

const Hero = () => (
  <section className='bg-tints pt-12 pb-24 lg:px-10 text-center'>
    <div className='grid lg:grid-cols-2 gap-12 items-center justify-center py-0 px-4 my-0 mx-auto max-w-[140rem]'>
      {/* LEFT SIDE */}
      <div>
        <h1 className='heading-primary text-center'>
          A healthy meal delivered to your door, every single day
        </h1>
        <p className='text-base lg:text-xl mb-12 py-0 lg:px-8 leading-relaxed text-center'>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <a className='cta-button text-xs lg:text-xl mr-4' href='#cta'>
          Start eating well
        </a>
        <a
          className='cta-button bg-white text-[#555] text-xs lg:text-xl hover:bg-tints hover:shadow-[0_0_0_3px_#fff]'
          href='#how'
        >
          Learn more ↓
        </a>

        <div className='mt-20 flex items-center justify-center gap-5'>
          <div className='flex -space-x-2 pr-20'>
            {deliveredImages.map(customer => (
              <img
                key={customer.id}
                className='customer-img'
                src={customer.customerImage}
                alt={customer.id}
              />
            ))}
          </div>
          <p className='font-bold text-sm lg:text-lg'>
            <span className='text-shades mr-2'>250,000+</span>
            meals delivered last year!
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <img
          src={hero}
          alt='Woman enjoying food, meals in storage container, and food bowls on a table'
        />
      </div>
    </div>
  </section>
)
export default Hero
