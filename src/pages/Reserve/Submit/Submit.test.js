import {
  fireEvent,
  queryAllByAttribute,
  queryByAttribute,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";
import Submit from "./index";

const mockNavigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Reserve/Submit", () => {
  it("should render form with default values", () => {
    const view = render(<Submit />);

    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();

    const guestsInput = queryByAttribute("id", view.container, "guests");
    expect(guestsInput).toHaveValue(1);
  });

  it("should update time options after date selection", () => {
    /* eslint-disable testing-library/no-node-access */
    const view = render(<Submit />);

    const timeInput = queryByAttribute("id", view.container, "time");
    expect(timeInput.children.length).toBe(1);

    const dateInput = queryByAttribute("id", view.container, "date");
    fireEvent.change(dateInput, { target: { value: "2025-01-01" } });

    expect(dateInput).toHaveValue("2025-01-01");
    expect(timeInput.children.length).toBeGreaterThan(1);

    fireEvent.change(timeInput, { target: { value: "15:00" } });
    expect(timeInput).toHaveValue("15:00");
  });

  it("should validate fields and stop submission on error", async () => {
    const user = userEvent.setup();
    const view = render(<Submit />);

    const submitButton = queryByAttribute("type", view.container, "submit");
    await user.click(submitButton);

    const dateInput = queryByAttribute("id", view.container, "date");
    expect(dateInput).toHaveAttribute("aria-invalid", "true");

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("should validate fields and navigate on success", async () => {
    const user = userEvent.setup();
    const view = render(<Submit />);

    const dateInput = queryByAttribute("id", view.container, "date");
    fireEvent.change(dateInput, { target: { value: "2025-01-01" } });

    const timeInput = queryByAttribute("id", view.container, "time");
    fireEvent.change(timeInput, { target: { value: "15:00" } });

    const nameInput = queryByAttribute("id", view.container, "name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = queryByAttribute("id", view.container, "email");
    fireEvent.change(emailInput, { target: { value: "john@email.com" } });

    const submitButton = queryByAttribute("type", view.container, "submit");
    await user.click(submitButton);

    const invalids = queryAllByAttribute(
      "aria-invalid",
      view.container,
      "true"
    );

    expect(invalids.length).toBe(0);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
