import eating from '../assets/eating.jpg'

const CTA = () => {
  return (
    <section id='cta' className='px-6 md:px-10 pt-20 pb-32 max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-10 gap-4 bg-gradient-to-br from-[#eb984e] to-[#e67e22] rounded-2xl overflow-hidden shadow-xl'>
        <div className='md:col-span-4 lg:col-span-6 p-6 lg:p-14 text-[#45260a]'>
          <div>
            <h2 className='text-3xl font-bold mb-8'>
              Get your first meal for free!
            </h2>
            <p className='leading-7 mb-10'>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
          </div>
          <form className='grid lg:grid-cols-2 gap-6 items-end'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='name' className='font-medium text-sm'>
                Full Name
              </label>
              <input
                id='name'
                type='text'
                placeholder='John Doe'
                className='p-2.5 rounded-md outline-none'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='email' className='font-medium text-sm'>
                Email address
              </label>
              <input
                id='email'
                type='email'
                placeholder='test@example.com'
                className='p-2.5 rounded-md outline-none'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='where' className='font-medium text-sm'>
                Where did you hear from us?
              </label>
              <select id='where' className='p-2.5 rounded-md outline-none'>
                <option value=''>Please choose an option</option>
                <option value='friends'>Friends and family</option>
                <option value='podcast'>Podcast</option>
                <option value='facebook'>Facebook ad</option>
                <option value='others'>Others</option>
              </select>
            </div>
            <div>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className='cta-button bg-[#45260a] block w-full text-lg py-2 hover:bg-white hover:text-inherit transition-all delay-50 ease-linear'
              >
                Sign up now
              </button>
            </div>
          </form>
        </div>
        <div className='md:col-span-6 lg:col-span-4 bg-cover bg-center opacity-60 row-start-1 md:row-start-auto'>
          <img src={eating} alt='eating' className='w-full h-full' />
        </div>
      </div>
    </section>
  )
}
export default CTA
