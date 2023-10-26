import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import ImgHome from "../../assets/images/img-home.png";


export default function Products() {
        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                <Styles.TextContainer>
                    <Styles.Title>
                        Produtos
                    </Styles.Title>
                    <Styles.Text>
                        Grupo de freiras reunidas em prol de ajudar ao próximo.
                        Para arrecadar recursos para as doações vendemos nossos produtos
                        Todos desenvolvidos artesanalmente por nós.
                        Grupo de freiras reunidas em prol de ajudar ao próximo.
                    </Styles.Text>
                </Styles.TextContainer>
                <Styles.ImgContainer>
                    <Styles.ProductContainer>
                        <img src={ImgHome} alt="Image Home" />
                        <Styles.ProductTitle>
                            Produto
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer>
                        <img src={ImgHome} alt="Image Home" />
                        <Styles.ProductTitle>
                            Produto
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer>
                        <img src={ImgHome} alt="Image Home" />
                        <Styles.ProductTitle>
                            Produto
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer>
                        <img src={ImgHome} alt="Image Home" />
                        <Styles.ProductTitle>
                            Produto
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                </Styles.ImgContainer> 
            </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}