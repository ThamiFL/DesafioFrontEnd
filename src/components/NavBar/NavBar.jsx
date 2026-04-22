import { Routes, Route, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import Inicio from "../Inicio/Inicio";
import Cadastro from "../Cadastro/Cadastro";
import Lista from "../Lista/Lista";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <>
      <nav className={styles.NavBar}>
        <img className={styles.imgLogo} src={Logo} alt="Logo" />
    <div>
    <Link to="/">
    
    <h2>Volta Pra Casa</h2>
    <p>Registro de Desaparecidos</p></Link>
    </div>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/lista">Desaparecidos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </>
  );
}
