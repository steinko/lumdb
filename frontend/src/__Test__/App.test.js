import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument();
});


it ('should not display text show and hide', () => {    
  const { queryByText } = render(<App />);
   expect(queryByText(/show and hide/i)).toBeNull()
})

it ('should not display text show and hide', () => {   
  const { queryByText} = render(<App />);
   const button = queryByText('Toggle')
   fireEvent.click(button)
   expect(queryByText(/show and hide/i)).not.toBeNull()
})
