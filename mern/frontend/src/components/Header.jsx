import { GiBookmarklet } from "react-icons/gi"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"


function Header() {
  const {isAuthenticated} = useAuth0()

  return (
    <div className='flex bg-gray-800 p-4 text-white justify-between border border-black drop-shadow-md'>
      <span className="flex">
        <GiBookmarklet className="text-green-600 text-4xl"/>
        <h1 style={{fontFamily: "typo3"}} className="mx-2 text-green-600 text-4xl">EDUARCHIVE</h1>
      </span>
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
    </div>
  )
}

export default Header