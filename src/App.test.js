import {render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {replaceCameWithSpaces} from "./App"

describe("Testando conteudo do curso seção 2", () => {
  test("button has correct initial color", () => {
    render(<App />);
    

    //find an element with a role of button of 'change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    // expect(colorButton).toHaveStyle({})
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  });

  test("button turns blue when clicked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    expect(colorButton.textContent).toBe("Change to red");
  });


  test("button turns blue when clicked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();

    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).not.toBeChecked();

  });

  test("checkbox disables button on first click and enables on second click", () => {
    render(<App />);

   const checkBox = screen.getByRole('checkbox', {name: 'Disable button'});
   const button = screen.getByRole("button", {name: "Change to blue"});

   fireEvent.click(checkBox);
   expect(button).toBeDisabled();

   fireEvent.click(checkBox);
   expect(button).toBeEnabled();


  });

  test("checkbox disables button on first click and enables on second click", () => {
    render(<App />);

   const checkBox = screen.getByRole('checkbox', {name: 'Disable button'});
   const button = screen.getByRole("button", {name: "Change to blue"});

   fireEvent.click(checkBox);
   expect(button).toHaveStyle('background-color: gray');

   fireEvent.click(checkBox);
   expect(button).toHaveStyle('background-color: red');

  });
});


describe('spaces before camel-case capital lettters', ()=>{
  test('Works for no capital letters', ()=>{
expect(replaceCameWithSpaces('Red')).toBe('Red');
  })

  test('Works for no capital letter', ()=>{
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })

  test('Works for multiple inner capital letter', ()=>{
    expect(replaceCameWithSpaces('MidnightVioletRed')).toBe('Midnight Violet Red');
  })
})
