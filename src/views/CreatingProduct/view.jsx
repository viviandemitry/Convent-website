import React, {useState, useEffect} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import Produto from "../../assets/images/produtos-gerais.png";
import IconDelete from "../../assets/icons/delete-icon.png";
import IconLeft from "../../assets/icons/arrow-left.png"
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';


export default function CreatingProduct() {

    const navigate = useNavigate();
    const [productName, setproductName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [productList, setProductList] = useState([]);

    function handleBack(){
      navigate("/menu");
    }

    function handleProductName(e){
      setproductName(e.target.value);
      }
    
      function handleImage(e){
        setImage(e.target.value);
      }

      function handleCategory(e){
        setCategory(e.target.value);
      }

      async function handleClick(e){
            e.preventDefault()
            const token = sessionStorage.getItem("sessionToken")
            const data = {
              productName,
              image,
              category
            }
            const response = await fetch('http://localhost:3000/product/create', {method: 'POST', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,},
            body: JSON.stringify(data),})
            console.log(response)
            handleProducts() 
          }

      async function handleProducts(){
        const response = await fetch('http://localhost:3000/products')
        const dataProduct = await response.json()
        console.log(dataProduct)
        setProductList(dataProduct)
      }    

      useEffect(() => {
        handleProducts()
      }, [])

      async function handleDelete(id){
        const token = sessionStorage.getItem("sessionToken")
        const response = await fetch(`http://localhost:3000/product/${id}`, {method: 'DELETE', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      })
      console.log(response)
      handleProducts() 
    }

            const options = [
              { value: "Produtos em Geral", label: "Produtos em Geral" },
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
                {productList.map((product) => (
                <Styles.Product key={product._id}>
                  <img src={Produto} alt="Produto" />
                  <Styles.ProductName>
                   {product.productName}
                  </Styles.ProductName>
                  <Styles.Delete onClick={() => handleDelete(product._id)}>
                   <img src={IconDelete} alt="Lixeira" />
                   <Styles.DeleteText>
                    Excluir
                    </Styles.DeleteText>
                   </Styles.Delete>
                 </Styles.Product>
                 ))}
              </Styles.LeftSide>
              <Styles.RighttSide>
                <Styles.InputLabel>
                  Nome do produto
                  <Styles.InputContent type="texto" placeholder="Escreva o nome do produto" onChange={handleProductName} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Selecione a imagem
                  <Styles.InputContentFile type="file" onChange={handleImage} />
                </Styles.InputLabel>
                <Styles.InputLabel>
                  Selecione a categoria do produto
                </Styles.InputLabel>
                <Styles.SelectCategory onChange={handleCategory}>
                  <option value="" >
                    Selecione uma categoria
                  </option>
                  <option value="Gerais" >
                    Produtos em Geral
                  </option>
                  <option value="Natal" >
                    Produtos Natalinos
                  </option>
                </Styles.SelectCategory> 
                <Styles.SubmitButton type="submit" onClick={handleClick}>
                  Adicionar Produto
                </Styles.SubmitButton>
              </Styles.RighttSide> 
            </Styles.ContentContainer>
          </Styles.FormContent>
        </Styles.ContainerMain>
    )
}
