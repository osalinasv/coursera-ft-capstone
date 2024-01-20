import clsx from "clsx";
import React from "react";
import "./styles.css";

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

export { Card, CardContent, CardFooter, CardHeader };
