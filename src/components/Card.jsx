import { FireIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline'

const Card = ({ card }) => {
  return (
    <div className='shadow-lg hover:-translate-y-[5px] transition-all duration-400 ease-linear will-change-transform overflow-hidden max-w-sm mb-16'>
      <div className='rounded-t-xl overflow-hidden'>
        <img src={card.img} alt={card.title} />
      </div>
      <div className='px-6 sm:px-12 py-6'>
        <div className='flex items-center gap-1 text-[#333] mb-4'>
          {card.categories.map(category => (
            <span
              key={category}
              className={`uppercase font-semibold text-xs px-2 py-1 rounded-full ${
                category === 'vegetarian'
                  ? 'bg-[#51cf66]'
                  : category === 'vegan'
                  ? 'bg-[#94d82d]'
                  : 'bg-[#ffd43b]'
              }`}
            >
              {category}
            </span>
          ))}
        </div>
        <p className='font-semibold mb-8'>{card.title}</p>
        <ul className='flex flex-col gap-4'>
          <li className='flex items-center gap-1'>
            <FireIcon className='h-6 text-primary mr-2' />
            <span className='font-bold'>{card.calories}</span>
            <span>calories</span>
          </li>
          <li className='flex items-center gap-1'>
            <HeartIcon className='h-6 text-primary mr-2' />
            <span>NutriScore &reg;</span>
            <span className='font-bold'>{card.nutriScore}</span>
          </li>
          <li className='flex items-center gap-1'>
            <StarIcon className='h-6 text-primary mr-2' />
            <span className='font-bold'>{card.rating}</span>
            <span>rating ({card.voted})</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Card
