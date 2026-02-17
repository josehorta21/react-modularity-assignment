import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the main heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /React Modularity Assignment/i })
  ).toBeInTheDocument();
});