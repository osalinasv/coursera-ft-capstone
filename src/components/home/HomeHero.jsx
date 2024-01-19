import heroImage from '#assets/hero-image.webp'
import { Hero } from '#components/shared/Hero'
import { Button } from '#components/ui/Button'
import { Link } from 'react-router-dom'

export function HomeHero() {
  return (
    <Hero>
      <Hero.HeroContent>
        <header className="mb-4">
          <h1 className="font-3xl text-accent font-medium font-serif">
            Little Lemon
          </h1>
          <p className="font-2xl font-serif leading-none">Chicago</p>
        </header>

        <p className="hero-text font-medium mb-4">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <Button variant="accent" size="lg" className="hero-action" asChild>
          <Link to="/reserve">Reserve a Table</Link>
        </Button>
      </Hero.HeroContent>

      <Hero.HeroImage
        src={heroImage}
        width={420}
        height={635}
        alt="A waitress holding a platter of bruschetta"
      />
    </Hero>
  )
}
