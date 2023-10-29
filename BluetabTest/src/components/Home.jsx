import './Home.css'
import { Link } from "react-router-dom";
import coverImg from '../assets/coverImg.png';

function Home() {
  return (
    <div className="home-container">
      <div className="hola-container">
        <h1>HOLA, WELCOME TO BLUETAB</h1>
        <Link to='/Form' className="create-profile-button">Crear perfil</Link>
      </div>
      <img src={coverImg} alt="cover" className="cover" />
    </div>
  );
}

export { Home };