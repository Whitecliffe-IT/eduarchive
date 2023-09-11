import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header.jsx"
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-v2m16sx7yuxjnf7l.us.auth0.com"
      clientId="ghBjGjXvbBU62e6TT1qxy9h3zPmGRV99"
      authorizationParams={{
        redirect_uri: "http://localhost:3000",
      }}
    >
      <Header/>
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
