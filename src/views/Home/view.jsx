import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import ImgHome from "../../assets/images/img-home.png";


export default function Home() {

    return (
        <Styles.ContainerMain>
            <Header />
            <Styles.ContentContainer>
                <Styles.ImgContainer>
                    <img src={ImgHome} alt="Image Home" />
                    <Styles.Text>
                    Junte-se a nós nessa jornada de amor e solidariedade, tornando-se parte essencial do impacto positivo que buscamos alcançar.
                    </Styles.Text>
                </Styles.ImgContainer>
                <Styles.TextContainer>
                    <Styles.Title>
                        Sobre nós
                    </Styles.Title>
                    <Styles.Text>
                    Bem-vindo ao Instituto das Filhas e Filhos do Coração Imaculado de Maria – IFFCIM, uma instituição de caráter filantrópico, beneficente, educacional e sem fins lucrativos dedicada a fazer a diferença nas vidas daqueles que mais precisam. <br />
                    Através da Creche Nossa Senhora de Fátima, proporcionamos cuidado e educação a 70 crianças, suas famílias e todos que buscam apoio direto ou indireto. Buscamos continuamente apoiar a comunidade por meio de ações sociais e melhorias na Creche. Cada contribuição é valorizada e crucial para o sucesso de nossa missão. <br /><br />
                    Fundado por Irmã Maria Liliana na década de 70, o Instituto expandiu suas atividades para além da creche, oferecendo formação religiosa, acolhimento em Ponta Grossa - PR, e orientação para adolescentes. Nossa equipe dedicada, composta por membros de diferentes partes do Brasil e Itália, trabalha incansavelmente para compartilhar o conhecimento da vida de Cristo e fornecer auxílio às famílias carentes. <br />
                   </Styles.Text>
                </Styles.TextContainer>
            </Styles.ContentContainer>
        </Styles.ContainerMain>
    )
}
