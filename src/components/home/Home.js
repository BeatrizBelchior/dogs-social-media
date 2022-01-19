import React from 'react';
import Head from '../../elements/Head';
import Feed from '../feed/Feed';

const Home = () => {
    return (
        <section className='container mainContainer'>
            <Head title="Feed" description="Home do site Dogs" />
            <Feed />
        </section>
    )
}

export default Home
