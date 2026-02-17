import { render, screen, fireEvent } from "@testing-library/react";
import { ContentA } from "./ContentA";
import { ContentB } from "./ContentB";


test("ContentA increments counter on click (normal case)", () => {
  render(<ContentA />);
  fireEvent.click(screen.getByRole("button", { name: "Increase A" }));
  expect(screen.getByText(/1/)).toBeInTheDocument();
});


test("ContentB button starts disabled when input is empty (edge case)", () => {
  render(<ContentB />);
  expect(screen.getByRole("button", { name: "Submit B" })).toBeDisabled();
});


test("ContentB enables button when text is entered (normal case)", () => {
  render(<ContentB />);
  fireEvent.change(screen.getByPlaceholderText(/Try leaving this empty/i), {
    target: { value: "Hello" },
  });
  expect(
    screen.getByRole("button", { name: "Submit B" })
  ).not.toBeDisabled();
});


test("ContentA shows initial counter as 0 (normal case)", () => {
  render(<ContentA />);
  expect(screen.getByText(/Normal case counter:/i)).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
});

test("ContentB trims spaces and keeps button disabled (edge case)", () => {
  render(<ContentB />);
  const input = screen.getByPlaceholderText(/Try leaving this empty/i);

  fireEvent.change(input, { target: { value: "   " } });
  expect(
    screen.getByRole("button", { name: /Submit B/i })
  ).toBeDisabled();
});