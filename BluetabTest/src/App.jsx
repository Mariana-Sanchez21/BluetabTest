import  { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Button } from './components/Button';

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
    // Update the form fields with the PDF content
    setFormData((prevData) => ({
      ...prevData,
      // You can update these lines to map the PDF content to the appropriate fields.
      name: pdfData.text, // Assuming 'name' corresponds to the name field.
      summary: pdfData.text, // Assuming 'summary' corresponds to the summary field.
    }));
    console.log('Uploaded PDF data:', pdfData);
  };

  return (
    <>
      <Button handleFileUpload={handleFileUpload} />
      <Form handleFileUpload={handleFileUpload} formData={formData} />
    </>
  );
}

export default App;
