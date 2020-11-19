import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', ()=>{

    const title = 'Un título';
    const url = 'https://localhost:8080/img.jpg'
    const id = 1;
    const index = 1;
    const wrapper = shallow(<GifGridItem id={id} title={title} url={url} index={index} />);

    test('Debe de mostrar el componente correctamete', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('Debe de tener un párrafo con el title', ()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(index +".- "+ title)
    });

    test('Debe de tener la imagen igual al url y alt de los props', ()=>{

        const img = wrapper.find('img');
        //console.log(img.props())
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener animate__lightSpeedInLeft', () => {
        const div = wrapper.find('div');
        const classNameStr = 'animate__lightSpeedInLeft';
        const className = div.prop('className');
        expect(className.includes(classNameStr)).toBe(true)
    })
    
});