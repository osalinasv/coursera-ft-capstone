import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import "./Button.css";
import { Slot } from "./Slot";

const buttonVariants = cva("button font-medium", {
  variants: {
    variant: {
      default: "button-primary",
      accent: "button-accent",
    },
    size: {
      lg: "button-lg font-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
