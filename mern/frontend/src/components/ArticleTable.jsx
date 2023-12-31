import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const ArticleTable = ({ articles }) => {
  return (
    <table className="w-full mt-4 border-separate border-spacing-0.5">
      <thead className="bg-green-300">
        <tr>
          <th className="border rounded-sm border-slate-600">#</th>
          <th className="border rounded-sm border-slate-600">Category</th>
          <th className="border rounded-sm border-slate-600 max-md:hidden">
            Type
          </th>
          <th className="border rounded-sm border-slate-600 max-md:hidden">
            Name
          </th>
          <th className="border rounded-sm border-slate-600">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-blue-300">
        {articles.map((article, index) => (
          <tr key={article._id} className="h-8">
            <td className="text-center border rounded-sm border-slate-700">
              {index + 1}
            </td>
            <td className="text-center border rounded-sm border-slate-700">
              {article.category}
            </td>
            <td className="text-center border rounded-sm border-slate-700 max-md:hidden">
              {article.type}
            </td>
            <td className="text-center border rounded-sm border-slate-700 max-md:hidden">
              {article.name}
            </td>
            <td className="text-center border rounded-sm border-slate-700">
              <div className="flex justify-center gap-x-4">
                <Link to={`/articles/details/${article._id}`}>
                  <BsInfoCircle className="text-2xl text-green-600 hover:text-black" />
                </Link>
                <Link to={`/articles/edit/${article._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/articles/delete/${article._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleTable;
