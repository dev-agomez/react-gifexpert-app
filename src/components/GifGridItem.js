import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({id, title, url, index}) => {
    return (
        <div className="col-md-4 animate__animated animate__lightSpeedInLeft">
            <div className="card mb">
                <a href={url} target="_blank">
                    <img className="card-img-top" src={url} alt={title}/>
                </a>                 
                <div className="card-body mb">
                    <h5 className="card-title">{index + ".- " +  title}</h5>
                </div>
            </div>
        </div>
)}

GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}