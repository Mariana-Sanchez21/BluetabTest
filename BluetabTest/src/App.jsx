import  { useState } from 'react';
import './App.css';
import { Form } from './components/Form';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    education: '',
    certificatesAndCourses: '',
    professionalExperience: '',
    skills: '',
  });

  const handleFileUpload = (pdfData) => {
    
    setFormData((prevData) => ({
      ...prevData,
      name: pdfData.text, 
      summary: pdfData.text, 
    }));
    console.log('Uploaded PDF data:', pdfData);
  };

  return (
    <>
     
      <Form handleFileUpload={handleFileUpload} formData={formData} />
   
    </>
  );
}

export default App;
