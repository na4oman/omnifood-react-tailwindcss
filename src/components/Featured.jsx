import React from 'react'
import { featured } from '../constants'

const Featured = () => {
  return (
    <section className='flex flex-col gap-6 text-center py-10 mb-8'>
      <h2 className='uppercase font-semibold text-[#888] text-xs'>
        As Featured In
      </h2>
      <div className='flex justify-center gap-2 sm:gap-5'>
        {featured.map(item => (
          <img
            key={item.logo}
            src={item.logo}
            alt={item.alt}
            className='logo-img'
          />
        ))}
      </div>
    </section>
  )
}

export default Featured
