import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/ui/Button";
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

const Select = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <select className={clsx("form-input", className)} {...props} ref={ref} />
  );
});

function Field({ className, ...props }) {
  return <div className={clsx("form-field", className)} {...props} />;
}

function FieldError({ error }) {
  return (
    <p className="form-error">{error && <span role="alert">{error}</span>}</p>
  );
}

const today = new Date(new Date().toDateString());
const schema = z.object({
  date: z.date({ coerce: true }).min(today),
  time: z.string().refine((value) => value !== ""),
  guests: z.number({ coerce: true }).min(1).max(10),
  reason: z.string().optional(),
  name: z.string().refine((value) => value !== ""),
  email: z.string().email(),
});

function Submit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      guests: 1,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className="reserve-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="reserve-form-section">
        <p className="font-extrabold font-xl text-uppercase">Booking</p>

        <Field>
          <Label htmlFor="date" required>
            What date?
          </Label>
          <Input
            id="date"
            type="date"
            min={today.toISOString().split("T")[0]}
            {...register("date")}
          />
          <FieldError error={errors.date?.message} />
        </Field>

        <Field>
          <Label htmlFor="time" required>
            What time?
          </Label>
          <Select id="time" {...register("time")}>
            <option value="" disabled selected>
              Select a date first
            </option>
          </Select>
          <FieldError error={errors.time?.message} />
        </Field>

        <Field>
          <Label htmlFor="guests" required>
            How many guests?
          </Label>
          <Input
            id="guests"
            type="number"
            min="1"
            max="10"
            {...register("guests")}
          />
          <FieldError error={errors.guests?.message} />
        </Field>

        <Field>
          <Label htmlFor="reason">Any special occasions?</Label>
          <Select id="reason" {...register("reason")}>
            <option value="">None</option>
            <option value="other">Other</option>
            <option value="birhday">Birhday</option>
            <option value="anniversary">Anniversary</option>
          </Select>
          <FieldError error={errors.reason?.message} />
        </Field>
      </div>

      <div className="reserve-form-section">
        <p className="font-extrabold font-xl text-uppercase">Contact</p>

        <Field>
          <Label htmlFor="name" required>
            Name
          </Label>
          <Input id="name" placeholder="Full Name" {...register("name")} />
          <FieldError error={errors.name?.message} />
        </Field>

        <Field>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
          />
          <FieldError error={errors.email?.message} />
        </Field>
      </div>

      <Button type="submit" variant="accent" size="lg">
        Submit
      </Button>
    </form>
  );
}

export default Submit;
