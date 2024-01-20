import bruschettaImg from "#assets/brushetta.webp";
import greekSaladImg from "#assets/greek-salad.webp";
import lemonDessertImg from "#assets/lemon-dessert.webp";
import heroImage from "#assets/menu-hero.webp";
import { Hero } from "#components/shared/Hero";
import { MenuItem } from "#components/shared/MenuItem";
import "./styles.css";

export function MenuHero() {
  return (
    <Hero>
      <Hero.HeroImage
        src={heroImage}
        width={720}
        height={480}
        alt="A waitress holding a platter of bruschetta"
        className="menu-hero-img"
      />

      <Hero.HeroContent>
        <header className="mb-4">
          <h1 className="font-3xl text-accent font-medium font-serif">
            Our menu
          </h1>
          <p className="font-2xl font-serif leading-none">An experience</p>
        </header>

        <p className="hero-text font-medium mb-4">
          Be delighted with our carefully selected menu of authentic
          mediterranean dishes. Each one a modern twist in a classic recipe.
        </p>
      </Hero.HeroContent>
    </Hero>
  );
}

export function MenuSection() {
  return (
    <section className="menu-section container mx-auto px-gutter py-16">
      <h2 className="font-xl font-extrabold text-uppercase mb-4">Specials</h2>

      <div className="menu-showcase">
        <MenuItem
          title="Greek salad"
          price={12.99}
          image={{ src: greekSaladImg, alt: "A refreshing greek salad" }}
        >
          <p>
            The famous greek salad of crispy, peppers, olives and our Chicago
            style feta cheese, garnished with crunchy garlic and rosemary
            croutons.
          </p>
        </MenuItem>
        <MenuItem
          title="Bruschetta"
          price={5.99}
          image={{ src: bruschettaImg, alt: "A fresh bruschetta" }}
        >
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasones with salt and olvide oil.
          </p>
        </MenuItem>
        <MenuItem
          title="Lemon Dessert"
          price={12.99}
          image={{ src: lemonDessertImg, alt: "A delicious lemon dessert" }}
        >
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </MenuItem>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <>
      <MenuHero />
      <MenuSection />
    </>
  );
}

export default Menu;
