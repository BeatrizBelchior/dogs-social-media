import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../forms/input/Input';
import Button from '../forms/buttons/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../elements/Error';
import './LoginForm.css';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>
            <form className='form' onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? (<Button disabled>Entrando...</Button>) : (<Button>Entrar</Button>)}
                <Error error={error} />
            </form>
            <Link className='perdeu' to="/login/perdeu">Perdeu a senha?</Link>
            <div className='cadastro'>
                <h2 className='subtitle'>Cadastre-se</h2>
                <p>Ainda não tem conta? Cadastre-se no site.</p>
                <Button><Link to="/login/criar">Cadastro</Link></Button>
            </div>

        </section>
    )
}

export default LoginForm;
