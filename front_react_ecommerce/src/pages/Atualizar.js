import React, { useState, useEffect} from 'react';
import FormCadastro from '../components/FormCadastro';
import jwt_decode from "jwt-decode";


function Atualizar() {

    const [cliente, setCliente] = useState({
        codigo: "",
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

  

  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsFormChanged(true);
  };

  const handleSubmit = () => {
    setIsFormChanged(false);
    const {
      codigo,  
      nome,
      email,
      senha,
      endereco,
      cpf,
      telefone,
      numeroCartao,
      nomeCartao,
      cvv,
    } = cliente;

    fetch("http://localhost:3001/clientes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Não foi possível realizar a Atualização");

          alert(cliente.codigo);
          throw new Error("Não foi possível realizar o atualização");
        }
        return response.json();
      })
      .then((data) => {
        alert("atualização realizado com sucesso");
        alert(
          `Nome: ${nome}\nE-mail: ${email}\nCPF: ${cpf}\nTelefone: ${telefone}\nNúmero do cartão: ${numeroCartao}\nNome do Cartão: ${nomeCartao}\nCVV: ${cvv}\nSenha: ${senha}\nEndereço: ${endereco}`
        );
      })
      .catch((err) => {
        console.error(err);
      });

    // Aqui você pode realizar o envio dos dados para o backend
    // utilizando as informações contidas em formData

    // Exemplo de código para envio dos dados (utilize sua lógica de envio)
    console.log("Dados do formulário:", cliente);
  };

  return (
    <>
      <FormCadastro
        cliente={cliente}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default Atualizar;
