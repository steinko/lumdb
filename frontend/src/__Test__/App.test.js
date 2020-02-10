import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App'


const data = 
	   { results: 
		  [{ 
			"id": 419704,
			"title": "Ad Astra"
		   }]
		 }

beforeEach(() => {
    fetch.resetMocks()
    fetch.mockResponseOnce(JSON.stringify( data))
  })

test('renders learn react link', () => {
  expect(render(<App />)).not.toBeNull()
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
