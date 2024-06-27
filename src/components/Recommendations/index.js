import PostCard from "components/PostCard";
import styles from "./Recommendations.module.css";

export default function Recommendations({ posts }) {
  return (
    <section className={styles.recommended}>
      <h1 className={styles.h1}>Outros posts que você pode gostar:</h1>
      <div className={styles.boxCard}>
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
