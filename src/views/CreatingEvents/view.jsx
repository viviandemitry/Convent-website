import React, {useState, useEffect} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import IconLeft from "../../assets/icons/arrow-left.png"
import IconDelete from "../../assets/icons/delete-icon.png";
import IconCalendar from "../../assets/icons/calendar-icon.png";
import { useNavigate, useLocation } from 'react-router-dom';


export default function CreatingEvents() {

    const navigate = useNavigate();
    const [eventName, setEventName] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [finalTime, setFinalTime] = useState('');
    const [eventAddress, setEventAddress] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventList, setEventList] = useState([]);

    function handleBack(){
      navigate("/menu");
    }

    function handleEventName(e){
       setEventName(e.target.value);
      }
    
      function handleInitialDate(e){
        setInitialDate(e.target.value);
      }

      function handleFinalDate(e){
        setFinalDate(e.target.value);
      }

      function handleInitialTime(e){
        setInitialTime(e.target.value);
      }

      function handleFinalTime(e){
        setFinalTime(e.target.value);
      }
    
      function handleEventAddress(e){
        setEventAddress(e.target.value);
      }

      function handleEventDescription(e){
        setEventDescription(e.target.value);
      }

      async function handleClick(e){
            e.preventDefault()
            const token = sessionStorage.getItem("sessionToken")
            const data = {
                eventName,
                initialDate,
                finalDate,
                initialTime,
                finalTime,
                eventAddress,
                eventDescription
            }
            const response = await fetch('https://donation-project-pi.vercel.app/event/create', {method: 'POST', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(data),})
            console.log(response)
            handleEvents()
            setEventName('')
            setInitialDate('')
            setFinalDate('')
            setInitialTime('')
            setFinalTime('')
            setEventAddress('')
            setEventDescription('')
          }

      async function handleEvents(){
        const response = await fetch('https://donation-project-pi.vercel.app/events/list')
        const dataEvent = await response.json()
        console.log(dataEvent)
        setEventList(dataEvent)
      }    

      useEffect(() => {
        handleEvents()
      }, [])

      async function handleDelete(id){
        const token = sessionStorage.getItem("sessionToken")
        const response = await fetch(`https://donation-project-pi.vercel.app/event/${id}`, {method: 'DELETE', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })
        console.log(response)
        handleEvents()
      }


    return (
        <Styles.ContainerMain>
            <Styles.Header>
              <img src={Logo} alt="logo" />
              <img src={IconLeft} alt="Go back to menu" />
              <Styles.BackButton type="buttom" onClick={handleBack}>
                  Voltar ao menu
              </Styles.BackButton>
              </Styles.Header>
          <Styles.FormContent>
            <Styles.Titles>
              <Styles.Title>
                Lista de evento:
              </Styles.Title>
              <Styles.SecondTitle>
                Crie um novo evento:
              </Styles.SecondTitle>
            </Styles.Titles>
            <Styles.ContentContainer>
              <Styles.EventList>
                {eventList.map((event) => (
                <Styles.Event key={event._id}>
                  <img src={IconCalendar} alt="Calendario" />
                   {event.eventName}
                   <Styles.Delete onClick={() => handleDelete(event._id)}>
                   <img src={IconDelete} alt="lixeira" />
                   <Styles.DeleteText>
                    Excluir
                    </Styles.DeleteText>
                   </Styles.Delete>
                </Styles.Event>
                ))}
              </Styles.EventList>
              <Styles.LeftSide>
                <Styles.InputLabel>
                  Nome do Evento
                  <Styles.InputContent type="text" placeholder="Escreva o nome do Evento" onChange={handleEventName} value={eventName} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Data de início
                  <Styles.InputContent type="date" placeholder="Selecione a data" onChange={handleInitialDate} value={initialDate}/>
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Data final
                  <Styles.InputContent type="date" placeholder="Selecione a data" onChange={handleFinalDate} value={finalDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Endereço
                  <Styles.InputContent type="texto" placeholder="Escreva o endereço" onChange={handleEventAddress} value={eventAddress} />
                </Styles.InputLabel>
              </Styles.LeftSide>
              <Styles.RighttSide>
                <Styles.InputLabel>
                  Horário de início
                  <Styles.InputContent type="time" placeholder="Selecione a data" onChange={handleInitialTime} value={initialTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Horário do fim
                  <Styles.InputContent type="time" placeholder="Selecione a data" onChange={handleFinalTime} value={finalTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Descrição 
                  <Styles.InputContent type="texto" placeholder="Descreva o evento" onChange={handleEventDescription} value={eventDescription} />
                </Styles.InputLabel>
                <Styles.SubmitButton type="submit" onClick={handleClick}>
                  Criar Evento
                </Styles.SubmitButton>
              </Styles.RighttSide> 
            </Styles.ContentContainer>
          </Styles.FormContent>
        </Styles.ContainerMain>
    )
}
