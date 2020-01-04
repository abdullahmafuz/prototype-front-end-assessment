import React, { Component } from 'react'
import {shallow} from 'enzyme';

import Loginbody from './Loginbody';


let wrapper;

beforeEach(()=>{
    const mockprops={
        onSubmit:jest.fn(),
        onChange:jest.fn(),
        email:'',
        password:''
    }
    wrapper=shallow(<Loginbody {...mockprops} />);
    
})


it('test for rendering Login Component',()=>{

    expect(wrapper).toMatchSnapshot();

})
