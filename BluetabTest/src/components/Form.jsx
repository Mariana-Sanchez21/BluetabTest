import { useState } from 'react';
import Airtable from 'airtable';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    education: '',
    certificatesAndCourses: '',
    professionalExperience: '',
    skills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setFormData({
      name: '',
      summary: '',
      education: '',
      certificatesAndCourses: '',
      professionalExperience: '',
      skills: '',
  });

    const dataToUpload = {
      name: formData.name,
      skills: formData.skills,
      education: formData.education,
      certificatesAndCourses: formData.certificatesAndCourses,
      professionalExperience: formData.professionalExperience,
      summary: formData.summary, 
    };

    var base = new Airtable({ apiKey: 'patA32lvUGGdC5DLV.f9b05fc03bf5472f9e77ec10a62493a99ed97d708300b086ec51144d108abf65' }).base('appnkVHO5gqaKEU5l');

    base('CV\'s').create(
      [
        {
          fields: dataToUpload,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <>
      <div className='Form-container'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>NOMBRE</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='summary'>RESUMEN</label>
            <textarea
              type='text'
              id='summary'
              name='summary'
              value={formData.summary}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='education'>EDUCACION</label>
            <textarea
              id='education'
              name='education'
              value={formData.education}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='certificatesAndCourses'>CERTIFICADOS Y CURSOS</label>
            <textarea
              type='text'
              id='certificatesAndCourses'
              name='certificatesAndCourses'
              value={formData.certificatesAndCourses}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='professionalExperience'>EXPERIENCIA PROFESIONAL</label>
            <textarea
              type='text'
              id='professionalExperience'
              name='professionalExperience'
              value={formData.professionalExperience}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='skills'>CONOCIMIENTOS Y HABILIDADES</label>
            <textarea
              type='text'
              id='skills'
              name='skills'
              value={formData.skills}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
        <button  className='saveButton' onClick={handleSubmit} type="submit">Guardar</button>
    </div>
        </form>
      </div>
    </>
  );
}

export { Form };
