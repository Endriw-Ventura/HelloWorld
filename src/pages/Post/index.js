import { Route, Routes, useParams } from "react-router-dom";
import styles from "./Post.css";
import posts from "data/posts.json";
import PageModel from "components/PageModel";
import ReactMarkdown from "react-markdown";
import Notfound from "pages/Notfound";
import DefaultPage from "components/DefaultPage";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id == params.id);
  if (!post) {
    return <Notfound />;
  }
  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PageModel photo={`/posts/${post.id}/capa.png`} title={post.titulo}>
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PageModel>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
