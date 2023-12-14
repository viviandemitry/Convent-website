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
    flex-direction: column; 
    width: 100%;
    height: 100%;
    margin-top:${px2vw(160)};
    background-color: #FFF;

`

export const LeftContainer = styled.div`
    width: 70%;
    margin-left: ${px2vw(100)};
`

export const RightContainer = styled.div`
    flex-direction: column; 
    width: 50%;
    margin-top: ${px2vw(10)};
    margin-left: ${px2vw(100)};
`
export const ContainerTop = styled.div`
   display:flex;
`

export const ContainerMidle = styled.div`
   width: 100%;
   height: 5%;
   background-color: #000D3F;
`

export const ContainerBottom = styled.div`
   flex-direction: column; 
   margin-left: ${px2vw(100)};
   margin-top: ${px2vw(70)};
   padding-bottom: ${px2vw(70)};
`
export const Title = styled.h2`
    margin-top: ${px2vw(10)};
    color: #5A9DCD;

    font-family: Bree Serif;
    font-size: ${px2vw(40)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ContainerImg = styled.div`
    display:flex;

    img {

        width: ${px2vw(350)};
        height: ${px2vw(250)};
        padding-bottom: ${px2vw(50)};
    }
`

export const TextImg = styled.div`
   flex-direction: column; 
   padding-left: ${px2vw(40)};
   width: 50%;
`

export const EventTitle = styled.p`
    margin-top: ${px2vw(10)};
    color: #000D3F;

    font-family: Segoe UI;
    font-size: ${px2vw(22)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export const ContainerText = styled.div`
    
`
export const ContainerInsideText = styled.div`
    
`

export const Text = styled.p`
    /* width: 80%; */
    padding: 0;
    border: solid red;

    font-size: ${px2vw(20)};
    
`