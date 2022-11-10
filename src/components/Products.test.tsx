import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./Products";
import userEvent from "@testing-library/user-event";

test("Correct button text on initial render and after button click", () => {
  render(<Products />);
  const buttonAll = screen.getByText("View All");
  expect(buttonAll).toBeInTheDocument();

  userEvent.click(buttonAll);
  const buttonCollapse = screen.getByText(/collapse/i);
  expect(buttonCollapse).toBeInTheDocument();
  expect(screen.queryByText("View All")).not.toBeInTheDocument();

  userEvent.click(buttonCollapse);
  expect(screen.queryByText(/collapse/i)).not.toBeInTheDocument();
  expect(buttonAll).toBeInTheDocument();
});

test("5 products displayed on initial render", () => {
  render(<Products />);
  const initialProducts = screen.getAllByRole("article");
  expect(initialProducts).toHaveLength(5);
});

test("display all products on first button click, display only 5 on 2nd click", () => {
  render(<Products />);

  const button = screen.getByRole("button");
  userEvent.click(button);
  const productsAll = screen.getAllByRole("article");
  expect(productsAll).toHaveLength(productsAll.length);

  userEvent.click(button);
  const productsReduced = screen.getAllByRole("article");
  expect(productsReduced).toHaveLength(5);
});
