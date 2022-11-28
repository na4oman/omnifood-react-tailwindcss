import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import HowItWorks from './components/HowItWorks'
import Meals from './components/Meals'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: '-50%',
      treshold: 1.0,
    })
    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [containerRef])

  return (
    <div
      id='top'
      className='font-body font-normal leading-4 text-[#555] overflow-hidden'
    >
      <Header isVisible={isVisible} />
      <main>
        <Hero />
        <Featured />
        <div ref={containerRef}>
          <HowItWorks />
          <Meals />
          <Testimonials />
          <Pricing />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
