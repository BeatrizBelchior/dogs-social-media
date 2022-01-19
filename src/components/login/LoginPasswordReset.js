import React from 'react'
import Input from '../forms/input/Input';
import Button from '../forms/buttons/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';
import Error from '../../elements/Error';
import Head from '../../elements/Head';

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState('');
    const [key, setkey] = React.useState('');
    const password = useForm();
    const { error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setkey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validade()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value
            })
            const { response } = await request(url, options)
            if (response.ok) navigate('/login');
        }
    }

    return (
        <section className='animeLeft'>
            <Head title="Resetar Senha" />
            <h1 className='title'>Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" name="password" {...password} />
                {loading ? (<Button disabled >Resetando</Button>) : (<Button>Resetar</Button>)}
            </form>
            <Error error={error} />
        </section>
    )
}

export default LoginPasswordReset;
