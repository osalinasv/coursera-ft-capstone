import { About } from '#components/home/About'
import { HomeHero } from '#components/home/HomeHero'
import { Specials } from '#components/home/Specials'
import { Testimonials } from '#components/home/Testimonials'

function Home() {
  return (
    <>
      <HomeHero />
      <Specials />
      <Testimonials />
      <About />
    </>
  )
}

export default Home
