import React, {useState} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
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
            const data = {
                eventName,
                initialDate,
                finalDate,
                initialTime,
                finalTime,
                eventAddress,
                eventDescription
            }
            const response = await fetch('http://localhost:3000/create-event', {method: 'POST', headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),})
            console.log(response)
            
          }

    return (
        <Styles.ContainerMain>
          <img src={Logo} alt="logo" />
          <Styles.FormContent>
            <Styles.Title>
              Cadastre um evento:
            </Styles.Title>
            <Styles.ContentContainer>
              <Styles.LeftSide>
                <Styles.InputLabel>
                  Nome do Evento
                  <Styles.InputContent type="text" placeholder="Escreva o nome do Evento" onChange={handleEventName} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Data de início
                  <Styles.InputContent type="date" placeholder="Selecione a data" onChange={handleInitialDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Data final
                  <Styles.InputContent type="date" placeholder="Selecione a data" onChange={handleFinalDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Endereço
                  <Styles.InputContent type="texto" placeholder="Escreva o endereço" onChange={handleEventAddress} />
                </Styles.InputLabel>
              </Styles.LeftSide>
              <Styles.RighttSide>
                <Styles.InputLabel>
                  Horário de início
                  <Styles.InputContent type="time" placeholder="Selecione a data" onChange={handleInitialTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Horário do fim
                  <Styles.InputContent type="time" placeholder="Selecione a data" onChange={handleFinalTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Descrição 
                  <Styles.InputContent type="texto" placeholder="Descreva o evento" onChange={handleEventDescription} />
                </Styles.InputLabel>
                <Styles.SubmitButton type="submit" onClick={handleClick}>
                  CRIAR EVENTO
                </Styles.SubmitButton>
              </Styles.RighttSide> 
            </Styles.ContentContainer>
          </Styles.FormContent>

        </Styles.ContainerMain>
    )
}
