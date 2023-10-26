import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { device } from "../../utils/brakePoints";

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
    margin-top: 50px;
`
export const FirstBotton = styled.button`
        background: none;
        border: none;
       
`

export const Button = styled.button`
    background: none;
    border-top: none;
    border-bottom: none;
    border-right: none;
    border-left-color: #011F66;
    padding-left: 50px;
    margin-left: 50px;

    color: #011F66;
    font-family: Segoe UI;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
`

export const LoginButton = styled.button`
        background: #011F66;
        border: none;
        margin-top: 40px;
        margin-left: 60px;
        padding: 0 30px;
        color: white;
       
`