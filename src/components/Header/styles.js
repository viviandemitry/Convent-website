import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import { NavLink } from 'react-router-dom';

export const ContainerMain = styled.div`
    display: flex;
    position: fixed;
    background-color: #FFF;
    width: 100%;
    height: ${px2vw(83)};
    padding: ${px2vw(14)};
    margin: 0;

    @media ${device.mobileM}{
      flex-direction: column;
      position: relative;

      img {
        width: ${px2vw(150)};
        height: ${px2vw(150)};
      }
    }

`
export const AllBottons = styled.div`
    margin-left: ${px2vw(70)};
    margin-top: ${px2vw(40)};

    @media ${device.mobileM}{
        display: flex;
        flex-direction: column;
    }
`
export const FirstBotton = styled.button`
        background: none;
        border: none;

        @media ${device.mobileM}{
      
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
       
`