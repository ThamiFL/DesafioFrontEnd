import { useState } from "react";
import axios from "axios";
import styles from "./Cadastro.module.scss";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [foto, setFoto] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [roupa, setRoupa] = useState("");
  const [ultimo_local, setUltimoLocal] = useState("");
  const [condicoes_saude, setCondicoesDeSaude] = useState("");
  const [nome_responsavel, setNomeDoResponsavel] = useState("");
  const [contato_responsavel, setContatoDoResponsavel] = useState("");
  const [endereco, setEndereco] = useState("");

  const enviarDesaparecido = async (e) => {
    e.preventDefault();

    const novoDesaparecido = {
      nome,
      idade,
      foto,
      caracteristicas,
      roupa,
      ultimo_local,
      condicoes_saude,
      nome_responsavel,
      contato_responsavel,
      endereco,
    };

    await axios.post(
      "https://desafiobackend-bitc.onrender.com/desaparecidos",
      novoDesaparecido,
    );

    alert("Registrado com sucesso!");
  };
  return (
    <section>
    <h2>Cadastro de Desaparecidos</h2>
    <form onSubmit={enviarDesaparecido}>

      <div className={styles.campo}>
        <label>Nome:</label>
        <input type="text" placeholder="Nome do desaparecido" required
          value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Idade:</label>
        <input type="text" placeholder="Idade"
          value={idade} onChange={(e) => setIdade(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Foto (URL):</label>
        <input type="text" placeholder="Foto (URL ou caminho)"
          value={foto} onChange={(e) => setFoto(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Características:</label>
        <input type="text" placeholder="Características"
          value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Roupa que estava usando:</label>
        <input type="text" placeholder="Roupa no momento"
          value={roupa} onChange={(e) => setRoupa(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Último local visto:</label>
        <input type="text" placeholder="Último local visto"
          value={ultimo_local} onChange={(e) => setUltimoLocal(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Condições de saúde:</label>
        <input type="text" placeholder="Condições de saúde"
          value={condicoes_saude} onChange={(e) => setCondicoesDeSaude(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Nome do responsável:</label>
        <input type="text" placeholder="Seu nome aqui"
          value={nome_responsavel} onChange={(e) => setNomeDoResponsavel(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Contato do responsável:</label>
        <input type="text" placeholder="(xx) xxxxx-xxxx"
          value={contato_responsavel} onChange={(e) => setContatoDoResponsavel(e.target.value)} />
      </div>

      <div className={styles.campo}>
        <label>Endereço:</label>
        <input type="text" placeholder="Ex: Rua das Camélias, 105"
          value={endereco} onChange={(e) => setEndereco(e.target.value)} />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </section>
); 
  }
