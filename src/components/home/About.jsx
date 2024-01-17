import ownersImage from "../../assets/about-image-1.webp";
import restaurantImage from "../../assets/about-image-2.webp";
import "./About.css";

export function About() {
  return (
    <section id="about" className="about container mx-auto px-gutter font-xl">
      <div>
        <header className="mb-4">
          <h2 className="font-3xl text-accent font-medium font-serif">
            Little Lemon
          </h2>
          <p className="font-2xl font-serif leading-none text-primary">
            Chicago
          </p>
        </header>

        <p className="font-xl mb-4">
          In the heart of Chicago, Little Lemon, founded by Adrian and Mario, is
          a culinary journey blending Mediterranean traditions with a modern
          twist. Rooted in family recipes, our cozy spot is a celebration of
          authentic flavors, a living history where every dish tells a story—a
          fusion of tradition and innovation that defines Little Lemon.
        </p>

        <p>
          Our kitchen is like a family album filled with recipes passed down
          from our grandmas and grandpas. We're all about keeping the traditions
          alive but throwing in some new twists for good measure. It's like a
          family reunion every time you sit down to eat with us.
        </p>
      </div>

      <div className="about-images">
        <img
          src={restaurantImage}
          width={420}
          height={635}
          alt="A waitress holding a tray with seafood"
        />
        <img
          src={ownersImage}
          width={420}
          height={635}
          alt="A waitress holding a tray with seafood"
        />
      </div>
    </section>
  );
}
