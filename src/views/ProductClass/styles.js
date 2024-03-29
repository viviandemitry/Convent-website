import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";


export const ContainerMain = styled.div`
    background-color: #000D3F;
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;


    @media ${device.mobileM}{
      
    }
    
`
export const NameText = styled.p`
    color: #011F66;
    font-weight: 300;
    font-size: ${px2vw(18)};
    
`
export const ContentContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: ${px2vw(570)};
    margin-top:${px2vw(50)};
    background-color: #FFF;
`

export const TextContainer = styled.div`
    flex-direction: column;
    width: 80%;
`

export const Title = styled.h2`
    margin-left: ${px2vw(50)};
    margin-top: ${px2vw(10)};
    color: #5A9DCD;

    font-family: Bree Serif;
    font-size: ${px2vw(30)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Text = styled.p`
    width: 100%;
    margin-left: ${px2vw(50)};
    color: #011F66;

    font-family: Segoe UI;
    font-size: ${px2vw(23)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// export const ProductTitle = styled.p`
//     width: ${px2vw(230)};
//     margin-left: 0;
//     margin-top: ${px2vw(15)};
    
//     color: #011F66;

//     font-family: Segoe UI;
//     font-size: ${px2vw(23)};
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     cursor:pointer;
// `
export const BackToProducts = styled.button`
    border: none;
    margin-left: ${px2vw(50)};

    color: #000D3F;
    font-family: Segoe UI;
    font-size: ${px2vw(18)};
    font-weight: 500;
    cursor:pointer;
    text-decoration: underline;
`
export const ImgContainer = styled.div`
    .swiper {
  width: 100%;
  height: 100%;
  
}

.swiper-slide {
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  background: #fff;

  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  
  width: 80%;
  height: 80%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: ${px2vw(30)} auto;
}

.swiper-pagination{
    margin-top: ${px2vw(10)};
}

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
    display: none;
}

`
export const ProductContainer = styled.div`
    flex-direction: column;
    margin-left: ${px2vw(50)};
`



