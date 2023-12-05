import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";
import { NavLink } from 'react-router-dom';

export const ContainerMain = styled.div`
    display: flex;
    position: fixed;
    background-color: #FFF;
    width: 100%;
    height: 83px;
    padding: 14px;
    margin: 0;

`
export const AllBottons = styled.div`
    margin-left: 70px;
    margin-top: 40px;
`
export const FirstBotton = styled.button`
        background: none;
        border: none;
       
`

export const Button = styled(NavLink)`
    background: none;
    padding-left: 50px;
    margin-left: 50px;
    cursor:pointer;
    text-decoration: none;

    color: #000D3F;
    font-family: Segoe UI;
    font-size: 20px;
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
    
`

export const LoginButton = styled.button`
        background: #000D3F;
        border: none;
        margin-top: 40px;
        margin-left: 60px;
        padding: 0 27px;
        color: white;
        cursor:pointer;
        border-radius: ${px2vw(9)};

        &:hover {
        color: #5A9DCD;
    }
       
`