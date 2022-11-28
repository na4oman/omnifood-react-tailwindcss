import { CheckIcon } from '@heroicons/react/24/outline'
import { dietList } from '../constants'

const Diets = () => {
  return (
    <div className='max-w-sm p-4 pt-0 min-w-[300px]'>
      <h3 className='text-xl font-bold text-[#333] mb-8'>
        Works with any diet:
      </h3>
      <ul className='flex flex-col gap-4'>
        {dietList.map(diet => (
          <li key={diet.title} className='flex items-center'>
            <CheckIcon className='h-6 text-primary mr-2' />
            <span>{diet.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Diets
