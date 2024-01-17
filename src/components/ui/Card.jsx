import React from "react";
import clsx from "clsx";
import "./Card.css";

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return <article ref={ref} className={clsx("card", className)} {...props} />;
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("card-header", className)} {...props} />
  );
});
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("card-content", className)} {...props} />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("card-footer", className)} {...props} />
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardContent };
