import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const ArticleCard = ({ articles }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((item) => (
        <div
          key={item._id}
          className="relative px-4 py-2 m-4 bg-blue-300 hover:shadow-lg hover:bg-blue-400"
        >
          <h2 className="absolute px-2 py-1 text-xs bg-blue-200 rounded-md top-1 right-1">
            {item.category}
          </h2>
          <div className="flex items-center justify-start gap-x-2">
            <BiUserCircle className="text-2xl text-black" />
            <h2 className="my-1">{item.name}</h2>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <PiBookOpenTextLight className="text-2xl text-black" />
            <h2 className="my-1">{item.type}</h2>
          </div>
          <span>
            <h1>Preview:</h1>
            <h2 className="text-black overflow-hidden text-ellipsis whitespace-nowrap">{item.about}</h2>
          </span>
          <div className="flex items-center justify-between p-4 mt-4 gap-x-2">
            <Link to={`/articles/details/${item._id}`}>
              <BsInfoCircle className="text-2xl text-green-600 hover:text-black" />
            </Link>
            <Link to={`/articles/edit/${item._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/articles/delete/${item._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleCard;
