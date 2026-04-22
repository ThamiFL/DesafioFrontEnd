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
        
        <div>
          <label>Nome:</label>
          <input
            type="text"
            className="campo-texto"
            placeholder="Nome do desaparecido"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <label>Idade:</label>
        <input
          type="text"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <div>
          <label>Foto:</label>
          <input
            type="text"
            placeholder="Foto (URL ou caminho)"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </div>
        <label>Características:</label>
        <input
          type="text"
          placeholder="Características"
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
        />

        <div>
          <label>Que roupa estava usando:</label>
          <input
            type="text"
            placeholder="Roupa no momento"
            value={roupa}
            onChange={(e) => setRoupa(e.target.value)}
          />
        </div>

        <div>
          <label>Último local que foi visto:</label>
          <input
            type="text"
            placeholder="Último local visto"
            value={ultimo_local}
            onChange={(e) => setUltimoLocal(e.target.value)}
          />
        </div>
        <div>
          <label>Condições de Saúde:</label>
          <input
            type="text"
            placeholder=""
            value={condicoes_saude}
            onChange={(e) => setCondicoesDeSaude(e.target.value)}
          />
        </div>

        <div>
          <label>Nome do Responsável:</label>
          <input
            type="text"
            placeholder="Seu nome aqui"
            value={nome_responsavel}
            onChange={(e) => setNomeDoResponsavel(e.target.value)}
          />
        </div>
        <div>
          <label>Contato do Responsável:</label>
          <input
            type="text"
            placeholder="(xx) xxxxx-xxx"
            value={contato_responsavel}
            onChange={(e) => setContatoDoResponsavel(e.target.value)}
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            placeholder="Ex: Rua das Camêlias 105"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}
