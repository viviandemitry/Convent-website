import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const ContainerMain = styled.div`
    background-color: #000D3F;
    width: 100vw;
    height: 100vh;
    display:flex;


    @media ${device.mobileM}{
        display:flex;
    }
    
`

export const ContentContainer = styled.div`
    display:flex;
    width: 100%;
    height: ${px2vw(800)};
    margin-top:${px2vw(160)};
    background-color: #FFF;

    @media ${device.mobileM}{
      flex-direction: column;
      height: 100%;
      margin-top: -40px;
      justify-content: flex-end;
      align-content: center;
      overflow: scroll;
    }
`

export const ImgContainer = styled.div`
    margin-top: ${px2vw(50)};
    margin-left: ${px2vw(25)};
    img {
        width: ${px2vw(700)};
        height: ${px2vw(500)};
    }

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        margin-left: ${px2vw(50)};

        img {
        width: ${px2vw(900)};
        height: ${px2vw(700)};
    }
    }
`

export const TextContainer = styled.div`

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
    }
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

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        font-size: ${px2vw(60)};
    }
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

    @media ${device.mobileM}{
        margin-top: ${px2vw(50)};
        font-size: ${px2vw(40)};
        width: 70%;
    }
`