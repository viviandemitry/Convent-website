import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import { NavLink } from 'react-router-dom';

export const ContainerMain = styled.div`
    display: flex;
    background-color: #FFF;
    height: ${px2vw(90)};
    padding: ${px2vw(14)};

    @media ${device.mobileM}{
      flex-direction: column;
      width: ${px2vw(300)};
      height: auto;
      background: none;
      padding: ${px2vw(50)};

      img {
        width: ${px2vw(250)};
        height: ${px2vw(250)};
      }
    }

`
export const AllBottons = styled.div`
    margin-left: ${px2vw(70)};
    margin-top: ${px2vw(40)};

    @media ${device.mobileM}{
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-left: 0;
    }
`
export const FirstBotton = styled.button`
        background: none;
        border: none;

    @media ${device.mobileM}{
        color: #FFF;
        font-size: ${px2vw(50)};
        width: ${px2vw(250)};
        padding-left: 0;
        margin-left: 0;
        
    }
`

export const Button = styled(NavLink)`
    background: none;
    padding-left: ${px2vw(50)};
    margin-left: ${px2vw(50)};
    cursor:pointer;
    text-decoration: none;

    color: #000D3F;
    font-family: Segoe UI;
    font-size: ${px2vw(20)};
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:hover {
        color: #5A9DCD;
        font-weight: 500;
    }

    &:focus {
        color: #5A9DCD;
        font-weight: 500;
    }

    &.active {
        color: #5A9DCD;
        font-weight: 500;
    }

    @media ${device.mobileM}{
        color: #FFF;
        font-size: ${px2vw(50)};
        padding-left: 0;
        margin-left: 0;
        width: ${px2vw(350)};
    }
    
`

export const LoginButton = styled.button`
        background: #000D3F;
        border: none;
        margin-top: ${px2vw(40)};
        margin-left: ${px2vw(60)};
        padding: ${px2vw(0)} ${px2vw(27)};
        color: white;
        cursor:pointer;
        border-radius: ${px2vw(9)};

        &:hover {
        color: #5A9DCD;
    }

    @media ${device.mobileM}{
        color: #FFF;
        font-size: ${px2vw(40)};
        border: solid #FFF;
        width: ${px2vw(150)};
        margin: ${px2vw(100)} ${px2vw(0)};
        padding: ${px2vw(10)} ${px2vw(0)};
    }
       
`