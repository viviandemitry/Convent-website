import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'

export default function Login() {
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
                            <Styles.InputContent type="text" placeholder="Escreva seu e-mail" />
                        </Styles.InputLabel>
                        <Styles.InputLabel>
                            PASSWORD 
                            <Styles.InputContent type="password" placeholder="Escreva sua senha" />
                        </Styles.InputLabel>
                    </Styles.InputContainer>
                </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}