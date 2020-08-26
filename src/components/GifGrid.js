import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const { data: images,loading, notFound } = useFetchGifs(category);

    return (
       <>
        <h3 className="animate__animated animate__lightSpeedInLeft">{ category }</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p>}
        {notFound && <p className="animate__animated animate__bounceInDown">No hay elementos para mostrar...</p>}
        {
            <div className="card-grid">
                { 
                    images.map(img => (
                        <GifGridItem 
                        key={img.id} 
                        {...img}
                        />
                    ))
                }
            </div>
        }
       </>
    )
}