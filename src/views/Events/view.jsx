import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import BazarNatal from "../../assets/images/bazar-de-natal.png"
import BazarCreche from "../../assets/images/bazar-na-creche.png"

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
      'title': 'All Day Event very long title',
      'allDay': true,
      'start': new Date(2023, 10, 0),
      'end': new Date(2023, 10, 1)
    },
    {
      'title': 'Long Event',
      'start': new Date(2015, 3, 7),
      'end': new Date(2015, 3, 10)
    },
  
    {
      'title': 'DTS STARTS',
      'start': new Date(2016, 2, 13, 0, 0, 0),
      'end': new Date(2016, 2, 20, 0, 0, 0)
    },
  
  ];



export default function Events() {

        const [listEvent, setListEvent] = useState([]);

        async function getEvent(){
            const res = await fetch('http://localhost:3000/events')
            const data = await res.json() 
            setListEvent(data)
        } 

        useEffect(() => {
          getEvent()
        }, [])

        return (
            <Styles.ContainerMain>
            <Header />
            <Styles.ContentContainer>
              <Styles.ContainerTop>
                  <Styles.LeftContainer>
                    <Calendar
                      localizer={localizer}
                      events={listEvent}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 500 }}
                      />
                  </Styles.LeftContainer>
                  <Styles.RightContainer>
                      <Styles.Title>
                        Próximos Eventos
                      </Styles.Title>
                      <Styles.Text>
                        <Styles.EventTitle>
                          Feira do pastel
                        </Styles.EventTitle>  
                        Dia 29/09/23 à 07/10/23 <br /> 
                        Horário: 10:00 às 17:00 <br /> 
                        Local: Rua ...- São Paulo <br /> 
                        Sobre o evento: ......
                      </Styles.Text> <br />
                      <Styles.Text>
                        <Styles.EventTitle>
                        Feira do pastel
                        </Styles.EventTitle>  
                        Dia 29/09/23 à 07/10/23 <br /> 
                        Horário: 10:00 às 17:00 <br /> 
                        Local: Rua ...- São Paulo <br /> 
                        Sobre o evento: ......
                      </Styles.Text> <br />
                  </Styles.RightContainer>
                </Styles.ContainerTop>
                <Styles.ContainerMidle>

                </Styles.ContainerMidle>
                <Styles.ContainerBottom>
                      < Styles.Title>
                       Nossos Eventos Tradicionais
                      </Styles.Title>
                  <Styles.ContainerImg>
                    <img src={BazarNatal} alt="Bazar de Natal" />
                        <Styles.TextImg>
                          <Styles.EventTitle>
                          Bazar de Natal
                          </Styles.EventTitle>   
                          <Styles.Text>
                           Nosso Bazar de Natal acontece todos os anos, cheio de itens decorados lindamente com a temática de Natal! Através dele conseguimos arrecadar fundos para continuar nosso trabalho ajudando cada vez mais pessoas.
                           </Styles.Text>
                        </Styles.TextImg>
                    </Styles.ContainerImg>
                    <Styles.ContainerImg>
                    <img src={BazarCreche} alt="Bazar na Creche" />
                        <Styles.TextImg>
                          <Styles.EventTitle>
                            Bazar na Creche
                          </Styles.EventTitle>   
                          <Styles.Text>
                            Sempre organizamos nosso bazar na creche, lá você encontra muitos itens feitos artezanalmente. 
                          </Styles.Text>
                        </Styles.TextImg>
                    </Styles.ContainerImg>
                </Styles.ContainerBottom>
            </Styles.ContentContainer>
        </Styles.ContainerMain>
        )
}