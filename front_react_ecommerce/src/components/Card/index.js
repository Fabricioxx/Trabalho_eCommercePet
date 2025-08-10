import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';


export default function Cards(props) {


  const {produtos, categoria} = props;

 // converte a imagem para base64
  function imagembase64(imagem){
    try {
      if(!imagem || !imagem.data || !imagem.data.data){
        return 'https://via.placeholder.com/250?text=Sem+Imagem';
      }
      const buffer = new Uint8Array(imagem.data.data);
      const blob = new Blob([buffer], { type: imagem.contentType || "image/jpeg" });
      return URL.createObjectURL(blob);
    } catch(err){
      console.warn('Falha ao converter imagem', err);
      return 'https://via.placeholder.com/250?text=Erro+Imagem';
    }
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
          {produtos.reduce((slides, produto, idx) => {
            const slideIndex = Math.floor(idx / 3);
            if(!slides[slideIndex]) slides[slideIndex] = [];
            slides[slideIndex].push(produto);
            return slides;
          }, []).map((grupo, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {grupo.map(p => (
                  <div className="col" key={p.codigo}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img style={{ width: "250px", height: "250px" }} variant="top" src={imagembase64(p.imagem)} className="img-fluid" />
                      <Card.Body>
                        <Card.Title>{p.nome}</Card.Title>
                        <Card.Text className="text-truncate" > R$ {p.preco}</Card.Text>
                        <Link to={`/detalhes/${p.codigo}`}>Detalhes</Link>
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
