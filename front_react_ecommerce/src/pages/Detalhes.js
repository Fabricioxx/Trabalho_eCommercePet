import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import Header from '../components/Header';




function Detalhes() {
    const { codigo } = useParams();
   const [adicionado, setAdicionado] = useState(false);
    const [produto, setproduto] = useState(null);
    const [erro, setErro] = useState(false);

    function adicionarAoCarrinho(produto) {
      // Recuperar os dados existentes do carrinho do localStorage
      const carrinhoString = localStorage.getItem("carrinho");
      let carrinho = [];
    
      if (carrinhoString) {
        // Se o carrinho já existir no localStorage, converte a string para um array
        carrinho = JSON.parse(carrinhoString);
        localStorage.removeItem("carrinho") // romove o carrinho antigo
      }

      if(adicionado === true){

        return <Button onClick={handleSubmit} isFormChanged={adicionado} clicado="Adicionado" naoclicado="Adicionar ao carrinho" disabled={adicionado} />
      }else{

        // Adicionar o novo produto ao carrinho
      carrinho.push(produto);
      // Converter o carrinho atualizado de volta para uma string
      const carrinhoAtualizadoString = JSON.stringify(carrinho);
      // Atualizar o localStorage com o carrinho atualizado
      localStorage.setItem("carrinho", carrinhoAtualizadoString);
      
      setAdicionado(true);

      }
      
    }
  
    
   const handleSubmit = (event) => {
     // event.preventDefault();
      alert(`ADICIONADO AO CARRINHO: ${produto.nome}` );
    // filme.selecionado = true;


    adicionarAoCarrinho(produto);
    };

    function imagembase64(imagem){
      try {
        if(!imagem || !imagem.data || !imagem.data.data){
          return 'https://via.placeholder.com/250?text=Sem+Imagem';
        }
        const buffer = new Uint8Array(imagem.data.data);
        const blob = new Blob([buffer], { type: imagem.contentType || 'image/jpeg' });
        return URL.createObjectURL(blob);
      } catch(err){
        console.warn('Erro ao gerar imagem', err);
        return 'https://via.placeholder.com/250?text=Erro+Imagem';
      }
    }
  
  
    useEffect(() => {
      fetch(`http://localhost:3001/produtos/${codigo}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Não foi possível obter o filme.");
          }
        })
        .then(data => setproduto(data))
        .catch(err => {
          console.error(err);
          setErro(true);
        })
    }, [codigo]);
  
    if (erro) {
      return <div>Não foi possível obter o Produto rrrr.</div>;
    }
  
    if (!produto) {
      return <div>Carregando...</div>;
    }
  
    return (

        
      
      

      <div className="container">
       <Header/>
       <Title title="Detalhes" />
        <div class="row">
          <div class="col-sm-6">
            <div className="card1">
              <img
                src={imagembase64(produto.imagem)} alt={"imagem produto"}
                
                className="img-fluid w-50"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div className="card2">
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p>Descrição: {produto.descricao}</p> 
                <p>R$: {produto.preco}</p>
  
                {/** <p>Duração: {filme.duracao}</p>
                <p>Gênero: {filme.genero}</p>
                <p>Ano: {filme.ano}</p>
                <p>Sinopse: {filme.sinopse}</p>
                <p>Nota: {filme.nota}</p> */}
                
  
                {/*filme.assistido ? <Button  onClick={handleSubmit} isFormChanged={true}  clicado={'Assistir Novamente'} naoclicado={'Assistir'}/> : <Button  onClick={handleSubmit} isFormChanged={false}  clicado={'Assistido'} naoclicado={'Assistir'} />*/}

                <Button  onClick={handleSubmit} isFormChanged={true}  clicado={'Adicionado ao carrinho'} naoclicado={'Adicionar ao Carrinho'}/>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
         
       {/* <Comentarios comentarios={comentarios} /> */} 
      </div>
    );
  }
  
  export default Detalhes;