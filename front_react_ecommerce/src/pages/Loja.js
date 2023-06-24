import React, { useState, useEffect } from "react";
import Carrossel from "../components/Carrossel";
import Card from "../components/Card";
import Title from "../components/Title";
import Header from "../components/Header";
import Busca from "../components/Busca";

export default function Loja() {
  const [listProdutos, setListProduto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termoDeBusca, setTermoDeBusca] = useState(""); //criar uma variável para armazenar o valor digitado no input
  const [ProdutosOrdenados, setProdutosOrdenados] = useState(""); //criar uma variável para armazenar o valor digitado no input

  function handleTermoDeBusca(termo) {
    setTermoDeBusca(termo);

    if (!termo) {
        setProdutosOrdenados("");
        }


  }

  function handleFilmesOrdenados(filmesordenar) {
    setProdutosOrdenados(filmesordenar); // recebe o valor da variável props
  }



  useEffect(() => {
     setIsLoading(true);
    fetch("http://localhost:3001/produtos")
      .then((response) => response.json())
      .then((data) => {
        setListProduto(data);
         setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
         setIsLoading(false);
      });
  }, []);

  const filteredProdutos = listProdutos.filter((produto) => {
    return produto.nome.toLowerCase().includes(termoDeBusca.toLowerCase());
  });

  useEffect(() => {
    if (ProdutosOrdenados) {
      let busca = [...filteredProdutos];

      switch (ProdutosOrdenados) {
        case "1":
          busca.sort((a, b) => a.nome.localeCompare(b.nome));
          break;
        case "2":
          busca.sort((a, b) => a.preco - b.preco);
          break;
        default:
          break;
      }

      setListProduto(busca);
    }
  }, [ProdutosOrdenados, filteredProdutos]);


  

  if(termoDeBusca && filteredProdutos.length === 0) {

   return(

    <>
      <div className="container">
        {isLoading ? (  <p>Loading...</p>) : ( 
        <div className="row">
          <div className="col-12">
            <Header />
            <Title title="Loja" />
            <Busca
              termoDeBusca={termoDeBusca}
              onTermoDeBusca={handleTermoDeBusca}
              onOpcaoDeOrdenacao={handleFilmesOrdenados}
            />

            <Carrossel />
            <h3>Resultado da Busca</h3>
            <Card produtos={filteredProdutos} categorio={"categoria"} />
          </div>
        </div>
        )}
      </div>
    </>


   )



  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
            <Title title="Loja" />
            <Busca
              termoDeBusca={termoDeBusca}
              onTermoDeBusca={handleTermoDeBusca}
              onOpcaoDeOrdenacao={handleFilmesOrdenados}
            />

            <Carrossel />
            <h3>Categoria</h3>
            <Card produtos={listProdutos} categorio={"categoria"} />
            <h3>Categoria</h3>
            <Card produtos={listProdutos} categorio={"categoria"} />
            <h3>Categoria</h3>
            <Card produtos={listProdutos} categorio={"categoria"} />
          </div>
        </div>
        
      </div>
    </>
  );
}
