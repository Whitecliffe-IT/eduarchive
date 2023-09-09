import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import ArticleTable from "../components/ArticleTable";
import ArticleCard from "../components/ArticleCard";
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("cards");
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ["Arts", "Mathematics", "Technology"];

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

  return (
    <div className="p-4">
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
