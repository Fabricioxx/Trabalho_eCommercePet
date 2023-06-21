import React, { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate(); // para redirecionar a pagina

  // para redirecionar a pagina apos o login
  function handleSubmit(event) {
    event.preventDefault();
    
    const bodyParam  = {
      email: email,
      senha: senha
  }

    fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyParam), //stringify converte o objeto em string para ser enviado	
    })
      .then((response) => {
        if (!response.ok) {

          alert("Não foi possível realizar o login");


          throw Error("Não foi possível realizar o login");
        }

        return response.json();
      })
      .then((data) => { // se o login for realizado com sucesso o token é retornado

        //localStorage - persiste o dados no navegador
        localStorage.setItem("token", data.token); //salva o token no localstorage

        alert("Login realizado com sucesso");

        navigate("/loja");

        //const token = localStorage.getItem("token"); //recupera o token do localstorage
         
      })
      .catch((err) => {
        setError(true);
        console.error(err);

      }).finally(() => {

        setEmail("")
        setSenha("")
    })
  }

  return (

    
    <div className="container bg-body-tertiary">
    <Title title={"Login"} />


    <section
      class="d-flex align-items-center py-4"
      cz-shortcut-listen="true"
    >
      <main class="form-signin w-100 m-auto d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email} onChange={(e) => { setEmail(e.target.value) }}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={senha} onChange={(e) => { setSenha(e.target.value) }}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check text-start my-3">
            <input
              class="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-5 text-muted"></p>
          
        </form>
      </main>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
    </section>
  </div>
  );
}

export default Login;
