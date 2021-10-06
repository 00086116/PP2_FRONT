
import React from 'react'

import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import IndexPage from '../../../src/pages/index'



test('loads and displays greeting', async () => {
    render(<IndexPage  />)


})
