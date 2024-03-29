import Button from "components/Button";
import styles from "./Notfound.module.css";
import image404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando? Aguarde uns
          instantes e recarregue a página, ou volte para a página inicial
        </p>
        <div className={styles.botaoContainer}>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
        <img className={styles.imagemCachorro} src={image404} />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
