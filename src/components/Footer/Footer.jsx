import coracao from "../../assets/coracaoLaranja.png";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={style.Footer}>
        <div>
          <h2>Feito com</h2>

          <img className={style.imgCoracao} src={coracao} alt="Logo" />
          <p>© Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
