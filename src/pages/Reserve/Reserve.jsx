import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import heroImage from "../../assets/about-image-2.webp";
import accentImage from "../../assets/submit-image.webp";
import { Hero } from "../../components/shared/Hero";
import { Loading } from "../../components/shared/Loading";
import { Button } from "../../components/ui/Button";
import "./styles.css";

function Reserve() {
  return (
    <>
      <Hero>
        <Hero.HeroContent>
          <header className="mb-4">
            <h1 className="font-3xl text-accent font-medium font-serif">
              Reserve a Table
            </h1>
          </header>

          <p className="hero-text font-medium mb-4">
            Brunch, birthdays and any and all special occacions. Our family at
            Little Lemon will be delighted to have you and yours come experience
            Mediterranean cuisine.
          </p>

          <Button variant="accent" size="lg" className="hero-action" asChild>
            <Link to="/booking#reserve-now">Reserve now</Link>
          </Button>
        </Hero.HeroContent>

        <Hero.HeroImage
          src={heroImage}
          width={420}
          height={635}
          alt="The inside of the Little Lemon restaurant"
        />
      </Hero>

      <section
        id="reserve-now"
        className="reserve container mx-auto px-gutter py-16"
      >
        <div className="reserve-container">
          <img
            src={accentImage}
            width={853}
            height={1280}
            alt="Outside of the Little Lemon restaurant"
            className="reserve-img"
          />

          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default Reserve;
