import React from 'react';
import useFetch from '../../hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api';
import Error from '../../elements/Error';
import Loading from '../../elements/Loading';
import './FeedPhotos.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const total = 6;
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total) setInfinite(false);
            console.log(json);
        }
        fetchPhotos();
    }, [request, user, page, setInfinite]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className='feed animeLeft'>
                {data.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
                ))}
            </ul>
        ); else return null;
}

export default FeedPhotos;
