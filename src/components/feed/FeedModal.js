import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import './FeedModal.css';
import Error from '../../elements/Error';
import Loading from '../../elements/Loading';
import PhotoContent from '../photo/PhotoContent';

const FeedModal = ({ photo }) => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
    }, [photo, request]);

    return (
        <div className='modal'>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal;
