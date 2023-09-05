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
        <div className="flex flex-col p-2 border-2 border-green-600 rounded-xl w-fit">
          <div className="my-0 text-xs">
            <span className="mr-4 text-gray-500">Id</span>
            <span>{article._id}</span>
          </div>
          <div className="my-2">
            <span className="mr-4 text-base text-gray-500">Category</span>
            <span>{article.category}</span>
          </div>
          <div className="my-2">
            <span className="mr-4 text-base text-gray-500">Type</span>
            <span>{article.type}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Name</span>
            <span>{article.name}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Born</span>
            <span>{article.born}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Died</span>
            <span>{article.died}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Nationality</span>
            <span>{article.nationality}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Known For</span>
            <span>{article.known_for}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Notable Work</span>
            <span>{article.notable_work}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">About</span>
            <span>{article.about}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Year</span>
            <span>{article.year}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Medium</span>
            <span>{article.medium}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Dimensions</span>
            <span>{article.dimensions}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Location</span>
            <span>{article.location}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Designed By</span>
            <span>{article.designed_by}</span>
          </div>
          <div className="my-2 text-base">
            <span className="mr-4 text-base text-gray-500">Developer</span>
            <span>{article.developer}</span>
          </div>
          <div className="my-0 text-xs">
            <span className="mr-4 text-gray-500">Create Time</span>
            <span>{new Date(article.createdAt).toString()}</span>
          </div>
          <div className="my-0 text-xs">
            <span className="mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(article.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowArticle;
