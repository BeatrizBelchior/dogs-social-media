import React from 'react';
import { GET_STATS } from '../../api';
import Head from '../../elements/Head';
import useFetch from '../../hooks/useFetch';
import Loading from '../../elements/Loading';
import Error from '../../elements/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        async function getData() {
            const { url, options } = GET_STATS();
            await request(url, options)
        }
        getData();
    }, [request])

    if (loading) return <Loading />
    if (error) return <Error error={error} />
    if (data)
        return (
            <React.Suspense fallback={<div></div>}>
                <Head title="Estatísticas" />
                <UserStatsGraphs data={data} />
            </React.Suspense>
        );
    else return null;
}

export default UserStats;
