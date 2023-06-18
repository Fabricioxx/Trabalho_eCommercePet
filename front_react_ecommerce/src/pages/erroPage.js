import React from "react";


/// 404 - Not Found page - com uma imagem de erro
function ErrorPage() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          
           
          <img
            src="/assets/images/error.jpg"
            alt="404 - Not Found"
            class="img-fluid  w-50 mx-auto d-block"  
          />
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;