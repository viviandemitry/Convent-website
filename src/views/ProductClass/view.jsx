import React, { useState, useRef, useEffect} from 'react'
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
import { Navigate, useNavigate,  useParams } from 'react-router-dom';


export default function ProductClass() {

    const navigate = useNavigate();
    const [swiperRef, setSwiperRef] = useState(null);
    const [slides, setSlides] = useState(
      Array.from({ length: 100 }).map((_, index) => `Slide ${index + 1}`)
    );
    const [productList, setProductList] = useState([]);
    const params = useParams();

    function handleBack(){
        navigate("/produtos");
    }

    async function handleProducts(category){
      const response = await fetch(`http://localhost:3000/products/${params.category}`)
      const dataProduct = await response.json()
      console.log(dataProduct)
      setProductList(dataProduct)
    }    

    useEffect(() => {
      handleProducts()
    }, [])

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
                    {productList.map((product, index) => (
                    <SwiperSlide key={product.productName} virtualIndex={index}>
                    <img src={product.image} alt="Produto" />
                    <Styles.NameText>
                      {product.productName}
                    </Styles.NameText>
                    </SwiperSlide>
                    ))}
      </Swiper>
                </Styles.ImgContainer>
            </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}