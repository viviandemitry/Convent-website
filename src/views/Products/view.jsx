import React, { useState } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import ProdutosGerais from "../../assets/images/produtos-gerais.png";
import ProdutosNatal from "../../assets/images/vela-de-natal.png";
import ProdutosPascoa from "../../assets/images/guirlanda-pascoa.png";
import Geleias from "../../assets/images/geleias.png";
import { Navigate, useNavigate } from 'react-router-dom';


export default function Products() {

        const navigate = useNavigate();

        function handleProd(category){
            navigate(`/categoria/${category}`)
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
                <Styles.ImgContainer>
                        <Styles.ProductContainer onClick={() => handleProd("Gerais")}>
                            <img src={ProdutosGerais} alt="Produtos Gerais" />
                            <Styles.ProductTitle>
                                Produtos em geral
                            </Styles.ProductTitle>
                        </Styles.ProductContainer>
                    <Styles.ProductContainer onClick={() => handleProd("Natal")}>
                        <img src={ProdutosNatal} alt="Produtos Natal" />
                        <Styles.ProductTitle>
                            Produtos Natalinos
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer onClick={() => handleProd("Pascoa")}>
                        <img src={ProdutosPascoa} alt="Produtos Pascoa" />
                        <Styles.ProductTitle>
                            Produtos para Páscoa
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer onClick={() => handleProd("Geleias")}>
                        <img src={Geleias} alt="Geleias" />
                        <Styles.ProductTitle>
                            Geleias e antepastos
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                </Styles.ImgContainer> 
            </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}