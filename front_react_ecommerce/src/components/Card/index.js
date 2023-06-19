import React from "react";
import { Carousel, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Cards({ product }) {
  return (
    <section>
      <h3>Categoria</h3>

      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner m-4">
          <div class="carousel-item active m-2" data-interval="10000">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="2000">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">detalhes</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev justify-content-start"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <button type="button" class="btn btn-outline-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
            </svg>
          </button>
        </a>
        <a
          class="carousel-control-next justify-content-end"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <button type="button" class="btn btn-outline-danger" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
            </svg>
            
          </button>
          
        </a>
      </div>
      <hr />
    </section>
  );
}

//=========================
