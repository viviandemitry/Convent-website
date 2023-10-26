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
    width: 100%;
    height: ${px2vw(550)};
    margin-top:${px2vw(200)};
    background-color: #FFF;
`

export const Title = styled.h2`
    width: ${px2vw(800)};
    margin-left: ${px2vw(150)};
    margin-top: ${px2vw(50)};
    padding-bottom: ${px2vw(30)};
    border-bottom: solid #5A9DCD;
    color: #5A9DCD;

    font-family: Bree Serif;
    font-size: ${px2vw(30)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContactInfo = styled.div`
    width: 100%;
    margin-left: ${px2vw(100)};
    display: flex;
`

export const Text = styled.p`
    /* width: ${px2vw(600)}; */
    margin-left: ${px2vw(50)};
    color: #011F66;

    font-family: Segoe UI;
    font-size: ${px2vw(23)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`