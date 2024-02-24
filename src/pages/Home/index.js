import styles from "./Home.module.css";
import Post from "components/Post";
import Banner from "components/Banner";
import posts from "data/posts.json";

function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Home;
