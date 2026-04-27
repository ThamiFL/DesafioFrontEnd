import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Lista.module.scss";



export default function Desaparecidos() {
  const [listaDesaparecidos, setListaDesaparecidos] = useState([]);

  const carregarDados = async () => {
    const resposta = await axios.get(
      "https://desafiobackend-bitc.onrender.com/desaparecidos",
    );
    setListaDesaparecidos(resposta.data);
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <section className={styles.desaparecidos}>
      <h2>Lista De Desaparecidos</h2>



      <section className={styles.cards}>
        {listaDesaparecidos.map((item) => (
          <article key={item.id} className={styles.card}>
            <img src={item.foto} alt=""/>
            <h3>{item.nome}</h3>
            <p>{item.idade}</p>
            <p>{item.caracteristicas}</p>
            <p>{item.roupa}</p>
            <p>{item.ultimo_local}</p>
            <p>{item.condicoes_saude}</p>
            <p>{item.endereco}</p>
            <div>{item.status}</div>
          </article>
        ))}
      </section>
    </section>
  );
}
