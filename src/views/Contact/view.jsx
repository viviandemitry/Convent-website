import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'

export default function Contact() {
        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                    <Styles.Title>
                        Contato
                    </Styles.Title>
                    <Styles.ContactInfo>
                        <Styles.TitleText>
                            Telefone:
                        </Styles.TitleText>
                        <Styles.Text>
                            (11)3673-0077
                        </Styles.Text>
                    </Styles.ContactInfo>
                    <Styles.ContactInfo>
                        <Styles.TitleText>
                            Email:
                        </Styles.TitleText>
                        <Styles.Text>
                            segredosdoconventosc@gmail.com
                        </Styles.Text>
                    </Styles.ContactInfo>
                    <Styles.ContactInfo>
                        <Styles.TitleText>
                            Facebook:
                        </Styles.TitleText>
                        <Styles.Text>
                            https://web.facebook.com/Segredosconvento/
                        </Styles.Text>
                    </Styles.ContactInfo>
                    <Styles.ContactInfo>
                        <Styles.TitleText>
                            Endereço:
                        </Styles.TitleText>
                        <Styles.Text>
                            Av. Dr. Arnaldo, 1492 - Sumaré, São Paulo CEP: 01255-000
                        </Styles.Text>
                    </Styles.ContactInfo>
                </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}