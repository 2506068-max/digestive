import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'

test('renders home headline', ()=>{
  render(<Home />)
  expect(screen.getByText(/Explore Your Digestive System/i)).toBeInTheDocument()
})
