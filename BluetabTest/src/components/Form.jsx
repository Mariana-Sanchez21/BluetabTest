import { useState } from 'react';
import Airtable from 'airtable';
import './Form.css';
import arrow from '../assets/arrow.svg'
import logo from '../assets/logo_Bluetab.svg'
import squares from '../assets/squares.svg'
import squares2 from '../assets/squares2.svg'
import menuIcon from '../assets/icono_menu.svg'
import { BubbleChat } from 'flowise-embed-react';
import { Link } from "react-router-dom";





function Form() {
  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    education_institution: '',
    education_institution_title: '',
    education_startMonth: '',
    education_startYear: '',
    education_lastMonth: '',
    education_lastYear: '',
    certification_company: '',
    certification_name: '',
    certification_startMonth: '',
    certification_startYear: '',
    certification_lastMonth: '',
    certification_lastYear: '',
    experience_nameCompany: '',
    experience_position: '',
    experience_startMonth: '',
    experience_startYear: '',
    experience_lastMonth: '',
    experience_lastYear: '',
    knowledge: '',
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    console.log('Datos del formulario:', formData);
    setFormData({
      name: formData.name,
      summary: formData.summary,
      education_institution: formData.education_institution,
      education_institution_title: formData.education_institution_title,
      education_startMonth: formData.education_startMonth,
      education_startYear: formData.education_startYear,
      education_lastMonth: formData.education_lastMonth,
      education_lastYear: formData.education_lastYear,
      certification_company: formData.certification_company,
      certification_name: formData.certification_name,
      certification_startMonth: formData.certification_startMonth,
      certification_startYear: formData.certification_startYear,
      certification_lastMonth: formData.certification_lastMonth,
      certification_lastYear: formData.certification_lastYear,
      experience_nameCompany: formData.experience_nameCompany,
      experience_position:formData.experience_position,
      experience_startMonth: formData.experience_startMonth,
      experience_startYear: formData.experience_startYear,
      experience_lastMonth: formData.experience_lastMonth,
      experience_lastYear: formData.experience_lastYear,
      knowledge: formData.knowledge,
  });
  

    const dataToUpload = {
      name: formData.name,
      summary: formData.summary,
      education_institution: formData.education_institution,
      education_institution_title: formData.education_institution_title,
      education_startMonth: formData.education_startMonth,
      education_startYear: formData.education_startYear,
      education_lastMonth: formData.education_lastMonth,
      education_lastYear: formData.education_lastYear,
      certification_company: formData.certification_company,
      certification_name: formData.certification_name,
      certification_startMonth: formData.certification_startMonth,
      certification_startYear: formData.certification_startYear,
      certification_lastMonth: formData.certification_lastMonth,
      certification_lastYear: formData.certification_lastYear,
      experience_nameCompany: formData.experience_nameCompany,
      experience_position:formData.experience_position,
      experience_startMonth: formData.experience_startMonth,
      experience_startYear: formData.experience_startYear,
      experience_lastMonth: formData.experience_lastMonth,
      experience_lastYear: formData.experience_lastYear,
      knowledge: formData.knowledge, 
    };
    setFormData({
      name: '',
      summary: '',
      education_institution: '',
      education_institution_title: '',
      education_startMonth: '',
      education_startYear: '',
      education_lastMonth: '',
      education_lastYear: '',
      certification_company: '',
      certification_name: '',
      certification_startMonth: '',
      certification_startYear: '',
      certification_lastMonth: '',
      certification_lastYear: '',
      experience_nameCompany: '',
      experience_position: '',
      experience_startMonth: '',
      experience_startYear: '',
      experience_lastMonth: '',
      experience_lastYear: '',
      knowledge: '',
    });

    var base = new Airtable({ apiKey: 'patA32lvUGGdC5DLV.2d2126a653f47ed2f80354459583a6e69426b313898670e35fbd8d6c9b1e1d31' }).base('appnkVHO5gqaKEU5l');

    base('DEMO').create(
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
    <BubbleChat
            chatflowid="12bdedc8-84f1-4267-99c5-b400ea09193a"
            apiHost="https://bluetab-tf.onrender.com"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                chatWindow: {
                    welcomeMessage: "Hola Bluetaber ¿En qué puedo ayudarte?",
                    backgroundColor: "#ffffff",
                    height: 600,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://s3-alpha-sig.figma.com/img/b133/c135/b12ecc6a3e45e39108710613ff165d0a?Expires=1699228800&Signature=X7esEj6pgkVVtXoUiQGWlhguRHucFb-dpSj7zM1U~BdVC~8A7JWlmwK2llVDZk0Kwn~VQujl03J22vI3nRA9ATRsHtD4M7xu8xyRqc09c0ApHpt213l89b1Ny1RkStKUTMtE8RtJ03ZG4Y7zY4TqE0lcVYRndgUONU7Jiknl4zVy8QfiOW-ChuOP3R04IjyRoFHbDUXCqGP8zCcq18cE00vdMO8Km~2TfSNmAoJUBUQNTniynjuAa3WAVvyAn6HPRmzJJU-iHCnMPO8FjxEh5uqliHeFpvZ4Ai0uvomqeHS3cbMthsfCaj0Ik3R9KyyD0zm7Ry4B3KuEoGnPWO7DnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                     
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Escribe tu pregunta",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#E05206",
                    }
                }
            }}
        />
    
    <div className='logo-container'>
    <img src={logo} alt="Logo" className="Logo" />
    </div>
    <div className='squares-container'>
    <img src={squares} alt="squares" className="squares" />
    </div>
    <button className='hamburguerButton' >
    <img src={menuIcon} onClick={toggleMenu} alt="icono" className="icon"></img>
    </button>
    <button className='buttonATS'>Cargar mi CV ATS</button>
    {isMenuOpen && ( 
      <div className="menu">
        <input type="text" placeholder="Busqueda..."  className='search'>
          
        </input>
        <ul>
  <li>
    <Link to="/">Home</Link>
    <img src={arrow} alt="arrow" className="arrow1" />
  </li><br />

  <li>
    <Link to="/cloud">Cloud</Link>
    <img src={arrow} alt="arrow" className="arrow2" />
  </li><br />

  <li>
    <Link to="/otras-tecnologias">Otras Tecnologías de Datos</Link>
    <img src={arrow} alt="arrow" className="arrow3" />
  </li><br />

  <li>
    <Link to="/data-virtualization">Data Virtualization</Link>
    <img src={arrow} alt="arrow" className="arrow4" />
  </li><br />

  <li>
    <Link to="/machine-learning">Machine Learning</Link>
    <img src={arrow} alt="arrow" className="arrow5" />
  </li><br />

  <li>
    <Link to="/ux-ui">UX/UI</Link>
    <img src={arrow} alt="arrow" className="arrow6" />
  </li><br />

          <br/>
          <br/>
<div className='extra'>
          <li>Politicas</li><br/>
          <li>Blog</li><br/>
          <li>Bluetalks</li><br/>
          <li>Sitios Corporativos</li><br/>
          <li>FAQ's</li><br/>
          <li>Contactos</li><br/>
          </div>
        </ul>
      </div>
    )}
      <div className='Form-container'>
      <form className="container-form" id="container-form">
        <section>
          <label htmlFor="name" className="group-title">Nombre</label>
          <input
            type="text"
            className="group-large-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="summary" className="group-title">Resumen</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
          />
        </section>
        <section>
          <label className="group-title">Educación</label>
          <div className="main-input-group">
            <input
              type="text"
              className="group-large-input"
              placeholder="Institución Educativa"
              id="education_institution"
              name="education_institution"
              value={formData.education_institution}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="group-large-input"
              placeholder="Título"
              id="education_institution_title"
              name="education_institution_title"
              value={formData.education_institution_title}
              onChange={handleInputChange}
            />
          </div>


          <label htmlFor="education_startDate" className='startDate' >Fecha de inicio</label>
          <div className="container-date">
            <select id="education_startMonth"  name="education_startMonth" className="education-input date"  placeholder='Mes' value={formData.education_startMonth} onChange={handleInputChange}>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
              </select>

            <input
              type="text"
              className="education-input date"
              placeholder='Año'
              id="education_startYear"
              name="education_startYear"
              value={formData.education_startYear}
              onChange={handleInputChange}
            />
          </div>

          <label htmlFor="education_lastMonth" >Fecha de finalización</label>
          <div className="container-date">
            <select className="date" placeholder='Mes' id="education_lastMonth" name="education_lastMonth" value={formData.education_lastMonth}  onChange={handleInputChange}>

            <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
              
              
              
             
              
              
            

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="education_lastYear"
              name="education_lastYear"
              value={formData.education_lastYear}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section>
          <p className="group-title">Certificaciones y cursos</p>
          <div className="main-input-group">
            <input
              type="text"
              className="group-large-input"
              placeholder='Empresa emisora'
              id="certification_company"
              name="certification_company"
              value={formData.certification_company}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="group-large-input"
              placeholder='Nombre de la certificación o curso'
              id="certification_name"
              name="certification_name"
              value={formData.certification_name}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="education_startDate" className='startDate'>Fecha de inicio</label>
          <div className="container-date">
            <select className="date" placeholder='Mes' id="certification_startMonth" name="certification_startMonth" value={formData.certification_startMonth} onChange={handleInputChange}>
            <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
              
            </select>
              
              
            

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="certification_startYear"
              name="certification_startYear"
              value={formData.certification_startYear}
              onChange={handleInputChange}
            />
          </div>

          <label htmlFor="education_lastMonth">Fecha de finalización</label>
          <div className="container-date">
            <select className="date" placeholder='Mes' id="certification_lastMonth" name="certification_lastMonth" value={formData.certification_lastMonth} onChange={handleInputChange}>
            <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
              
              
              
 
            

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="certification_lastYear"
              name="certification_lastYear"
              value={formData.certification_lastYear}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section>
          <p className="group-title">Experiencia laboral</p>
          <div className="main-input-group">
            <input
              type="text"
              className="group-large-input"
              placeholder='Nombre de la empresa'
              id="experience_nameCompany"
              name="experience_nameCompany"
              value={formData.experience_nameCompany}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="group-large-input"
              placeholder='Cargo'
              id="experience_position"
              name="experience_position"
              value={formData.experience_position}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="education_startDate" className='startDate'>Fecha de inicio</label>
          <div className="container-date">
            <select className="date" placeholder='Mes'  id="experience_startMonth" name="experience_startMonth" value={formData.experience_startMonth} onChange={handleInputChange}>
            <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
              
              
              
             
              
              
              
            

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="experience_startYear"
              name="experience_startYear"
              value={formData.experience_startYear} 
              onChange={handleInputChange}
            />
          </div>

          <label htmlFor="experience_lastMonth">Fecha de finalización</label>
          <div className="container-date">
            <select className="date" placeholder='Mes' id="experience_lastMonth" name="experience_lastMonth" value={formData.experience_lastMonth} onChange={handleInputChange}>
              
            <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
              
              </select>

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="experience_lastYear"
              name="experience_lastYear"
              value={formData.experience_lastYear} 
              onChange={handleInputChange}
            />
            
          </div>
        </section>

        <section>
          <label htmlFor="knowledge" className="group-title">Conocimientos</label>
          <div className="container-knowledge"> 
          <textarea
            id="knowledge"
            name="knowledge"
            placeholder='Conocimientos'
            value={formData.knowledge}
            onChange={handleInputChange}
          />
            
          </div>
          
        </section>
     
        <button  className='saveButton' onClick={handleSubmit} type="submit">Guardar</button>
    
        </form>
        <div className='squares2-container'>
    <img src={squares2} alt="squares2" className="squares2" />
    </div>
      </div>
    </>
  );
}

export { Form };
