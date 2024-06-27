import { Link, useNavigate } from "react-router-dom";
import styles from "./PostCard.module.css";
import Button from "components/Button";

function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/posts/${post.id}/capa.png`}
          alt="post image"
        ></img>
        <p className={styles.titulo}> {post.titulo} </p>
        <Button>Ler</Button>
      </div>
    </Link>
  );
}
export default PostCard;
