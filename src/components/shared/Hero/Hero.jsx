import clsx from "clsx";
import "./styles.css";

function HeroContent({ className, ...props }) {
  return <div className={clsx("hero-content", className)} {...props} />;
}

function HeroImage({ className, alt, ...props }) {
  return <img alt={alt} className={clsx("hero-image", className)} {...props} />;
}

function Hero({ children, className, ...props }) {
  return (
    <main
      className={clsx("hero bg-primary text-inverse", className)}
      {...props}
    >
      <div className="hero-container container mx-auto px-gutter font-xl">
        {children}
      </div>
    </main>
  );
}

Hero.HeroContent = HeroContent;
Hero.HeroImage = HeroImage;

export { Hero, HeroContent, HeroImage };
