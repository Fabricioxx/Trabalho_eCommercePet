import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Card from "../components/Card";
import jwt_decode from "jwt-decode";


function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [cliente, setCliente] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    numeroCartao: "",
    nomeCartao: "",
    cvv: "",
  });

  useEffect(() => {
    const carrinhoString = localStorage.getItem("carrinho");
    if (carrinhoString) {
      const carrinhoArray = JSON.parse(carrinhoString);
      setCarrinho(carrinhoArray);
    }
  }, [localStorage.getItem("carrinho")]); // quando o carrinho for alterado, o useEffect será executado

  
  useEffect(() => {
    const token = localStorage.getItem('token');


    if (token) {

      var decoded = jwt_decode(token);
      
      //alert(decoded.codigo);

      fetch("http://localhost:3001/clientes/"+decoded.codigo)
      .then((response) => response.json())
      .then((data) => {
        setCliente(data);
      }
      );
    }
  }, []);

  //--------------------------------------------------------------
  const calcularprecoTotal = (produtos) => {
    let precoTotal = 0;
    produtos.forEach((produto) => {
      precoTotal += produto.preco;
    });
    return precoTotal;
  };

   const quantidadeItens = (produtos) => {
    let quantidadeItens = 0;
    produtos.forEach((produto) => {
        quantidadeItens += 1;
    });
    return quantidadeItens;
    };

  //--------------------------------------------------------------

  const finalizarPedido = () => {
    // ...
  };

  return (
    <div className="container bg-body-tertiary">
      <Header />
      <Title title={"Carrinho"} />
      {/* grid bootstrap */}
      <div class="row">
         <div class="col col-sm-6">

      {/* card bootstrap */}
      <div class="col-md-5 col-lg-6 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Seu carrinho</span>
          <span class="badge bg-primary rounded-pill">{quantidadeItens(carrinho)}</span>
        </h4>
        <ul className="list-group mb-3">
          {carrinho.map((produto, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between lh-sm"
            >
              <div>
                <h6 className="my-0">{produto.nome}</h6>
                <small className="text-body-secondary">
                  {produto.categoria}
                </small>
              </div>
              <span className="text-body-secondary">$ {produto.preco}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">$0</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (BRL)</span>
            <strong>${calcularprecoTotal(carrinho)}</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code" />
            <button type="submit" class="btn btn-secondary">
              Redeem
            </button>
          </div>
        </form>
      </div>
      </div>
    <div class="col">
        {/*  coluna 2 */}
        <h4 class="mb-3">Dados do Cliente</h4>
    <form class="needs-validation">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome" value={cliente.nome} readonly/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input type="text" class="form-control disabled" id="endereco" value={cliente.endereco} readonly />
          </div>
        </div>
      </div>
      <h4 class="mt-4 mb-3">Dados do Cartão de Crédito</h4>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="nomeCartao">Nome do Cartão</label>
            <input type="text" class="form-control disabled" id="nomeCartao" value={cliente.nomeCartao} readonly />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="numeroCartao">Número do Cartão</label>
            <input type="text" class="form-control disabled" id="numeroCartao" value={cliente.numeroCartao} readonly/>
          </div>
        </div>
      </div>
      </form>

     
    </div>
  </div>

      <hr></hr>
      <Card produtos={carrinho} categorio={""} />
      <button className="btn btn-primary" onClick={finalizarPedido}>
        Finalizar Pedido
      </button>
    </div>
  );
}

export default Carrinho;
