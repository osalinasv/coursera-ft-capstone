import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import "./Specials.css";
import greekSaladImg from "../../assets/greek-salad.webp";
import bruschettaImg from "../../assets/brushetta.webp";
import lemonDessertImg from "../../assets/lemon-dessert.webp";

const dollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function SpecialsCard({ title, price, image, children }) {
  return (
    <Card className="specials-card">
      {image != null && <img {...image} className="specials-card-img" />}
      <CardHeader className="specials-card-header">
        <h2 className="font-bold font-lg">{title}</h2>
        <span className="text-primary font-medium">
          {dollarFormatter.format(price)}
        </span>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={`/order/${encodeURIComponent(title)}`}>
            Order for delivery
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Specials() {
  return (
    <section className="specials container mx-auto px-gutter">
      <header className="mb-8">
        <h2 className="font-3xl font-medium font-serif">
          This weeks specials!
        </h2>

        <Button variant="accent" size="lg" className="hero-action" asChild>
          <Link to="/menu">Online Menu</Link>
        </Button>
      </header>

      <div className="specials-showcase">
        <SpecialsCard
          title="Greek salad"
          price={12.99}
          image={{ src: greekSaladImg, alt: "A refreshing greek salad" }}
        >
          <p>
            The famous greek salad of crispy, peppers, olives and our Chicago
            style feta cheese, garnished with crunchy garlic and rosemary
            croutons.
          </p>
        </SpecialsCard>
        <SpecialsCard
          title="Bruschetta"
          price={5.99}
          image={{ src: bruschettaImg, alt: "A fresh bruschetta" }}
        >
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasones with salt and olvide oil.
          </p>
        </SpecialsCard>
        <SpecialsCard
          title="Lemon Dessert"
          price={12.99}
          image={{ src: lemonDessertImg, alt: "A delicious lemon dessert" }}
        >
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </SpecialsCard>
      </div>
    </section>
  );
}
