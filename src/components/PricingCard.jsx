import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const PricingCard = ({ card }) => {
  return (
    <div
      className={`pricing-card ${
        card.name === 'complete' ? 'bg-tints' : 'bg-transparent'
      } hover:shadow-2xl`}
    >
      <div className='mb-12'>
        <p className='uppercase text-shades font-semibold text-center mb-6'>
          {card.name}
        </p>
        <p className='text-5xl text-[#333] font-semibold text-center mb-4'>
          <span className='text-2xl mr-2'>$</span>
          {card.price}
        </p>
        <p className='text-center text-sm font-normal text-[#6f6f6f]'>
          {card.text}
        </p>
      </div>
      <ul className='flex flex-col gap-4 mb-12'>
        {card.features.map(feature => (
          <li key={feature.id} className='flex items-center'>
            {feature.title ? (
              <CheckIcon className='h-7 text-primary mr-4' />
            ) : (
              <XMarkIcon className='h-7 text-primary' />
            )}
            <span>{feature.title}</span>
          </li>
        ))}
      </ul>
      <div className='text-center'>
        <button className='cta-button inline-block text-lg'>
          Start eating well
        </button>
      </div>
    </div>
  )
}
export default PricingCard
