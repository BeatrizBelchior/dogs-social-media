import React from 'react';
import './FeedPhotosItem.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li className='photo' onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className='visualizacao'>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItem;
