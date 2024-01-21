import { format } from "date-fns";
import { Navigate, useLocation } from "react-router-dom";
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

      <p>
        We'll have your table ready for <br />
        <span className="font-bold">
          {formattedDate} at {time}
        </span>
      </p>
    </div>
  );
}

export default Success;
