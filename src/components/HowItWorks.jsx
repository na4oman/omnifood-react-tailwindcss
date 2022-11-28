import { howItWorks } from '../constants'

const HowItWorks = () => {
  return (
    <section id='how' className='px-6 mb-32 pt-20'>
      <span className='subheading text-left'>How it works</span>
      <h2 className='heading-secondary'>
        Your daily dose of health in 3 simple steps
      </h2>
      <div>
        {howItWorks.map((el, index) => (
          <div
            key={el.id}
            className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-16 my-16'
          >
            <div
              className={`${
                index % 2 === 0 ? 'sm:col-start-1' : 'sm:col-start-2'
              }`}
            >
              <p className='text-6xl lg:text-7xl font-semibold text-[#ddd] mb-2'>
                {el.step}
              </p>
              <h3 className='heading-tertiary'>{el.title}</h3>
              <p className='text-sm lg:text-base leading-loose lg:leading-8 text-gray-light'>
                {el.content}
              </p>
            </div>

            <div
              className={`flex items-center justify-center row-start-1 relative ${
                index % 2 === 0 ? 'sm:col-start-2' : 'sm:col-start-1'
              }`}
            >
              <span class='block absolute w-3/5 h-4/5 rounded-full  bg-tints'></span>
              <span class='block absolute w-1/2 h-2/3 rounded-full  bg-[#fae5d3]'></span>
              <img
                className='w-[35%] z-10 pt-4 sm:pt-0'
                src={el.imgSrc}
                alt={el.imgAlt}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default HowItWorks
