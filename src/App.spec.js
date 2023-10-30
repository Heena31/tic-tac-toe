import App from "./App";
import {render,screen} from "@testing-library/react";

describe("tic-tac-toe game being rendered", () => {
    test("renders the game", () => {
      const { container } = render(<App />);
      expect(container.getElementsByClassName("status").length).toBe(1);
    });

    test("renders the game", () => {
      const { container } = render(<App />);
      expect(container.getElementsByClassName("board-row").length).toBe(3);
    });
  });