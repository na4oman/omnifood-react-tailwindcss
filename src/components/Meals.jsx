import Card from './Card'
import Diets from './Diets'
import { foodCard } from '../constants'

const Meals = () => {
  return (
    <section id='meals' className='px-6 sm:px-12 mb-32 pt-20'>
      <span className='subheading'>Meals</span>
      <h2 className='heading-secondary text-center'>
        Omnifood AI chooses from 5,000+ recipes
      </h2>
      <div className='columns-1 sm:columns-2 lg:columns-3 mb-12 pl-3 sm:pl-0'>
        {foodCard.map(card => (
          <Card card={card} key={card.id} />
        ))}
        <Diets />
      </div>
      <div className='text-center'>
        <a
          className='inline-block text-center text-primary border-b border-current hover:text-shades hover:border-b hover:border-transparent transition-all duration-300 ease-out hover:ease-in'
          href='/'
        >
          See all recipes &rarr;
        </a>
      </div>
    </section>
  )
}
export default Meals
