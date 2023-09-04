import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteArticle = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteArticle = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3001/articles/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Please check th console.");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-2xl">Delete Article</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center max-w-screen-lg p-4 mx-auto border-2 border-green-600 rounded-xl">
        <h3 className="text-xl">
          Are you sure you want to delete this article?
        </h3>
        <button
          className="w-full p-2 m-4 text-white bg-red-600 rounded-md"
          onClick={handleDeleteArticle}
        >
          Yes, delete it!
        </button>
      </div>
    </div>
  );
};

export default DeleteArticle;
