import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import 'swiper/css';

export const ContainerMain = styled.div`
    flex-direction: column;
`

export const ReturnButton = styled.button`
        color: #000D3F;
        cursor:pointer;
        border-radius: ${px2vw(9)};
        margin-left: ${px2vw(50)};
        margin-bottom: ${px2vw(15)};

        &:hover {
        color: #5A9DCD;
    }
`
export const ImgContainer = styled.div`
    display:flex;
    img {
        width: ${px2vw(250)};
        height: ${px2vw(250)};
    }
`
export const ProductContainer = styled.div`
    flex-direction: column;
    margin-left: ${px2vw(50)};
`
export const ProductTitle = styled.p`
    width: ${px2vw(230)};
    margin-left: 0;
    margin-top: ${px2vw(15)};
    color: #011F66;

    font-family: Segoe UI;
    font-size: ${px2vw(23)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`