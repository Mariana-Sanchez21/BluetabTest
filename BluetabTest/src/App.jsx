/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Home } from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element instead of Component */}
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;