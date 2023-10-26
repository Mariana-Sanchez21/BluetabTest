import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form({ handleFileUpload }) {
  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    education: '',
    certificatesAndCourses:'',
    professionalExperience: '',
    skills: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);

    const dataToUpload = {
      name: formData.name,
      summary: formData.summary,
      education: formData.education,
      certificatesAndCourses: formData.certificatesAndCourses,
      professionalExperience: formData.professionalExperience,
      skills: formData.skills
    };
    console.log(dataToUpload)
    let jsonData=JSON.stringify(dataToUpload)
    console.log(jsonData)

    const API_KEY = 'patA32lvUGGdC5DLV.c61bef5b6273740327092a4900d050c92401eae7a5f999b70591c61a2426ade5';
    const BASE_ID = 'appnkVHO5gqaKEU5l';
    const TABLE_ID = 'tblsZ1JcNCWFCLflN';


    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    };

    axios
      .post(url, {
        "data": [
          {
            "fields":jsonData
          }
        ]
      }, {
        headers
      })
      .then((response) => {
        console.log('Datos subidos exitosamente a Airtable:', response.json);
      })
      .catch((error) => {
        console.error('Error al subir datos a Airtable:', error);
      });
  };
  return (
    <>
    <div className='Form-container'>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NOMBRE</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="summary">RESUMEN</label>
          <textarea
            type="text"
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="education">EDUCACION</label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            required
          />
           <div>
          <label htmlFor="certificatesAndCourses">CERTIFICADOS Y CURSOS</label>
          <textarea
            type="text"
            id="certificatesAndCourses"
            name="certificatesAndCourses"
            value={formData.certificatesAndCourses}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="professionalExperience">EXPERIENCIA PROFESIONAL</label>
          <textarea
            type="text"
            id="professionalExperience"
            name="professionalExperience"
            value={formData.professionalExperience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="skills">CONOCIMIENTOS Y HABILIDADES</label>
          <textarea
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            required
          />
        </div>
          
        </div>
        <button  className='saveButton' type="submit">Guardar</button>
      </form>
    </div>
   
    </>
  );
  
}

export { Form };


