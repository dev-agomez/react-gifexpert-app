import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => { 
        if (e) {
            setInputValue(e.target.value);
            console.log("hadleInputChange llamado");    

            if(inputValue === ""){
                setCategories(x => [""]);   
            }
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('handleSubmit', inputValue)
        if (inputValue) {
            //setCategories(x => [inputValue,...x]);  
            setCategories(x => [inputValue]);  
            setInputValue("");  
        }
    }

    const handleKeyPress = (event) => {
        if (inputValue && inputValue.length >= 2) {
            setCategories(x => [inputValue]);   
        }

        if(inputValue === ""){
            setCategories(x => [""]);   
        }
        console.log(inputValue);
      }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}