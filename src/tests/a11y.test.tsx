import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/Home'
import axe from 'axe-core'

test('basic accessibility check', async ()=>{
  const {container} = render(<Home />)
  // Inject axe into the jsdom window
  // @ts-ignore
  window.axe = axe
  const results = await axe.run(container)
  if(results.violations.length > 0){
    // Log violations for debugging
    // eslint-disable-next-line no-console
    console.error('a11y violations:', JSON.stringify(results.violations, null, 2))
  }
  expect(results.violations.length).toBe(0)
})
