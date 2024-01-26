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
        flex-direction: row;
    }
    
`

export const ContentContainer = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    height: ${px2vw(570)};
    margin-top:${px2vw(160)};
    background-color: #FFF;

    @media ${device.mobileM}{
        flex-direction: column;
        height: 70%;
        margin: auto;
        margin-top:0;
    }

`

export const LeftContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    margin-left: ${px2vw(100)};

    @media ${device.mobileM}{
        padding-top: ${px2vw(150)}; 
    }

`

export const Line = styled.div`
    display:flex;
    flex-direction: column;
    width: ${px2vw(1)};
    height: ${px2vw(260)};
    margin: auto;
    background: #5A9DCD;

    @media ${device.mobileM}{
        width: ${px2vw(260)};
        height: ${px2vw(1)};
        margin-top: 15px;
        margin-left: 30px;
        margin-bottom: 15px;
    }
`

export const RightContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    margin-top: ${px2vw(180)};
    margin-left: ${px2vw(100)};

    @media ${device.mobileM}{
        margin-top: 0px;
    }
`

export const Title = styled.h2`
    margin-top: ${px2vw(100)};
    color: #5A9DCD;

    font-family: Bree Serif;
    font-size: ${px2vw(40)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media ${device.mobileM}{
        font-size: ${px2vw(80)};
    }
`

export const Text = styled.p`
    width: 80%;
    padding: 0;
    margin: 0;

    font-size: ${px2vw(20)};

    @media ${device.mobileM}{
          width: 100%;

        font-size: ${px2vw(50)};
    }
`