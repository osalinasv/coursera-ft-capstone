import { About } from '#components/home/About'
import { HomeHero } from '#components/home/HomeHero'
import { Specials } from '#components/home/Specials'
import { Testimonials } from '#components/home/Testimonials'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function AnchorScroller({ children }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash || hash.length < 2) return

    const element = document.getElementById(hash.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return children
}

function Home() {
  return (
    <AnchorScroller>
      <HomeHero />
      <Specials />
      <Testimonials />
      <About />
    </AnchorScroller>
  )
}

export default Home
