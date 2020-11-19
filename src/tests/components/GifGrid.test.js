import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { GifGrid } from '../../components/GifGrid';

describe('Pruebas en GifGrid', () => {
    const category = 'Goku';
    const wrapper = shallow(<GifGrid category={category}/>);

    test('Debe mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
