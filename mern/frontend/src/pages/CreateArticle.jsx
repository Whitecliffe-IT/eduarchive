import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [died, setDied] = useState("");
  const [nationality, setNationality] = useState("");
  const [known_for, setKnown_for] = useState("");
  const [notable_work, setNotable_work] = useState("");
  const [about, setAbout] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [location, setLocation] = useState("");
  const [designed_by, setDesigned_by] = useState("");
  const [developer, setDeveloper] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveArticle = () => {
    const data = {
      category,
      type,
      name,
      born,
      died,
      nationality,
      known_for,
      notable_work,
      about,
      year,
      medium,
      dimensions,
      location,
      designed_by,
      developer,
    };
    setLoading(true);
    axios
      .post("http://localhost:3001/articles", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Please check the console.");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-2xl">Create Article</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col max-w-screen-lg p-2 mx-auto border-2 border-green-600 rounded-xl">
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Born</label>
            <input
              type="text"
              value={born}
              onChange={(e) => setBorn(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Died</label>
            <input
              type="text"
              value={died}
              onChange={(e) => setDied(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Nationality</label>
            <input
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Known For</label>
            <input
              type="text"
              value={known_for}
              onChange={(e) => setKnown_for(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Notable Work</label>
            <input
              type="text"
              value={notable_work}
              onChange={(e) => setNotable_work(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">About</label>
            <input
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Year</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Medium</label>
            <input
              type="text"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Dimensions</label>
            <input
              type="text"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Designed By</label>
            <input
              type="text"
              value={designed_by}
              onChange={(e) => setDesigned_by(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-gray-500">Developer</label>
            <input
              type="text"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <button
            className="p-2 my-1 text-white bg-green-600 rounded-md"
            onClick={handleSaveArticle}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateArticle;
