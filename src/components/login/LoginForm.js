import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../forms/input/Input';
import Button from '../forms/buttons/Button';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
    const username = useForm('email');
    const password = useForm();


    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        }).then(response => {
            console.log(response)
            return response.json();
        }).then((json) => {
            console.log(json)
            return json;
        });
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm;