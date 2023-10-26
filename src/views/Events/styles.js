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
    flex-direction: row;
    width: 100%;
    height: ${px2vw(550)};
    margin-top:${px2vw(200)};
    background-color: #FFF;

`

export const LeftContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    margin-left: ${px2vw(100)};
`

export const RightContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    margin-top: ${px2vw(10)};
    margin-left: ${px2vw(100)};
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

export const Text = styled.p`
    width: 80%;
    padding: 0;
    margin: 0;

    font-size: ${px2vw(20)};
    
`