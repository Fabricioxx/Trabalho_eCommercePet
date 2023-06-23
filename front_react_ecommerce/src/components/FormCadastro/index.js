import React, { useEffect, useState } from "react";
import Title from "../Title";
import Header from "../Header";
import Button from "../Button";

function FormCadastro(props) {

  const {cliente} = props;

  const [isFormChanged, setIsFormChanged] = useState(false);
  const [formData, setFormData] = useState({});

  
  useEffect(() => {
    setFormData(cliente);
    }, [cliente]);


  const handleFormSubmit = (e) => {
   // e.preventDefault(); 
    props.handleSubmit(e); // Passa o evento como argumento
  };
  
  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    props.handleInputChange(event); // Passa o evento como argumento
  };

  return (
    <div className="bg-body-tertiary">
      <Header />

      <div className="container bg-body-tertiary">
        <Title title={"Cadastro"} />
        <div className="row">
          <div className="col-md-6">
            <h3>Dados pessoais</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="nomeCompleto" className="form-label">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeCompleto"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleFormInputChange}
                  name="nome"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleFormInputChange}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Endereço" className="form-label">
                  Endereço
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="endereco"
                  placeholder="Digite seu Endereço"
                  value={formData.endereco}
                  onChange={handleFormInputChange}
                  name="endereco"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  placeholder="Digite seu CPF"
                  value={formData.cpf}
                  onChange={handleFormInputChange}
                  name="cpf"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  placeholder="Digite seu telefone"
                  value={formData.telefone}
                  onChange={handleFormInputChange}
                  name="telefone"
                />
              </div>
              <div className="row">
                <div className="col-md-6 text-start">
                  <h3>Foto Perfil</h3>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={"handleImageUpload"}
                  />
                </div>
              </div>
              <hr></hr>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Dados do cartão de crédito</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="validadeCartao" className="form-label">
                  Nome do cartão
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validadeCartao"
                  placeholder="nome do cartão"
                  value={formData.nomeCartao}
                  onChange={handleFormInputChange}
                  name="nomeCartao"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="numeroCartao" className="form-label">
                  Número do cartão
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="numeroCartao"
                  placeholder="Digite o número do seu cartão de crédito"
                  value={formData.numeroCartao}
                  onChange={handleFormInputChange}
                  name="numeroCartao"
                  maxLength={20}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cvv"
                  placeholder="Digite o CVV do seu cartão de crédito"
                  value={formData.cvcCartao}
                  onChange={handleFormInputChange}
                  name="cvv"
                  maxLength={3}
                />
              </div>
              <hr />

              <div className="mb-3 mt-5">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleFormInputChange}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="senha" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleFormInputChange}
                  name="senha"
                />
              </div>
            </form>
          </div>
        </div>
        {/* Resto do formulário */}
        <Button
          onClick={handleFormSubmit}
          isFormChanged={isFormChanged}
          clicado={"Atualização concluido"}
          naoclicado={"Atualizar"}
          disabled={true}
        />
      </div>
    </div>
  );
}

export default FormCadastro;
