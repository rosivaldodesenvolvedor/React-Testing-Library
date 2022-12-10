import { render, screen } from '@testing-library/react';
import App from './App';


describe("Testando conteudo do curso seção 2", () => {

test('button has correct initial color', () => {
  render(<App />)

  //find an element with a role of button of 'change to blue'
 const colorButton = screen.getByRole("button", {name: 'Change to blue'});
// expect(colorButton).toHaveStyle({})
expect(colorButton).toHaveStyle({ backgroundColor: 'red'})
});


test('button turns blue when clicked', () => {
  
});

})