import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const ShowArticle = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-2xl">Article Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col p-10 rounded-xl w-fit bg-blue-300">
          <div className="flex my-2 text-base justify-center">
            <span className="text-black text-4xl">{article.name}</span>
          </div>
          <h2 className="text-black text-2xl">Quick Info:</h2>
          <div className="my-2">
            <span className="mr-4 text-lg text-black underline">Category:</span>
            <span>{article.category}</span>
          </div>
          <div className="my-2">
            <span className="mr-4 text-lg text-black underline">Type:</span>
            <span>{article.type}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Born:</span>
            <span>{article.born}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Died:</span>
            <span>{article.died}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Nationality:</span>
            <span>{article.nationality}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Known For:</span>
            <span>{article.known_for}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Notable Work:</span>
            <span>{article.notable_work}</span>
          </div>
          <h2 className="text-black text-2xl">About:</h2>
          <div className="my-2 text-base">
            <span>{article.about}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Year:</span>
            <span>{article.year}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Medium:</span>
            <span>{article.medium}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Dimensions:</span>
            <span>{article.dimensions}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Location:</span>
            <span>{article.location}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Designed By:</span>
            <span>{article.designed_by}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-lg text-black underline">Developer:</span>
            <span>{article.developer}</span>
          </div>
          <div className="my-0 text-xs">
            <span className="mr-4 text-black underline">Create Time:</span>
            <span>{new Date(article.createdAt).toString()}</span>
          </div>
          <div className="my-0 text-xs">
            <span className="mr-4 text-black underline">Last Update Time:</span>
            <span>{new Date(article.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowArticle;
