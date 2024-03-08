import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";


export const ContainerMain = styled.div`
    background-color: #000D3F;
    width: 100vw;
    height: 100vh;

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
    margin-top:${px2vw(50)};
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

export const InputContainer = styled.form`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const InputContent = styled.input`
    border-radius: ${px2vw(20)};
    width: ${px2vw(300)};
    height: ${px2vw(36)};
    flex-shrink: 0;
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(48)};
    text-align: center;

    background: #FFF;
    font-size: ${px2vw(18)};

    @media ${device.mobileM}{
        width: ${px2vw(600)};
        height: ${px2vw(70)};

        font-size: ${px2vw(30)};   
    }
`

export const InputLabel = styled.label`
    display:flex;
    justify-content: center;
    flex-direction: column;
    
    color: #000D3F;
    text-align: center;
    font-family: Segoe UI;
    font-size: ${px2vw(20)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: ${px2vw(1.3)};
    text-transform: capitalize;
    background: none;

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(60)};
    }
`

export const SubmitButton = styled.button`
    border-radius: ${px2vw(9)};
    border: none;
    background: #000D3F;
    margin-top: ${px2vw(5)};
    cursor:pointer;

    display: flex;
    width: ${px2vw(282)};
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
    font-weight: 500;
    line-height: normal;
    letter-spacing: ${px2vw(0.4)};

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(120)};
        width: ${px2vw(400)};
        height: ${px2vw(90)};
    }
`