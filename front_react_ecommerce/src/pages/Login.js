import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // para redirecionar a pagina apos o login
  function handleSubmit(event) {
    event.preventDefault();
    const usuario = { email, password };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Não foi possível realizar o login");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        // history.push("/");
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }

  return (

    
    <div className="container bg-body-tertiary">
    <Title title={"Login"} />


    <section
      class="d-flex align-items-center py-4"
      cz-shortcut-listen="true"
    >
      <main class="form-signin w-100 m-auto d-flex justify-content-center">
        <form>
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
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
