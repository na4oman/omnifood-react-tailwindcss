import { feedback, testimonialImages } from '../constants'

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='bg-tints grid grid-cols-1 md:grid-cols-10 px-2 pt-20'
    >
      <div className='col-span-6 pt-20 px-4'>
        <span className='subheading text-left'>Testimonials</span>
        <h2 className='text-3xl font-bold text-[#333] leading-8 mb-20'>
          Once you try it, you can't go back
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10'>
          {feedback.map(item => (
            <figure key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className='inline-block rounded-full w-14 mb-4'
              />
              <blockquote className='text-sm lg:text-base leading-loose lg:leading-8 mb-4'>
                {item.content}
              </blockquote>
              <figcaption className='text-xs lg:text-sm text-[#6f6f6f]'>
                — {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className='col-span-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-2 xl:grid-cols-3 gap-2 p-2 pt-10'>
        {testimonialImages.map(image => (
          <figure key={image.id} className='overflow-hidden'>
            <img
              className='block w-full transition duration-200 hover:scale-110'
              src={image.img}
              alt={image.id}
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
export default Testimonials
