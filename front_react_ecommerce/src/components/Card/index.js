import React from "react";
import "./style.css";
//import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';

const datados = [
  {
    id: 1,
    title: "Tênis Nike Air Max 90",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 2,
    title: "Tênis Nike Air Max 80",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 3,
    title: "Tênis Nike Air Max 100",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 4,
    title: "Tênis Nike Air Max 110",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 5,
    title: "Tênis Nike Air Max 120",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 6,
    title: "Tênis Nike Air Max 130",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 7,
    title: "Tênis Nike Air Max 140",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
  {
    id: 8,
    title: "Tênis Nike Air Max 150",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  },
   {
    id: 9,
    title: "Tênis Nike Air Max 160",
    description:
      "O Tênis Nike Air Max 90 é um clássico da marca, que apresenta materiais de qualidade, design autêntico e amortecimento Air Max para garantir o conforto e estilo dos seus pés.",
    imageSrc:
      "https://static.netshoes.com.br/produtos/tenis-nike-air-max-90-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1584650291&ims=326x",
  }
   
]


export default function Cards(props) {


  const {produtos} = props;

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
      <h3>Categoria</h3>

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
