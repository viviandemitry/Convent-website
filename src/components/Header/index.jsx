import React from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import { useNavigate, useLocation } from 'react-router-dom';


export default function Header() {

    const navigate = useNavigate();

    function goHome(){
        navigate("/")
    }

    function goHelp(){
        navigate("/comoajudar")
    }

    function goEvents(){
        navigate("/eventos")
    }

    function goProducts(){
        navigate("/produtos")
    }

    function goContact(){
        navigate("/contato")
    }

    function goLogin(){
        navigate("/login")
    }

    return (
        <Styles.ContainerMain>
            <img src={Logo} alt="logo" />
            <Styles.AllBottons>
                <Styles.FirstBotton>
                    <Styles.Button to="/">
                    Sobre nós
                    </Styles.Button>
                </Styles.FirstBotton>
                <Styles.Button to="/comoajudar">
                    Como ajudar
                </Styles.Button>
                <Styles.Button to="/eventos">
                    Eventos
                </Styles.Button>
                <Styles.Button to="/produtos">
                    Produtos
                </Styles.Button>
                <Styles.Button to="/contato">
                    Contato
                </Styles.Button>
            </Styles.AllBottons>
            <Styles.LoginButton onClick={goLogin}>
                Admin
            </Styles.LoginButton>
        </Styles.ContainerMain>
    )
}
