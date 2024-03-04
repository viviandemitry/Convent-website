import React, {useState} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import IconLeft from "../../assets/icons/arrow-left.png"
import IconSquare from "../../assets/icons/square.png";
import { useNavigate, useLocation } from 'react-router-dom';


export default function ChangingContact() {

    const navigate = useNavigate();
    const [eventName, setEventName] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [finalTime, setFinalTime] = useState('');
    const [eventAddress, setEventAddress] = useState('');
    const [eventDescription, setEventDescription] = useState('');

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
            const data = {
                eventName,
                initialDate,
                finalDate,
                initialTime,
                finalTime,
                eventAddress,
                eventDescription
            }
            const response = await fetch('https://donation-project-pi.vercel.app/create-event', {method: 'POST', headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),})
            console.log(response)
            
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
                Informações de contato atuais:
              </Styles.Title>
              <Styles.SecondTitle>
                Atualize as informações:
              </Styles.SecondTitle>
            </Styles.Titles>
            <Styles.ContentContainer>
              <Styles.EventList>
                <Styles.Event>
                  <img src={IconSquare} alt="logo" />
                  Telefone:
                  <Styles.TextContent>
                   (11)3673-0077
                  </Styles.TextContent>
                </Styles.Event>
                <Styles.Event>
                  <img src={IconSquare} alt="logo" />
                  Email:
                  <Styles.TextContent>
                   segredosdoconventosc@gmail.com
                  </Styles.TextContent>
                </Styles.Event>
                <Styles.Event>
                  <img src={IconSquare} alt="logo" />
                  Facebook:
                  <Styles.TextContent>
                   https://web.facebook.com/Segredosconvento/
                  </Styles.TextContent>
                </Styles.Event>
                <Styles.Event>
                  <img src={IconSquare} alt="logo" />
                  Endereço:
                  <Styles.TextContent>
                    Av. Dr. Arnaldo, 1492 - Sumaré, São Paulo CEP: 01255-000
                  </Styles.TextContent>
                </Styles.Event>
              </Styles.EventList>
              <Styles.LeftSide>
                <Styles.InputLabel>
                  Telefone
                  <Styles.InputContent type="number" placeholder="Escreva o novo telefone" onChange={handleEventName} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Endereço:
                  <Styles.InputContent type="text" placeholder="Escreva o novo email" onChange={handleInitialDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Facebook
                  <Styles.InputContent type="text" placeholder="Escreva o novo link do facebook" onChange={handleFinalDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Endereço
                  <Styles.InputContent type="text" placeholder="Escreva o novo endereço" onChange={handleEventAddress} />
                </Styles.InputLabel>
                <Styles.SubmitButton type="submit" onClick={handleClick}>
                  CRIAR EVENTO
                </Styles.SubmitButton>
              </Styles.LeftSide>
            </Styles.ContentContainer>
          </Styles.FormContent>
        </Styles.ContainerMain>
    )
}
