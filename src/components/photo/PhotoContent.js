import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import './PhotoContent.css'
import PhotoComments from './PhotoComments';
import UserContext from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../../elements/Image'

const PhotoContent = ({ data, single }) => {
    const user = React.useContext(UserContext);
    const { photo, comments } = data;


    return (
        <div className={`${'photosolo'} ${single ? 'single' : ''}`}>
            <div className='img'>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className='details'>
                <div>
                    <p className='author'>
                        {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> :
                            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
                        <span className="visualizacoes">{photo.acessos}</span>
                    </p>
                    <h1 className='title'>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul className='attributes'>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>
                    </ul>
                </div>
            </div>
            <PhotoComments single={single} id={photo.id} comments={comments} />
        </div>
    );
};

export default PhotoContent;
