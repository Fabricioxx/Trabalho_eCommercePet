import React, { useState, useEffect } from 'react'
import Carrossel from '../components/Carrossel'
import Card from '../components/Card'



export default function Loja() {

    const [listProdutos, setListProduto] = useState([]);
  
    useEffect(() => {
       // setIsLoading(true);
        fetch("http://localhost:3001/produtos")
          .then((response) => response.json())
          .then((data) => {
            setListProduto(data);
          //  setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
          //  setIsLoading(false);
          });
      },[]);



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h1>Loja</h1>
                        <Carrossel />
                        <Card produtos={listProdutos}/>
                    </div>
                </div>
            </div>
        </>
    )
}