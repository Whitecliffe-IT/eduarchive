import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
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
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/articles/${id}`)
      .then((res) => {
        const {
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
        } = res.data;
        setCategory(category);
        setType(type);
        setName(name);
        setBorn(born);
        setDied(died);
        setNationality(nationality);
        setKnown_for(known_for);
        setNotable_work(notable_work);
        setAbout(about);
        setYear(year);
        setMedium(medium);
        setDimensions(dimensions);
        setLocation(location);
        setDesigned_by(designed_by);
        setDeveloper(developer);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Please check the console.");
        console.log(error);
      });
  }, [id]);
  const handleEditArticle = () => {
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
      .put(`http://localhost:3001/articles/${id}`, data)
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col max-w-screen-lg p-10 bg-blue-300 mx-auto rounded-xl">
          <div className="flex justify-center">
            <h1 style={{fontFamily: "typo3"}} className="my-4 text-4xl font">Edit Article</h1>
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Born</label>
            <input
              type="text"
              value={born}
              onChange={(e) => setBorn(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Died</label>
            <input
              type="text"
              value={died}
              onChange={(e) => setDied(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Nationality</label>
            <input
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Known For</label>
            <input
              type="text"
              value={known_for}
              onChange={(e) => setKnown_for(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Notable Work</label>
            <input
              type="text"
              value={notable_work}
              onChange={(e) => setNotable_work(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">About</label>
            <input
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Year</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Medium</label>
            <input
              type="text"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Dimensions</label>
            <input
              type="text"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white">Designed By</label>
            <input
              type="text"
              value={designed_by}
              onChange={(e) => setDesigned_by(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <div className="my-1">
            <label className="mr-4 text-base text-white
              ">Developer</label>
            <input
              type="text"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
              className="w-full p-1 border-2 border-gray-500"
            />
          </div>
          <button
            className="py-2 my-1 text-black bg-green-600 hover:bg-green-400 rounded-md"
            onClick={handleEditArticle}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditArticle;
