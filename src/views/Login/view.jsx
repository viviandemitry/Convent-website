import React, { useState } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function login(){
        try {
        const data = {email, password}
        const response = await fetch('https://donation-project-pi.vercel.app/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json',},
            body: JSON.stringify(data),
        })
        const dataApi = await response.json()
        console.log(dataApi)
        sessionStorage.setItem("sessionToken", dataApi.token)
        navigate("/menu") 
        }
        catch(err) {
            alert("Dados inválidos")
        }

    }

        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                    <Styles.Title>
                        Login
                    </Styles.Title>
                    <Styles.InputContainer>
                        <Styles.InputLabel>
                            EMAIL
                            <Styles.InputContent type="text" placeholder="Escreva seu e-mail" onChange={handleEmail} value={email} />
                        </Styles.InputLabel>
                        <Styles.InputLabel>
                            SENHA 
                            <Styles.InputContent type="password" placeholder="Escreva sua senha" onChange={handlePassword} value={password} />
                        </Styles.InputLabel>
                    </Styles.InputContainer>
                    <Styles.SubmitButton type="button" onClick={login} >
                        ENTRAR
                    </Styles.SubmitButton>
                </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}