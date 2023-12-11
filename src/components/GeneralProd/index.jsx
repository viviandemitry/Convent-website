import React from 'react'
import * as Styles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import ProdutosGerais from "../../assets/images/produtos-gerais.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



export default function GeneralProd() {

    const navigate = useNavigate();

    // function handleClick(){
    //     setIsGeneralProd(false)
    // }


    return (
        <Styles.ContainerMain>
           <Styles.ReturnButton type="button">
            Retornar aos produtos
           </Styles.ReturnButton>
           <Styles.ImgContainer>
           <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
            <SwiperSlide>
                    <Styles.ProductContainer>
                        <img src={ProdutosGerais} alt="Produtos Gerais" />
                        <Styles.ProductTitle>
                            Produtos em geral
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
                    <Styles.ProductContainer>
                        <img src={ProdutosGerais} alt="Produtos Gerais" />
                        <Styles.ProductTitle>
                            Produtos em geral
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
            </SwiperSlide>
            <SwiperSlide>
                    <Styles.ProductContainer>
                        <img src={ProdutosGerais} alt="Produtos Gerais" />
                        <Styles.ProductTitle>
                            Produtos em geral
                        </Styles.ProductTitle>
                    </Styles.ProductContainer>
            </SwiperSlide>
        </Swiper>
        </Styles.ImgContainer>
        </Styles.ContainerMain>
    )
}
