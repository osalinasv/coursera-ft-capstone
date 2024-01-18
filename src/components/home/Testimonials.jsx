import React, { useRef, useEffect } from "react";
import "./Testimonials.css";
import { Card, CardContent, CardHeader } from "../ui/Card";
import femaleUser1 from "../../assets/user-female-1.jpg";
import femaleUser2 from "../../assets/user-female-2.jpg";
import maleUser1 from "../../assets/user-male-1.jpg";
import maleUser2 from "../../assets/user-male-2.jpg";

function Testimonial({ name, score, review, image, ...props }) {
  const paddedStars = 5 - score;
  return (
    <Card className="carousel-item text-center text-foreground" {...props}>
      <CardHeader>
        <span title={`${score} stars out of 5`} className="font-xl">
          {score > 0 && (
            <span className="text-accent" aria-hidden={true}>
              {"★".repeat(score)}
            </span>
          )}
          {paddedStars > 0 && (
            <span className="text-surface" aria-hidden={true}>
              {"★".repeat(5 - score)}
            </span>
          )}
        </span>
      </CardHeader>
      <CardContent>
        <img
          src={image}
          width={100}
          height={100}
          alt=""
          className="carousel-item-img mb-4"
        />
        <p className="font-bold font-xl mb-2">{name}</p>
        <q className="text-primary">{review}</q>
      </CardContent>
    </Card>
  );
}

function DraggableContainer(props) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (event) => {
      isDown = true;
      startX = event.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const onMouseMove = (event) => {
      if (!isDown) return;

      event.preventDefault();
      const endX = event.pageX - element.offsetLeft;
      const deltaX = (endX - startX) * 5;
      element.scrollLeft = scrollLeft - deltaX;
    };

    const onMouseLift = () => {
      isDown = false;
    };

    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("mouseup", onMouseLift);
    element.addEventListener("mouseleave", onMouseLift);
    element.addEventListener("mousemove", onMouseMove);

    return () => {
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("mouseup", onMouseLift);
      element.removeEventListener("mouseleave", onMouseLift);
      element.removeEventListener("mousemove", onMouseMove);
    };
  });

  return <div {...props} ref={ref} />;
}

function TestimonialCarousel() {
  return (
    <DraggableContainer className="carousel">
      <Testimonial
        name="Lisa Anderson"
        score={4}
        review="Little Lemon's blend of tradition and innovation creates an inviting dining experience with impressive flavors."
        image={femaleUser1}
      />
      <Testimonial
        name="David Smith"
        score={5}
        review="Little Lemon captures the essence of Mediterranean cuisine flawlessly—exciting, familiar, a must-visit gem."
        image={maleUser1}
      />
      <Testimonial
        name="Jessica Taylor"
        score={4}
        review="Little Lemon offers a fresh, inventive take on Mediterranean favorites for a memorable dining adventure."
        image={femaleUser2}
      />
      <Testimonial
        name="Michael Johnson"
        score={5}
        review="Little Lemon exceeded expectations! The marriage of classic and contemporary is pure genius—a true celebration of flavors."
        image={maleUser2}
      />
    </DraggableContainer>
  );
}
export function Testimonials() {
  return (
    <section className="testimonials bg-primary text-inverse">
      <div className="testimonials-container container mx-auto px-gutter">
        <header className="text-center mb-8">
          <h2 className="font-serif font-medium font-3xl text-accent">
            Testimonials
          </h2>
          <p className="font-serif font-2xl">See what our customers think</p>
        </header>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
