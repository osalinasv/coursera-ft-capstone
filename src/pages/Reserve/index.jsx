import heroImage from "#assets/about-image-2.webp";
import { Hero } from "#components/shared/Hero";
import { Button } from "#components/ui/Button";
import { Outlet } from "react-router-dom";

function ReserveHero() {
  return (
    <Hero>
      <Hero.HeroContent>
        <header className="mb-4">
          <h1 className="font-3xl text-accent font-medium font-serif">
            Reserve a Table
          </h1>
        </header>

        <p className="hero-text font-medium mb-4">
          Brunch, dates, get-togethers, birthdays and any and all special
          occacions. Our family at Little Lemon will be delighted to have you
          and yours come experience the true Mediterranean experience.
        </p>

        <Button variant="accent" size="lg" className="hero-action" asChild>
          <a href="#reserve-form">Reserve now</a>
        </Button>
      </Hero.HeroContent>

      <Hero.HeroImage
        src={heroImage}
        width={420}
        height={635}
        alt="A waitress holding a platter of bruschetta"
      />
    </Hero>
  );
}

function Reserve() {
  return (
    <>
      <ReserveHero />
      <Outlet />
    </>
  );
}

export default Reserve;
