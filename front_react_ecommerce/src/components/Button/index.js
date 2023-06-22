import React, { useState, useEffect } from 'react';

function Button(props) {
  const { onClick, isFormChanged, clicado, naoclicado, disabled  } = props;
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    if (isFormChanged) {
      setIsSigned(false);
      
    }
  }, [isFormChanged]);

  const handleButtonClick = (event) => {
    event.preventDefault();

      setIsSigned(true);

      

    onClick(); // Executa a função que foi passada como prop
  };

  return (
    <div className="row">
      <button
        type="submit"
        className={`btn ${isSigned ? 'btn-success' : 'btn-primary'}`}
        onClick={handleButtonClick}
        disabled={disabled ? isSigned : false}
        
      >
        {isSigned ? clicado : naoclicado}
      </button>
    </div>
  );
}

export default Button;