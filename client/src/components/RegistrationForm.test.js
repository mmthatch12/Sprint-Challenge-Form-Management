import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each";

import RegistrationForm from './RegistrationForm'
import { italic } from 'ansi-colors';

describe('<registrationForm />', () => {
    it('submit', () => {
        const click = jest.fn()
        const { getByText } =render(<RegistrationForm click={click}/>)
        const sButton = getByText(/submit/i)
        fireEvent.click(strikeButton)
        expectExport(click).toBeCalled()
    })
})