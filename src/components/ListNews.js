import React from 'react';
import New from './New'
import PropTypes from 'prop-types'

const ListNews = ({ news, loaded }) => {

    return (
        (loaded) ?
            <div className='preloader-wrapper big active'>
                <div className='spinner-layer spinner-blue'>
                    <div className='circle-clipper left'>
                        <div className='circle'></div>
                    </div><div className='gap-patch'>
                        <div className='circle'></div>
                    </div><div className='circle-clipper right'>
                        <div className='circle'></div>
                    </div>
                </div>
            </div> : <div className='row container-cards'>
                {news.map(newItem => (
                    <New
                        key={newItem.url}
                        newItem={newItem} />
                ))}
            </div>
    )
};

ListNews.protoType = {
    news: PropTypes.array.isRequired,
}

export default ListNews;