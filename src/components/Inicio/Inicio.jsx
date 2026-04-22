import { Routes, Route, Link } from "react-router-dom";
import style from "./Inicio.module.scss";
import Cadastro from "../Cadastro/Cadastro";
import Lista from "../Lista/Lista";
import Onda from "../../assets/Ondinha.png";

export default function Inicio() {
  return (
    <>
      <section className={style.section}>
        <section>
          <img className={style.imgOndinha} src={Onda} alt="Onda" />
          <h1>Registro de Desaparecidos em Enchentes</h1>
          <p>
            Ajude a localizar pessoas desaparecidas. Cadastre quem você procura
            ou consulte a lista de registros.
          </p>

          <div>
            <Link to="/cadastro">
              <button className={style.botaoAzul}>Cadastro Desaparecido</button>
            </Link>
            <Link to="/lista">
              <button className={style.botaoBranco}>Ver Lista</button>
            </Link>
          </div>

          <p className={style.P}> ♡ Solidariedade em tempos difíceis</p>

          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/lista" element={<Lista />} />
          </Routes>
        </section>
      </section>
    </>
  );
}
