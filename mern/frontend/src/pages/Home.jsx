import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import ArticleTable from "../components/ArticleTable";
import ArticleCard from "../components/ArticleCard";
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import LoginButton from "../components/Login";
import LogoutButton from "../components/Logout";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("cards");
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ["Arts", "Mathematics", "Technology"];
  const { isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/articles/")
      .then((res) => {
        setArticles(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredArticles = articles.filter((article) => {
    const keywordMatch = article.name.toLowerCase().includes(searchKeyword.toLowerCase());
    const categoryMatch = !selectedCategory || article.category === selectedCategory;
    return keywordMatch && categoryMatch;
  });
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="p-4">
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      
      <div className="flex items-center justify-between">
        <h1 className="mt-8 mb-2 text-2xl">Article List</h1>
        <Link to="/articles/create">
          <MdOutlineAddBox className="mt-8 mb-2 text-4xl text-green-600" />
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <button
          className="px-4 py-1 bg-green-300 rounded-lg hover:bg-green-600"
          onClick={() => setShowType("cards")}
        >
          Cards
        </button>
        <button
          className="px-4 py-1 bg-green-300 rounded-lg hover:bg-green-600"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
      </div>

      <div className="flex gap-4 mt-4">
        <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
        <SearchBar onSearch={setSearchKeyword} />
      </div>


      {loading ? (
        <Spinner />
      ) : showType === "cards" ? (
        <ArticleCard articles={filteredArticles} />
      ) : (
        <ArticleTable articles={filteredArticles} />
      )}
    </div>
  );
};

export default Home;
