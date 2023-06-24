import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Header from "../components/Header";

function Cadastro() {


  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    numeroCartao: "",
    nomeCartao: "",
    cvcCartao: "",
    imagem:null,
  });

  //const [plan, setPlan] = useState("free");

  const [isFormChanged, setIsFormChanged] = useState(false);

  //formData.plano = plan;

  // pegar o valor do input e armazenar no state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    setIsFormChanged(true);
  };
      
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const arrayBuffer = reader.result;
      const buffer = new Uint8Array(arrayBuffer);
      const data = Array.from(buffer);
      const contentType = file.type;

      setFormData({
        ...formData,
        imagem: {
          data,
          contentType,
        },
      });
    };

    reader.readAsArrayBuffer(file);
  };



  
 // enviar os dados do formulario para o backend
  const handleSubmit = (event) => {
   // event.preventDefault(); - estava dando erro ao usar ao clicar no componente button

   setIsFormChanged(false);
    const {
      nome,
      email,
      senha,
      endereco,
      cpf,
      telefone,
      numeroCartao,
      nomeCartao,
      cvcCartao,
      imagem,
    } = formData;

      //formData.plano = plan;

    

    fetch("http://localhost:3001/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Não foi possível realizar o cadastro");
          throw new Error("Não foi possível realizar o cadastro");
        }
        return response.json();
      })
      .then((data) => {
        alert("Cadastro realizado com sucesso");
        alert(
          `Nome: ${nome}\nE-mail: ${email}\nCPF: ${cpf}\nTelefone: ${telefone}\nNúmero do cartão: ${numeroCartao}\nNome do Cartão: ${nomeCartao}\nCVV: ${cvcCartao}\nSenha: ${senha}\nEndereço: ${endereco}`
        );
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormData({
          nome: "",
          endereco: "",
          telefone: "",
          cpf: "",
          email: "",
          senha: "",
          numeroCartao: "",
          nomeCartao: "",
          cvcCartao: "",
          imagem:null,
        });
      });

  };

   



  return (
    <div className="bg-body-tertiary">
      
      <Header />
      

      {/* <!-- Formulário de cadastro --> conteinar com duas divs uma ao lado da outra de uma lado os dados pessoas e do outro dados do cartão de credito usando bootestrap */}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="telefone"
                />
              </div>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="numeroCartao"
                  maxLength={20}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvc" className="form-label">
                  cvc
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cvcCartao"
                  placeholder="Digite o CVC do seu cartão de crédito"
                  value={formData.cvcCartao}
                  onChange={handleInputChange}
                  name="cvcCartao"
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="senha"
                />
              </div>

            </form>
          </div>
        </div>
        <div className="row">
  <div className="col-md-6 text-start">
    <h3>Foto Perfil</h3>
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
    />
    
  </div>
</div>
        <hr></hr>

          <Button onClick={handleSubmit} isFormChanged={isFormChanged} clicado={'cadastro concluido'} naoclicado={'Cadastrar'} disabled={true} />

      </div>
    </div>
  );
}
export default Cadastro;