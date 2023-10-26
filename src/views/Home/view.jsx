import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import ImgHome from "../../assets/images/img-home.png";


export default function Home() {

    return (
        <Styles.ContainerMain>
            <Header />
            <Styles.ContentContainer>
                <Styles.ImgContainer>
                    <img src={ImgHome} alt="Image Home" />
                </Styles.ImgContainer>
                <Styles.TextContainer>
                    <Styles.Title>
                        Segredos do Convento
                    </Styles.Title>
                    <Styles.Text>
                    Grupo de freiras reunidas em prol de ajudar ao próximo.
                    Para arrecadar recursos para as doações vendemos nossos produtos
                    Todos desenvolvidos artesanalmente por nós.
                    Grupo de freiras reunidas em prol de ajudar ao próximo.
                    Para arrecadar recursos para as doações vendemos nossos produtos
                    Todos desenvolvidos artesanalmente por nós.
                    Grupo de freiras reunidas em prol de ajudar ao próximo.
                    Para arrecadar recursos para as doações vendemos nossos produtos
                    Todos desenvolvidos artesanalmente por nós.
                    </Styles.Text>
                </Styles.TextContainer>
            </Styles.ContentContainer>
        </Styles.ContainerMain>
    )
}
