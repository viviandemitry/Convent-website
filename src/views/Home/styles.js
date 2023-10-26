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

export const ContentContainer = styled.div`
    display:flex;
    width: 100%;
    height: ${px2vw(550)};
    margin-top:${px2vw(200)};
    background-color: #FFF;
`

export const ImgContainer = styled.div`

    img {
        width: ${px2vw(700)};
        height: ${px2vw(500)};
    }
`

export const TextContainer = styled.div`

`

export const Title = styled.h2`
    margin-left: ${px2vw(50)};
    margin-top: ${px2vw(50)};
    color: #5A9DCD;

    font-family: Bree Serif;
    font-size: ${px2vw(30)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Text = styled.p`
    width: ${px2vw(600)};
    margin-left: ${px2vw(50)};
    color: #011F66;

    font-family: Segoe UI;
    font-size: ${px2vw(23)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`