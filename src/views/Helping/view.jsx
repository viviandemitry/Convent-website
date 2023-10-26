import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'

export default function Helping() {
        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                    <Styles.LeftContainer>
                        <Styles.Title>
                            Como Ajudar
                        </Styles.Title>
                        <Styles.Text>
                            Grupo de freiras reunidas em prol de ajudar ao próximo.
                            Para arrecadar recursos para as doações vendemos nossos produtos
                            Todos desenvolvidos artesanalmente por nós.
                        </Styles.Text>
                    </Styles.LeftContainer>
                    <Styles.Line></Styles.Line>
                    <Styles.RightContainer>
                        <Styles.Text>
                            Grupo de freiras reunidas em prol de ajudar ao próximo.
                            Para arrecadar recursos para as doações vendemos nossos produtos
                            Todos desenvolvidos artesanalmente por nós.
                        </Styles.Text>
                    </Styles.RightContainer>
                </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}
