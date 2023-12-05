import React, {useState} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import { useNavigate, useLocation } from 'react-router-dom';


export default function CreatingEvents() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [about, setAbout] = useState('');

    function handleName(e){
        setName(e.target.value);
      }
    
      function handleDate(e){
        setDate(e.target.value);
      }

      function handleTime(e){
        setDate(e.target.value);
      }
    
      function handleAddress(e){
        setAddress(e.target.value);
      }

      function handleAbout(e){
        setAbout(e.target.value);
      }

      async function handleClick(e){
            // e.preventDefault()
            // const data = {
            //     name,
            //     date,
            //     address,
            //     about
            // }
            // const response = await fetch('https://api-express-mongodb.onrender.com/api/cadastrar', {method: 'POST', headers: {'Content-Type': 'application/json',},
            // body: JSON.stringify(data),})
            // console.log(response)
            // props.setIsRegister(false)
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
                  <Styles.InputContent type="text" placeholder="Escreva o nome do Evento" onChange={handleName} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Data de início
                  <Styles.InputContent type="date" placeholder="Selecione a data" onChange={handleDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Data final
                  <Styles.InputContent type="date" placeholder="Selecione a data" onChange={handleDate} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Endereço
                  <Styles.InputContent type="texto" placeholder="Escreva o endereço" onChange={handleAddress} />
                </Styles.InputLabel>
              </Styles.LeftSide>
              <Styles.RighttSide>
                <Styles.InputLabel>
                  Horário de início
                  <Styles.InputContent type="time" placeholder="Selecione a data" onChange={handleTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Horário do fim
                  <Styles.InputContent type="time" placeholder="Selecione a data" onChange={handleTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Descrição 
                  <Styles.InputContent type="texto" placeholder="Descreva o evento" onChange={handleAbout} />
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
