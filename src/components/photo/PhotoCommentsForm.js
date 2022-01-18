import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Error from '../../elements/Error';
import { COMMENT_POST } from '../../api';
import './PhotoCommentsForm.css';

import useFetch from '../../hooks/useFetch';

const PhotoCommentsForm = ({ id, setComments }) => {
    const [comment, setComment] = React.useState('');
    const { request, error } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    }
    return (
        <form className='form-comments' onSubmit={handleSubmit}>
            <textarea className='textarea'
                id='comment'
                name='comment'
                placeholder='Comente...'
                value={comment}
                onChange={({ target }) => setComment(target.value)} />
            <button className='button-comments'>
                <Enviar />
            </button>
            <Error error={error} />
        </form>

    )
}

export default PhotoCommentsForm;