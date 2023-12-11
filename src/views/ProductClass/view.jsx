import React, { useState } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import ProdutosGerais from "../../assets/images/produtos-gerais.png";
import ProdutosNatal from "../../assets/images/vela-de-natal.png";
import ProdutosPascoa from "../../assets/images/guirlanda-pascoa.png";
import Geleias from "../../assets/images/geleias.png";
import GeneralProd from '../../components/GeneralProd';


export default function ProductClass() {

        const [isGeneralProd, setIsGeneralProd] = useState(false);

        function handleGeneralProd(){
            setIsGeneralProd(true)
        }

        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                <Styles.TextContainer>
                    <Styles.Title>
                        Produtos
                    </Styles.Title>
                    <Styles.Text>
                       Nós produzimos alguns produtos artesanalmente para ajudar na arrecadação de fundos. Alguns temos a pronta entrega
                       e outros fazemos sob encomenda. <br /><br />Entre em contato conosco para saber mais!
                    </Styles.Text>
                </Styles.TextContainer>
                {/* <Styles.ImgContainer>
                    <Styles.Button type="button" onClick={handleGeneralProd}>
                        <Styles.ProductContainer>
                            <img src={ProdutosGerais} alt="Produtos Gerais" />
                            <Styles.ProductTitle>
                                Produtos em geral
                            </Styles.ProductTitle>
                        </Styles.ProductContainer>
                    </Styles.Button>
                    <Styles.ProductContainer>
                        <img src={ProdutosNatal} alt="Produtos Natal" />
                        <Styles.ProductTitle>
                            Produtos Natalinos
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer>
                        <img src={ProdutosPascoa} alt="Produtos Pascoa" />
                        <Styles.ProductTitle>
                            Produtos para Páscoa
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer>
                        <img src={Geleias} alt="Geleias" />
                        <Styles.ProductTitle>
                            Geleias e antepastos
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                </Styles.ImgContainer>  */}
            </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}