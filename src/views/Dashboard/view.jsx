import React, { useState } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

    const navigate = useNavigate()

    function addEvent(){
        navigate("/eventosadm")
    }

    function addProduct(){
        navigate("/produtosadm")
    }

    function changeContact(){
        navigate("/contatoadm")
    }

        return (
            <Styles.ContainerMain>
                <Header />
                <Styles.ContentContainer>
                    <Styles.Title>
                        Menu de Opções
                    </Styles.Title>
                    <Styles.SubmitButton type="button" onClick={addEvent}>
                        Cadastrar/Excluir Eventos
                    </Styles.SubmitButton>
                    <Styles.SubmitButton type="button" onClick={addProduct}>
                        Adicionar/Excluir Produtos
                    </Styles.SubmitButton>
                    {/* <Styles.SubmitButton type="button" onClick={changeContact}>
                        Alterar Contato
                    </Styles.SubmitButton>
                    <Styles.SubmitButton type="button">
                        Alterar Dados Para Doação
                    </Styles.SubmitButton>
                    <Styles.SubmitButton type="button">
                        Alterar Texto Página Inicial
                    </Styles.SubmitButton> */}
                </Styles.ContentContainer>
            </Styles.ContainerMain>

        )
}