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
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding-top: ${px2vw(20)};
`
export const FormContent = styled.form`
    background: #000D3F;
    flex-direction: column;
    width: 100%;
    height: 80%;
`
export const Titles = styled.div`
    display: flex;
`
export const Title = styled.h2`
    padding-left: ${px2vw(100)};
    padding-top: ${px2vw(10)};
    padding-bottom: ${px2vw(10)};
    width: 30%;
    color:#FFF;
`
export const TextContent = styled.p`
    padding-left: ${px2vw(10)};
    padding-top: ${px2vw(10)};
    padding-bottom: ${px2vw(10)};
    color:#000D3F;
`
export const SecondTitle = styled.h2`
    margin-left: ${px2vw(90)};
    padding-top: ${px2vw(10)};
    color:#FFF;
`

export const ContentContainer = styled.div`
    display:flex;
`
export const EventList = styled.div`
        background-color: #FFF;
        width: 40%;
        height: ${px2vw(300)};
        overflow-x: auto;
        align-items: center;
        justify-content: center;
        margin-left: ${px2vw(100)};
        padding-left: ${px2vw(10)};
        padding-top: ${px2vw(30)};
        padding-bottom: ${px2vw(50)};
`
export const Event = styled.div`
    display:flex;
    color: #000D3F;
    align-items: center;
    cursor:pointer;

    img {
        width: 40px;
        height: 40px;
    }
`
export const DeleteText = styled.p`
    color: #000D3F;
    align-items: center;
    font-size:${px2vw(12)};
    margin-left: ${px2vw(-25)};
    cursor:pointer;
`
export const LeftSide = styled.div`
    background-color: #000D3F;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-left: ${px2vw(100)};
    padding-bottom: ${px2vw(50)};
`

export const RighttSide = styled.div`
    background-color: #000D3F;
    width: 30%;
    height: 100%;
    padding-left: ${px2vw(10)};
    padding-bottom: ${px2vw(50)};
`

export const InputContent = styled.input`
    border-radius: ${px2vw(5)};
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
export const BackButton = styled.button`
    border: none;
    margin-left: ${px2vw(-25)};

    color: #000D3F;
    font-family: Segoe UI;
    font-size: ${px2vw(18)};
    font-weight: 500;
    cursor:pointer;
    text-decoration: underline;

`
export const SubmitButton = styled.button`
    border-radius: ${px2vw(9)};
    border: none;
    background: #FFF;
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

    color: #000D3F;
    font-family: Segoe UI;
    font-size: ${px2vw(18)};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: ${px2vw(0.4)};
`