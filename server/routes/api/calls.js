const express = require("express");
const router = express.Router();
const demo = require("@skyfoundry/haystack-auth");
const axios = require("axios");

// Sleep function
// this is here because I am terrible at async functions.  I will eventually destroy this when i have all this async stuff working properly.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Test server
//Simple get to make sure things are working
router.get("/test", async (req, res) => {
  res.send("Success");
});

// POST: LOGIN FUNCTION
// PATH: http://localhost:666/api/calls
// Req: host: url of skyspark server
//      user: user id of a user with proper privileges
//      pw: password of user
// Res: auth: token in its entirety that needs to be passed in auth header

// EX:  host: http://localhost:8080/api/demo
//      user: su
//      pw:   123456

router.post("/", async (req, res) => {
  let creds = {};
  let posted = { host: req.body.host, user: req.body.user, pw: req.body.pw };
  let logMe = new demo.AuthClientContext(posted.host, posted.user, posted.pw);
  logMe.login(
    headers => {
      creds.auth = headers["Authorization"];
      console.log("success: Authorization: " + headers["Authorization"]);
    },
    function(msg) {
      console.log("Failed: " + msg);
    }
  );
  await sleep(1000).then(() => {
    res.status(200).json(creds);
  });
});

// POST: API CALL FUNCTION
// PATH: http://localhost:666/api/calls/query
// Req: host: url of skyspark server
//      auth: auth token taken from LOGIN route
// Res: plaintext response from skyspark in zinc or whatever

// EX:  host: http://localhost:8080/api/demo/eval?expr=readAll(site)
//      auth: bearer authToken=s-G9VEfLvU0a0nkqsiBsPXB_iHMNzfrYbd3xuTLbX0NlU-5

router.post("/query", async (req, res) => {
  let posted = {
    host: req.body.host,
    auth: req.body.auth
  };
  axios
    .get(posted.host, { headers: { Authorization: posted.auth, Accept: 'application/json' } })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log("error 3 " + error);
    })
    .then(data => res.send(data));
});

module.exports = router;
