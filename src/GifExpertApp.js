import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

//let count = 0;
const GifExpertApp = () =>{
    
    //const categories = ['One Punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () =>{
    //     count++;
    //     setCategories(cats => [...cats,'HunteXHunter'+count]);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map((category,i) => (
                        <GifGrid key={i} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

