import axios from "axios";
import { useState, useEffect } from "react";

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
    // Seção principal da página
    <section class="desaparecidos">
      <h2>Lista De Desaparecidos</h2>

      <section className="container-cards">
        {listaDesaparecidos.map((item) => (
          <article key={item.id} className="card">
            {/* Tipo do problema */}
            <h3>{item.nome}</h3>
          </article>
        ))}
      </section>
    </section>
  );
}
