import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
// import BookList from "../components/BookList";
import CommentArea from "../components/CommentArea";
import SingleBook from "../components/SingleBook";

describe("App", () => {
  it("esegue il rendering del componente App", () => {
    render(<App />);

    screen.debug(); // stampa il jsx nel componente App sulla riga di comando
  });

  it("mounts the welcome corretly", () => {
    render(<Welcome />);
    screen.debug();
  });

  // it("number correct of SingleBook", async () => {
  //   render(<BookList /> books={b}

  //   );
  //   const  elements= await screen.findAllByRole("books");

  //   screen.debug();

  //   expect
  // });

  it("renderize the CommentArea corretly", () => {
    render(<CommentArea />);
    screen.debug();
  });

  it("Change border card color in red if click", () => {
    render(<SingleBook />);
    screen.debug();
    const card = screen.getAllByTestId;
    fireEvent.click(card);
    expect(heading.style.borderColor).toBe("red");
  });
});
