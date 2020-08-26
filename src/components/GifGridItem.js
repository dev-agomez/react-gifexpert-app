import React from 'react'

export const GifGridItem = ({id, title, url, index}) => {
    console.log(id, title, url)
    return (
        <div className="card animate__animated animate__lightSpeedInLeft">            
            <a href={url} target="_blank">
                <img src={url} alt={title}/>
            </a>
            <p>{index + ".- " +  title}</p>
        </div>
    )
}
