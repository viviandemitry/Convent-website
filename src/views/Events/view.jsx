import React from 'react'
import * as Styles from './styles'
import Header from '../../components/Header'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

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
  
    {
      'title': 'DTS ENDS',
      'start': new Date(2016, 10, 6, 0, 0, 0),
      'end': new Date(2016, 10, 13, 0, 0, 0)
    },
  
    {
      'title': 'Some Event',
      'start': new Date(2015, 3, 9, 0, 0, 0),
      'end': new Date(2015, 3, 9, 0, 0, 0)
    },
    {
      'title': 'Conference',
      'start': new Date(2015, 3, 11),
      'end': new Date(2015, 3, 13),
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': new Date(2015, 3, 12, 10, 30, 0, 0),
      'end': new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start': new Date(2015, 3, 12, 12, 0, 0, 0),
      'end': new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch'
    },
    {
      'title': 'Meeting',
      'start': new Date(2015, 3, 12, 14, 0, 0, 0),
      'end': new Date(2015, 3, 12, 15, 0, 0, 0)
    },
    {
      'title': 'Happy Hour',
      'start': new Date(2015, 3, 12, 17, 0, 0, 0),
      'end': new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day'
    },
    {
      'title': 'Dinner',
      'start': new Date(2015, 3, 12, 20, 0, 0, 0),
      'end': new Date(2015, 3, 12, 21, 0, 0, 0)
    },
  ];

export default function Events() {
        return (
            <Styles.ContainerMain>
            <Header />
            <Styles.ContentContainer>
                <Styles.LeftContainer>
                  <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    />
                </Styles.LeftContainer>
                <Styles.RightContainer>
                    <Styles.Title>
                        Eventos
                    </Styles.Title>
                    <Styles.Text>
                    Dia 29/09/23 - Feira do pastel
                    Local: Rua ...- São Paulo
                    Horário: 10:00 às 17:00.
                    Sobre o evento: ......
                    </Styles.Text> <br />
                    <Styles.Text>
                    Dia 29/09/23 - Feira do pastel
                    Local: Rua ...- São Paulo
                    Horário: 10:00 às 17:00.
                    Sobre o evento: ......
                    </Styles.Text> <br />
                    <Styles.Text>
                    Dia 29/09/23 - Feira do pastel
                    Local: Rua ...- São Paulo
                    Horário: 10:00 às 17:00.
                    Sobre o evento: ......
                    </Styles.Text>
                </Styles.RightContainer>
            </Styles.ContentContainer>
        </Styles.ContainerMain>
        )
}