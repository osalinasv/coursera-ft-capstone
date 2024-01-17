import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { About } from "../components/home/About";
import { Hero } from "../components/home/Hero";
import { Specials } from "../components/home/Specials";

function AnchorScroller({ children }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || hash.length < 2) return;

    const element = document.getElementById(hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return children;
}

function Home() {
  return (
    <AnchorScroller>
      <Hero />
      <Specials />
      <About />
    </AnchorScroller>
  );
}

export default Home;
