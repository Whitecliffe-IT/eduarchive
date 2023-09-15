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
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center max-w-screen-lg p-10 bg-blue-300 mx-auto rounded-xl">
        <div className="flex justify-center">
          <h1 style={{fontFamily: "typo3"}} className="my-4 text-4xl font">Delete Article</h1>
        </div>
        <h3 className="text-xl">
          Are you sure you want to delete this article?
        </h3>
        <button
          className="w-full p-2 m-4 text-black bg-red-600 hover:bg-red-500 rounded-md"
          onClick={handleDeleteArticle}
        >
          Yes, delete it!
        </button>
      </div>
    </div>
  );
};

export default DeleteArticle;
