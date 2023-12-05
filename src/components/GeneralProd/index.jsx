import React from 'react'
import * as Styles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import ProdutosGerais from "../../assets/images/produtos-gerais.png";
import Swiper from 'swiper';



export default function GeneralProd() {
    const navigate = useNavigate();

    return (
        <Styles.ContainerMain>
           

           <Styles.ImgContainer>
                    <Styles.ProductContainer>
                    
                        <img src={ProdutosGerais} alt="Produtos Gerais" />
                        
                        <Styles.ProductTitle>
                            Produtos em geral
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
            </Styles.ImgContainer>
   
        </Styles.ContainerMain>
    )
}
