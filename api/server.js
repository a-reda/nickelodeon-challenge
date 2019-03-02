const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/api/schedule', (req, res) => {
  axios.get('http://www.nickjr.it/data/schedule.json')
       .then((sched) => {
          res.json(sched.data)
       }).catch((err) => {
          res.status(500)
          res.send({error: err})
       });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
