import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Header from "../components/Header";
import Card from "../components/Card";
import jwt_decode from "jwt-decode";

function Carrinho() {

  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState([]);
  const [pedido, setPedido] = useState({});
  const [precoTotal, setPrecoTotal] = useState(0);
  const [clientee, setCliente] = useState({
    _id: "",
    codigo: "",
    nome: "",
    endereco: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    numeroCartao: "",
    nomeCartao: "",
    cvcCartao: "",
  });

  useEffect(() => {
    const carrinhoString = localStorage.getItem("carrinho");
    if (carrinhoString) {
      const carrinhoArray = JSON.parse(carrinhoString);
      setCarrinho(carrinhoArray);
    }
  }, []);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);

      fetch("http://localhost:3001/clientes/" + decoded.codigo)
        .then((response) => response.json())
        .then((data) => {
          setCliente(data);
        });
    }
  }, []);

  const calcularPrecoTotal = (produtos) => {
    
    return produtos.reduce((total, produto) => total + produto.preco, 0);
  };

  const quantidadeItens = (produtos) => {
    return produtos.length;
  };

  const arrayIdsProsutos = (produtos) => {

    const ids = produtos.map((produto) => produto._id);

    return ids;
  };

  const gerarCodigoPedido = () => {

    const codigo = Math.floor(Math.random() * 1000000);

    return codigo;
  };

  const handleChange = (e) => {
    setPedido({ ...pedido, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.QaphA5Y7kqO83S6l4kek2B9y5lKVIbWOSB0bn325pFc"; // Substitua pelo seu token real
   // Authorization: `Bearer ${token}`,

    const precoTotal = calcularPrecoTotal(carrinho);
    const idsProdutos = arrayIdsProsutos(carrinho);
    const codigopedido = gerarCodigoPedido();

    // dados do pedido
    const dados = {
      codigo: codigopedido,
      data: new Date(),
      total: precoTotal,
      cliente: clientee._id,
      produto: idsProdutos,
      status: "Aguardando Pagamento"
    };

    fetch("http://localhost:3001/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dados)
    })
      .then(response => response.json())
      .then(data => {
        alert("Pedido salvo com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao salvar o pedido:", error);
      });

  };

  return (
    <>
      <Header />
      <Title title={"Carrinho"} />
      <div className="container bg-body-tertiary">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="col-md-5 col-lg-6 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Seu carrinho</span>
                  <span className="badge bg-primary rounded-pill">
                    {quantidadeItens(carrinho)}
                  </span>
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
                      <span className="text-body-secondary">
                        $ {produto.preco}
                      </span>
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
                    <strong>${calcularPrecoTotal(carrinho)}</strong>
                  </li>
                </ul>

                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                    />
                    <button type="submit" className="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col">
              <h4 className="mb-3">Dados do Cliente</h4>
              <form className="needs-validation">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="nome">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={clientee.nome}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="endereco">Endereço</label>
                      <input
                        type="text"
                        className="form-control disabled"
                        id="endereco"
                        value={clientee.endereco}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mt-4 mb-3">Dados do Cartão de Crédito</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="nomeCartao">Nome do Cartão</label>
                      <input
                        type="text"
                        className="form-control disabled"
                        id="nomeCartao"
                        value={clientee.nomeCartao}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="numeroCartao">Número do Cartão</label>
                      <input
                        type="text"
                        className="form-control disabled"
                        id="numeroCartao"
                        value={clientee.numeroCartao}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <Card produtos={carrinho} categorio={""} />
          <button className="btn btn-primary" type="submit">
            Finalizar Pedido
          </button>
        </form>
      </div>
    </>
  );
}

export default Carrinho;

