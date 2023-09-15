import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateArticle from "./pages/CreateArticle";
import ShowArticle from "./pages/ShowArticle";
import EditArticle from "./pages/EditArticle";
import DeleteArticle from "./pages/DeleteArticle";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/articles/create" element={<CreateArticle />} />
      <Route path="/articles/details/:id" element={<ShowArticle />} />
      <Route path="/articles/edit/:id" element={<EditArticle />} />
      <Route path="/articles/delete/:id" element={<DeleteArticle />} />
    </Routes>
  );
};

export default App;
