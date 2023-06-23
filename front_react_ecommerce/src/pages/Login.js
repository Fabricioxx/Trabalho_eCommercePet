import React, { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate(); // para redirecionar a pagina

  // para redirecionar a pagina apos o login
  function handleSubmit(event) {
    event.preventDefault();

    alert("Email: " + formData.email + " Senha: " + formData.senha);

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          alert("Não foi possível realizar o login");
          throw Error("Não foi possível realizar o login");
        }

        return response.json();
      })
      .then((data) => {
        alert("Login realizado com sucesso");

        localStorage.setItem("token", data.token); // armazenar o token no localstorage
       
        alert("Token: " + data.token);
        
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormData({
          email: "",
          senha: ""
        });
      });
  }

  return (

    <>
    <Header logado={false}/>
    <div className="container bg-body-tertiary">
      <Title title={"Login"} />

      <section className="d-flex align-items-center py-4" cz-shortcut-listen="true">
        <main className="form-signin w-100 m-auto d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div class="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={formData.senha}
                onChange={(e) =>
                  setFormData({ ...formData, senha: e.target.value })
                }
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-5 text-muted"></p>
          </form>
        </main>
        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        ></script>
      </section>
    </div>
    </>
  );
}

export default Login;
