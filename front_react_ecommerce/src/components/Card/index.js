import React from "react";
import "./style.css";
//import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';


export default function Cards(props) {


  const {produtos, categoria} = props;

 // converte a imagem para base64
  function imagembase64(imagem){
    //Uint8Array - Array de 8 bits sem sinal
    const buffer = new Uint8Array(imagem.data.data);
    const blob = new Blob([buffer], { type: "image/jpeg" });
    const url = URL.createObjectURL(blob);
    
    console.log("URL 64",url);

    return url;
  }




  return (
    <section>
      <h3>{categoria}</h3>

      <div className="carousel-wrapper">
        <Carousel
          interval={null} // Defina o intervalo como null para evitar a transição automática
          slide={true} // Defina slide como true para exibir vários cards por slide
          controls={true} // Habilita os controles de navegação
          indicators={false} // Desabilita os indicadores de slide
        >
          {produtos.map((produto, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {produtos
                  .slice(index, index+3) // Exibe apenas três cards por vez
                  .map((produto) => (
                    <div className="col" key={produto.codigo}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img style={{ width: "250px", height: "250px" }} variant="top" src={imagembase64(produto.imagem)} className="img-fluid" />
                        <Card.Body>
                          <Card.Title>{produto.nome}</Card.Title>
                          <Card.Text className="text-truncate" > R$ {produto.preco}</Card.Text>
                         {/* <Button variant="primary">detalhes</Button>*/} 
                          <Link to={`/detalhes/${produto.codigo}`}>Detalhes</Link>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <hr />
    </section>
  );
}



//=========================
