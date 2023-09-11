import { GiBookmarklet } from "react-icons/gi"

function Header() {
  return (
    <div className='flex bg-gray-800 p-4 text-white justify-between border border-black drop-shadow-md'>
      <span className="flex">
        <GiBookmarklet className="text-green-600 text-4xl"/>
        <h1 className="mx-2 text-green-600 text-4xl">EduArchive</h1>
      </span>
      <button className="bg-green-600 p-1.5 rounded mx-2">Placeholder</button>
    </div>
  )
}

export default Header