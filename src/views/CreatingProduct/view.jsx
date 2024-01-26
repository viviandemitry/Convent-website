import React, {useState, useEffect} from 'react'
import * as Styles from './styles';
import Logo from "../../assets/images/logo.png";
import Produto from "../../assets/images/produtos-gerais.png";
import IconDelete from "../../assets/icons/delete-icon.png";
import IconLeft from "../../assets/icons/arrow-left.png"
import { useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';
import ImageUploading from 'react-images-uploading';


export default function CreatingProduct() {

    const navigate = useNavigate();
    const [productName, setproductName] = useState('');
    const [category, setCategory] = useState('');
    const [productList, setProductList] = useState([]);
    const [imagesList, setImagesList] = useState([]);
    const maxNumber = 1;

    function handleBack(){
      navigate("/menu");
    }

    function handleProductName(e){
      setproductName(e.target.value);
      }
    
      function handleImagesList(imageList, addUpdateIndex){
        setImagesList(imageList);
        console.log(imageList, addUpdateIndex);
      }

      function handleCategory(e){
        setCategory(e.target.value);
      }

      async function handleClick(e){
        try{
            e.preventDefault()
            const token = sessionStorage.getItem("sessionToken")
            const imagesListData = imagesList[0] 
            const data = {
              productName,
              image : imagesListData.data_url,
              category
            }
            console.log(data)
            const response = await fetch('http://localhost:3000/product/create', {method: 'POST', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`,},
            body: JSON.stringify(data),})
            console.log(response)
            handleProducts()
            setproductName('')
            setImagesList([])
            setCategory('')

          } catch(err) {
            alert("Houve um erro na criação")
          }
        }

      async function handleProducts(){
        try {
        const response = await fetch('http://localhost:3000/products')
        const dataProduct = await response.json()
        console.log(dataProduct)
        setProductList(dataProduct)
      }   catch(err) {
        alert("Dados inválidos!")
      } 
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

            // const options = [
            //   { value: "Produtos em Geral", label: "Produtos em Geral" },
            //   { value: "Produtos Natalinos", label: "Produtos Natalinos" },
            //   { value: "Produtos para Páscoa", label: "Produtos para Páscoa" },
            //   { value: "Geleias e Antepastos", label: "Geleias e Antepastos" },
            // ];

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
                {productList.map((product, index) => (
                <Styles.Product key={product._id}>
                  <img src={product.image} alt="Produto" />
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
                  <ImageUploading
        multiple
        value={imagesList}
        onChange={handleImagesList}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button type="button"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Escolha a imagem
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
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
                  <option value="Natal" >
                    Produtos de Páscoa
                  </option>
                  <option value="Natal" >
                    Geléias e antepastos
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
