import React, {useState} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import Produto from "../../assets/images/produtos-gerais.png";
import IconeDelete from "../../assets/icons/delete-icon.png";
import IconLeft from "../../assets/icons/arrow-left.png"
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';


export default function CreatingProduct() {

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
            const response = await fetch('http://localhost:3000/create-event', {method: 'POST', headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),})
            console.log(response)
            
          }

          
            const options = [
              { value: "Produtos em geral", label: "Produtos em geral" },
              { value: "Produtos Natalinos", label: "Produtos Natalinos" },
              { value: "Produtos para Páscoa", label: "Produtos para Páscoa" },
              { value: "Geleias e Antepastos", label: "Geleias e Antepastos" },
            ];

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
                Lista de Produtos:
              </Styles.Title>
              <Styles.SecondTitle>
                Adicione novo produto:
              </Styles.SecondTitle>
            </Styles.Titles>
            <Styles.ContentContainer>
              <Styles.LeftSide>
                <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
                 <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
                 <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
                 <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
                 <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
                 <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
                 <Styles.Product>
                   <img src={Produto} alt="logo" />
                   Produto 1
                   <img src={IconeDelete} alt="logo" />
                   <Styles.DeleteText>
                    Excluir
                   </Styles.DeleteText>
                 </Styles.Product>
              </Styles.LeftSide>
              <Styles.RighttSide>
                <Styles.InputLabel>
                  Nome do produto
                  <Styles.InputContent type="texto" placeholder="Escreva o nome do produto" onChange={handleEventDescription} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Selecione a imagem
                  <Styles.InputContentFile type="file" onChange={handleInitialTime} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Selecione a categoria do produto
                </Styles.InputLabel>
                <Select options={options} />
                <Styles.SubmitButton type="submit" onClick={handleClick}>
                  Adicionar produto
                </Styles.SubmitButton>
              </Styles.RighttSide> 
            </Styles.ContentContainer>
          </Styles.FormContent>
        </Styles.ContainerMain>
    )
}
