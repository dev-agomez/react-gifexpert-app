import { useState, useEffect } from 'react'
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data:[],
        loading: true,
        notFound: true
    });
    console.log(category)
    useEffect(()=>{
       
        getGifs(category).then(img => {
            console.log(img)
            if (img.length > 0) {
                setState({
                    data: img,
                    loading: false,
                    notFound:false
                });    
            }else{
                setState({
                    data: img,
                    loading: false,
                    notFound:true
                })
            }
            
        });

    }, [category]);

    return state;

}
