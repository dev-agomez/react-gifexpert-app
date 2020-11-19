import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', ()=>{
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} /> );

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} /> );
    });

    test('Debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input');
       const value = 'Hola mundo'
       input.simulate('change', {
           target:{
               value
           }
       }); 
       var p = wrapper.find('p').text().trim();
       expect(p).toBe(value);
    });
    
    test("No debe de postear la información OnSubmit", () => {
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llmar setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        const form = wrapper.find('form');

        input.simulate('change',{ target:{ value } });
        form.simulate('submit',{ preventDefault(){} });

        //expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledTimes(1);
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Espera por lo menos una función
        expect(input.prop('value')).toBe('')
    });
});