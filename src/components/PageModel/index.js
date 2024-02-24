import styles from "./PageModel.module.css";

export default function PageModel({ photo, title, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <h2 className={styles.titulo}>{title}</h2>
      <div className={styles.postContainer}>{children}</div>
    </article>
  );
}
