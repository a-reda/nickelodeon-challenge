const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');

const app = express();


const PORT = 3001;
const SCHEDULEURL = 'http://www.nickjr.it/data/schedule.json';
const SCHEDULEFS = './api/schedule-2-channels.json';

app.use(bodyParser.json());

app.get('/api/schedule', (req, res) => {
  axios.get(SCHEDULEURL)
       .then((sched) => {
          res.json(sched.data)
       }).catch((err) => {
          res.status(500)
          res.send({error: err})
       });
});

app.get('/api/schedule2', (req, res) => {
  fs.readFile(SCHEDULEFS, (err, data) => {
    if(err) {
      res.status(500)
      res.send({error: err})
    } else {
      res.json(JSON.parse(data))
    }
  })
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
