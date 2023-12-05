import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

export const ContainerMain = styled.div`
    background-color: white;
    width: 100vw;
    height: 100%;
    margin: 0;

    img {
        padding: 14px;
    }
`

export const FormContent = styled.form`
    background: #000D3F;
    flex-direction: column;
    width: 100%;
    height: 80%;
`

export const Title = styled.h2`
    padding-left: ${px2vw(100)};
    padding-top: ${px2vw(20)};
    color:#FFF;
`

export const ContentContainer = styled.div`
    display:flex;
`

export const LeftSide = styled.div`
    background-color: #000D3F;
    width: 50%;
    height: 100%;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    padding-left: ${px2vw(100)};
    padding-top: ${px2vw(30)};
    padding-bottom: ${px2vw(50)};
`

export const RighttSide = styled.div`
    background-color: #000D3F;
    width: 50%;
    height: 100%;
    /* flex-direction: column; */
    padding-left: ${px2vw(10)};
    padding-top: ${px2vw(50)};
    padding-bottom: ${px2vw(50)};
`

export const InputContent = styled.input`
    border-radius: ${px2vw(20)};
    width: ${px2vw(300)};
    height: ${px2vw(36)};
    flex-shrink: 0;
    margin-top: ${px2vw(5)};
    margin-bottom: ${px2vw(48)};
    text-align: center;

    background: #FFF;
    box-shadow: 2px 1px 64px 0px rgba(144, 119, 214, 0.52);
    font-size: ${px2vw(15)};

    @media ${device.mobileM}{
        width: ${px2vw(600)};
        height: ${px2vw(70)};

        font-size: ${px2vw(30)};   
    }
`
export const InputLabel = styled.label`
    display:flex;
    flex-direction: column;
    
    color: #FFF;
    font-family: Segoe UI;
    font-size: ${px2vw(15)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: ${px2vw(1.3)};
    background: none;

    @media ${device.mobileM}{
        font-size: ${px2vw(40)};
        margin-top: ${px2vw(60)};
    }
`

export const SubmitButton = styled.button`
    border-radius: ${px2vw(9)};
    border: none;
    background: #FFF;
    margin-top: ${px2vw(5)};

    display: flex;
    width: ${px2vw(282)};
    height: ${px2vw(58)};
    padding: ${px2vw(15)} ${px2vw(54)};
    justify-content: center;
    align-items: center;
    gap: ${px2vw(10)};
    flex-shrink: 0;

    color: #000D3F;
    font-family: Segoe UI;
    font-size: ${px2vw(18)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: ${px2vw(0.4)};
`