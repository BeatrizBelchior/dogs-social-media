import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';
import './PhotoDelete.css';

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();


    async function handleClick() {
        const confirm = window.confirm('Tem certeza que deseja  deletar sua foto?')
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {loading ? (<button className='delete' disabled>Deletando</button>) :
                (<button onClick={handleClick} className='delete'>Deletar</button>)}
        </>
    )
}

export default PhotoDelete;
