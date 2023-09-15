const axios = require("axios");

const tokenEndpoint = "https://dev-v2m16sx7yuxjnf7l.us.auth0.com/oauth/token";

const config = process.env;

const oAuthVerifyToken = (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code")
  params.append("client_id", "ghBjGjXvbBU62e6TT1qxy9h3zPmGRV99")
  params.append("client_secret", "FPFqde7_FCKorj8t1tsKEyr2J1evKiMYVCtcoPTxjh80AoS_9l9UiaWKgqDCqj0T")
  params.append("token", token)
  params.append("redirect_uri", "http://localhost:3000/articles")

  axios.post(tokenEndpoint, params)
  .then(response => {
    req.oauth = response.data;
    next()
  })
  .catch(err => {
    console.log(err);
    res.status(403).json(`Reason: ${err.message}`)
  })
};

module.exports = oAuthVerifyToken;
