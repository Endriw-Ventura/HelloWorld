import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DefaultPage from "./components/DefaultPage";
import AboutMe from "pages/Aboutme";
import Post from "pages/Post";
import Notfound from "pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
