import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'

export default function Login() {
        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                    <Styles.Title>
                        Contato
                    </Styles.Title>
                    <Styles.ContactInfo>
                        <Styles.Text>
                            Telefone:
                        </Styles.Text>
                        <Styles.Text>
                            (11)3673-0077
                        </Styles.Text>
                    </Styles.ContactInfo>
                    <Styles.ContactInfo>
                        <Styles.Text>
                            Email:
                        </Styles.Text>
                        <Styles.Text>
                            segredosdoconventosc@gmail.com
                        </Styles.Text>
                    </Styles.ContactInfo>
                    <Styles.ContactInfo>
                        <Styles.Text>
                            Facebook:
                        </Styles.Text>
                        <Styles.Text>
                            https://web.facebook.com/Segredosconvento/
                        </Styles.Text>
                    </Styles.ContactInfo>
                    <Styles.ContactInfo>
                        <Styles.Text>
                            Endereço:
                        </Styles.Text>
                        <Styles.Text>
                            Av. Dr. Arnaldo, 1492 - Sumaré, São Paulo CEP: 01255-000
                        </Styles.Text>
                    </Styles.ContactInfo>
                </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}