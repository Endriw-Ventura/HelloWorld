import styles from "./Banner.module.css";
import coloredImage from "assets/circulo_colorido.png";
import photo from "assets/minha_foto.png";
import { UrlPhoto } from "data/consts";

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
          consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
          pariatur?
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={coloredImage}
          aria-hidden="true"
        />
        <img
          className={styles.minhaFoto}
          src={UrlPhoto()}
          alt="Photo of Endriw smiling"
        />
      </div>
    </div>
  );
}

export default Banner;
