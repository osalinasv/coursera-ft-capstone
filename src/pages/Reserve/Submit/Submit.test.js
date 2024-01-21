import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
} from "@testing-library/react";
import Submit from "./index";

describe("Reserve/Submit", () => {
  it("should render form with default values", () => {
    const view = render(<Submit />);

    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();

    const guestsInput = queryByAttribute("id", view.container, "guests");
    expect(guestsInput).toHaveValue(1);
  });

  it("should update time options after date selection", () => {
    const view = render(<Submit />);

    const timeInput = queryByAttribute("id", view.container, "time");
    expect(timeInput).toHaveValue("");

    const dateInput = queryByAttribute("id", view.container, "date");
    fireEvent.change(dateInput, { target: { value: "2024-01-01" } });

    expect(dateInput).toHaveValue("2024-01-01");
    expect(timeInput).toHaveValue("15:00");
  });
});
