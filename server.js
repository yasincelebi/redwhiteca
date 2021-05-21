const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/api', async (req, res, next) => {
  console.log("'/test' call");
  await axios
    .get('https://wizio.co.uk/test/api/properties/')
    .then((a) => {
      res.send(a.data);
    })
    .catch((err) => next(err));
});

app.listen(4000, () => {
  console.log('sw çalişio');
});
