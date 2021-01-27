import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("Unit tests", () => {
  test("Heading test", () => {
    render(<App />);
    const linkElement = screen.getByText(/Progress Bars Demo/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Loader test", () => {
    render(<App />);
    const loader = screen.getByText(/Loading, please wait/i);
    expect(loader).toBeInTheDocument();
  });
  test("Progress Bars test", async () => {
    const fakeResponse = {
      buttons: [5, 24, -28, -17],
      bars: [59, 88, 24],
      limit: 110,
    };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    global.fetch = jest.fn().mockResolvedValueOnce(mRes);
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText(/Progress Bars Demo/i)).toBeInTheDocument()
    );
    const bars = screen.getAllByTestId("bars");
    expect(bars.length).toEqual(3);
  });
  test("Progress Bar buttons test", async () => {
    const fakeResponse = {
      buttons: [5, 24, -28, -17],
      bars: [59, 88, 24],
      limit: 110,
    };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    global.fetch = jest.fn().mockResolvedValueOnce(mRes);
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText(/Progress Bars Demo/i)).toBeInTheDocument()
    );
    expect(screen.getAllByRole("combobox")).toHaveLength(1);
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
  test("Button click test", async () => {
    const fakeResponse = {
      buttons: [5, 24, -28, -17],
      bars: [59, 88, 24],
      limit: 110,
    };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    global.fetch = jest.fn().mockResolvedValueOnce(mRes);
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText(/Progress Bars Demo/i)).toBeInTheDocument()
    );
    const [firstButton] = screen.getAllByRole("button");
    fireEvent.click(firstButton);
    expect(screen.getByText(/64/i)).toBeInTheDocument();
  });
});
