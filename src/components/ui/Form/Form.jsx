import clsx from "clsx";
import React from "react";
import "./styles.css";

function Label({ className, children, required, ...props }) {
  return (
    <label className={clsx("form-label font-medium", className)} {...props}>
      {children}
      {required && <span className="form-required">*</span>}
    </label>
  );
}

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input className={clsx("form-input", className)} {...props} ref={ref} />
  );
});
Input.displayName = "Input";

const Select = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <select className={clsx("form-input", className)} {...props} ref={ref} />
  );
});
Select.displayName = "Select";

function Field({ className, ...props }) {
  return <div className={clsx("form-field", className)} {...props} />;
}

function FieldError({ error }) {
  return (
    <p className="form-error">{error && <span role="alert">{error}</span>}</p>
  );
}

export { Field, FieldError, Input, Label, Select };
