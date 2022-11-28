import PricingCard from './PricingCard.jsx'
import { pricingFeature, pricingCard } from '../constants/index.js'

const Pricing = () => {
  return (
    <section id='pricing' className='pt-20 px-8'>
      <div>
        <span className='subheading text-left'>Pricing</span>
        <h2 className='text-3xl font-bold text-[#333] leading-8 mb-20'>
          Eating well without breaking the bank
        </h2>
      </div>
      <div>
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center  mb-12'>
          {pricingCard.map(card => (
            <PricingCard key={card.id} card={card} />
          ))}
        </div>
        <p className='text-center text-sm mb-16'>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
        {pricingFeature.map(feature => (
          <div key={feature.id}>
            <div className='h-14 w-14 bg-tints text-primary rounded-full m-6 p-3'>
              {feature.icon}
            </div>
            <p className='text-lg font-bold text-[#333] mb-2'>
              {feature.title}
            </p>
            <p className='text-sm leading-7'>{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Pricing
