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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: ${px2vw(570)};
    margin-top:${px2vw(160)};
    background-color: #FFF;
`

export const Title = styled.h2`
    width: ${px2vw(500)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${px2vw(30)};
    margin-top: ${px2vw(-10)};
    border-bottom: solid #000D3F;
    color: #000D3F;

    font-family: Bree Serif;
    font-size: ${px2vw(30)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SubmitButton = styled.button`
    border-radius: ${px2vw(9)};
    border: none;
    background: #000D3F;
    margin-top: ${px2vw(5)};
    cursor:pointer;

    display: flex;
    width: ${px2vw(400)};
    height: ${px2vw(58)};
    padding: ${px2vw(15)} ${px2vw(54)};
    justify-content: center;
    align-items: center;
    gap: ${px2vw(10)};
    flex-shrink: 0;

    color: #FFF;
    font-family: Segoe UI;
    font-size: ${px2vw(18)};
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: ${px2vw(0.7)};

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(120)};
        width: ${px2vw(400)};
        height: ${px2vw(90)};
    }
`