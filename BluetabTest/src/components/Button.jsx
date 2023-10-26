
import PropTypes from 'prop-types'; 

import "./Button.css";
import saveIcon from '../assets/saveIcon.png';

function Button({ handleFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Hola')
      handleFileUpload(file);
    }
  }

  return (
    <label className="Button-container">
      <input type="file" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
      <div className="Button">
        <p className="Button-text">Cargar mi CV ATS</p>
        <img src={saveIcon} alt="Guardar Icon" className="Icon" />
      </div>
    </label>
  );
}

Button.propTypes = {
  handleFileUpload: PropTypes.func.isRequired, // Define prop type for handleFileUpload
};

export { Button };
