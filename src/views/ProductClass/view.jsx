import React, { useState, useRef } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import ProdutosGerais from "../../assets/images/produtos-gerais.png";
import ProdutosNatal from "../../assets/images/vela-de-natal.png";
import ProdutosPascoa from "../../assets/images/guirlanda-pascoa.png";
import Geleias from "../../assets/images/geleias.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigate, useNavigate } from 'react-router-dom';


export default function ProductClass() {

    const navigate = useNavigate();

    function handleBack(){
        navigate("/produtos");
    }

    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
      Array.from({ length: 100 }).map((_, index) => `Slide ${index + 1}`)
    );
  
    const prepend = () => {
      setSlides([
        `Slide ${prependNumber.current - 2}`,
        `Slide ${prependNumber.current - 1}`,
        ...slides,
      ]);
      prependNumber.current = prependNumber.current - 2;
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };
  
    const append = () => {
      setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };
  
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0);
    };

        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                <Styles.TextContainer>
                    <Styles.Title>
                        Produtos
                    </Styles.Title>
                    <Styles.Text>
                    <br />
                    Entre em contato conosco para saber mais!
                    </Styles.Text>
                    <Styles.BackToProducts onClick={handleBack}>
                        Retornar para produtos
                    </Styles.BackToProducts>
                </Styles.TextContainer>
                <Styles.ImgContainer>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    virtual
                >
                    {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                    ))}
      </Swiper>
                </Styles.ImgContainer>
            </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}