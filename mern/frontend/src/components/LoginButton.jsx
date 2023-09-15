import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-green-600 hover:bg-green-400 p-1.5 px-4 rounded mx-2 text-black" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;