import React from 'react'
import { shallow } from "enzyme";
import Card from '../Card'



it('Card Test ', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})


