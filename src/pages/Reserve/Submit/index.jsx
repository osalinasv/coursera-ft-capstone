import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { compareAsc, format, parse } from "date-fns";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/ui/Button";
import { fetchAPI } from "../../../integrations/mockApi";
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

const today = new Date(new Date().toLocaleDateString());
const dateMin = format(today, "yyyy-MM-dd");

function dateFromString(value) {
  return value ? parse(value, "yyyy-MM-dd", new Date()) : null;
}

const schema = z.object({
  date: z
    .string()
    .transform(dateFromString)
    .refine((d) => !!d, { message: "Please enter a date at or after today" })
    .refine(
      (d) => {
        return compareAsc(d, today) !== -1;
      },
      { message: "Can't be before today" }
    ),
  time: z
    .string()
    .refine((value) => value !== "", { message: "Please select a time slot" }),
  guests: z.coerce
    .number()
    .min(1, "Must be between 1 and 10")
    .max(10, "Must be between 1 and 10"),
  reason: z.string().optional(),
  name: z
    .string()
    .refine((value) => value !== "", { message: "Name cannot be empty" }),
  email: z.string().email("Please enter a valid email"),
});

function Submit() {
  const [timeslots, setTimeslots] = useState(null);

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

  const onDateSelected = (e) => {
    const value = e.target.valueAsDate;
    const slots = fetchAPI(value);
    setTimeslots(slots);
  };

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
            min={dateMin}
            {...register("date", { onChange: onDateSelected })}
          />
          <FieldError error={errors.date?.message} />
        </Field>

        <Field>
          <Label htmlFor="time" required>
            What time?
          </Label>
          <Select id="time" {...register("time")}>
            {timeslots == null || timeslots.length === 0 ? (
              <option value="" disabled selected>
                Select a date first
              </option>
            ) : (
              timeslots.map((value) => <option key={value}>{value}</option>)
            )}
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
