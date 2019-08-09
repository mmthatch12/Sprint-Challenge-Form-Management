import React from 'react'
import { render } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each";

import GetCard from './GetCard'

describe("<GetCard />", () => {
    it("renders without crashing", () => {
        render(<GetCard />);
    })

})