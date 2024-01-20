import { useParams } from "react-router";
import { Hero } from "../components/shared/Hero";

function Order() {
  const { slug } = useParams();

  return (
    <>
      <Hero className="text-center">
        <Hero.HeroContent className="max-w-prose mx-auto">
          <h1 className="font-3xl text-accent font-medium font-serif">
            Coming Soon!
          </h1>
          <p className="font-2xl font-serif leading-none">Order Online</p>
        </Hero.HeroContent>
      </Hero>

      <div className="max-w-prose mx-auto px-gutter text-center py-16">
        <p className="font-bold font-2xl mb-8">
          Thank you for your interest{" "}
          {slug != null && (
            <span>
              <br />
              in the {decodeURIComponent(slug)}
            </span>
          )}
        </p>
        <p className="font-medium font-xl text-primary">
          Soon you'll be able to order online, for the purposes of this capstore
          project this page was not built. Try going to the reservations page!
        </p>
      </div>
    </>
  );
}

export default Order;
