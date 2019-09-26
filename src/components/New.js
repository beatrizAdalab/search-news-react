import React from 'react';
import PropTypes from 'prop-types'

const New = ({ newItem }) => {

    const { description, source, title, url, urlToImage } = newItem

    const image = (urlToImage) ?
        <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className='card-title'> {source.name} </span>
        </div>
        : null;

    return (
        <div className='col s12 m6 l4'>
            <div className='card'>
                {image}
                <div className='card-content'>
                    <span className='card-title'>{title}</span>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a href={url} target='_blank' rel="noopener noreferrer" className='orange darken-1 wavs-effect waves-light btn'>
                        read more ...
                    </a>
                </div>
            </div>
        </div>
    );
}

New.protoType = {
    newItem: PropTypes.object.isRequired,
}
export default New;