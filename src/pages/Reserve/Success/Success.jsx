import { format } from "date-fns";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import "./styles.css";

function Success() {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/booking" replace={true} />;
  }

  const { name, date, time } = state;
  const formattedDate = format(date, "MM/dd/yyyy");

  return (
    <div className="reserve-success text-center">
      <h2 className="font-medium font-3xl text-accent font-serif mb-4">
        Confirmed!
      </h2>

      <p className="font-2xl font-serif mb-8">
        Thank you for booking with us <br />
        {name}
      </p>

      <p className="mb-8">
        We'll have your table ready for <br />
        <span className="font-bold">
          {formattedDate} at {time}
        </span>
      </p>

      <Button size="lg" asChild>
        <Link to="/booking" preventScrollReset={true}>
          Go back
        </Link>
      </Button>
    </div>
  );
}

export default Success;
