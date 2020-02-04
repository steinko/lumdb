import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../components/Welcome';

it ('should exist', () => { 
	expect(render(<Welcome />)).not.toBeNull()
})

it ('should exist', () => { 
	const {queryByText} = render(<Welcome />)
	expect(queryByText('Welcome')).not.toBeNull()
})