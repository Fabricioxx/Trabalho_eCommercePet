import React from 'react';




function Title(props) {

  return (

    <div class="container">
      <div class="custom-title px-3 py-3 pt-md-5 pb-md-0 mx-auto text-center">
        <h3 class="display-4">{props.title}</h3>
        <hr class="my-4" />
      </div>
    </div>

  );
}

export default Title;