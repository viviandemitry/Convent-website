import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import BazarNatal from "../../assets/images/bazar-de-natal.png"
import BazarCreche from "../../assets/images/bazar-na-creche.png"
import { formatCalender } from '../../utils/format'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


const localizer = momentLocalizer(moment)

// const myEventsList = [
//     {
//       'title': 'All Day Event very long title',
//       'allDay': true,
//       'start': new Date(2023, 10, 0),
//       'end': new Date(2023, 10, 1)
//     },
//     {
//       'title': 'Long Event',
//       'start': new Date(2015, 3, 7),
//       'end': new Date(2015, 3, 10)
//     },
  
//     {
//       'title': 'DTS STARTS',
//       'start': new Date(2016, 2, 13, 0, 0, 0),
//       'end': new Date(2016, 2, 20, 0, 0, 0)
//     },
  
//   ];  

export default function Events() {

        const [eventList, setEventList] = useState([]);
        const [formatList, setFormatList] = useState([]);

        async function handleEvents(){
          const response = await fetch('https://donation-project-pi.vercel.app/events')
          const dataEvent = await response.json()
          const formatData = formatCalender(dataEvent)
          console.log(dataEvent)
          setEventList(dataEvent)
          setFormatList(formatData)
        }    
      
        useEffect(() => {
          handleEvents()
        }, [])
        console.log(eventList)
        
        return (
            <Styles.ContainerMain>
            <Header />
            <Styles.ContentContainer>
              <Styles.ContainerTop>
                  <Styles.LeftContainer>
                    <Calendar
                      localizer={localizer}
                      events={formatList}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 500 }}
                      />
                  </Styles.LeftContainer>
                  <Styles.RightContainer>
                      <Styles.Title>
                        Próximos Eventos
                      </Styles.Title>
                      <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                      >
                       <SwiperSlide>
                      <Styles.ContainerText>
                        {eventList.map((event) => (
                         <Styles.ContainerInsideText> 
                        <Styles.EventTitle>
                          {event.eventName}
                        </Styles.EventTitle>  
                        <Styles.Text>
                        Dia { format(new Date(event.initialDate), "dd/MM/yy", { locale: ptBR })} à  { format(new Date(event.finalDate), "dd/MM/yy", { locale: ptBR })}
                        <br/>                       
                        Horário: {event.initialTime} às {event.finalTime}
                        <br/>
                        Local: {event.eventAddress}
                        <br/>
                        Sobre o evento: {event.eventDescription}
                      </Styles.Text>
                      </Styles.ContainerInsideText>
                      ))}
                    </Styles.ContainerText>
                    </SwiperSlide>
                    </Swiper>
                  </Styles.RightContainer>
                </Styles.ContainerTop>
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