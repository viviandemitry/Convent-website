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
                    <Styles.Button onClick={goHome}>
                        Sobre nós
                    </Styles.Button>
                </Styles.FirstBotton>
                <Styles.Button onClick={goHelp}>
                    Como ajudar
                </Styles.Button>
                <Styles.Button onClick={goEvents}>
                    Eventos
                </Styles.Button>
                <Styles.Button onClick={goProducts}>
                    Produtos
                </Styles.Button>
                <Styles.Button onClick={goContact}>
                    Contato
                </Styles.Button>
            </Styles.AllBottons>
            <Styles.LoginButton onClick={goLogin}>
                Login
            </Styles.LoginButton>
        </Styles.ContainerMain>
    )
}
