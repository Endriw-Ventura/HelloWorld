import styles from "./Aboutme.module.css";
import PageModel from "components/PageModel";
import { UrlPhoto } from "data/consts";
import coverPhoto from "assets/sobre_mim_capa.png";

function AboutMe() {
  return (
    <PageModel photo={coverPhoto} title="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Endriw!</h3>
      <img src={UrlPhoto()} alt="foto" className={styles.fotoSobreMim} />
    </PageModel>
  );
}

export default AboutMe;
