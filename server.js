const { prompt } = require('inquirer');
const express = require('express');
const cTable = require('console.table');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const init = require('./utils/prompts');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// app.use('/api', apiRoutes);

// app.use ((req, res) => {
//     res.status(404).end();
// });

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      dbMessage();
    });
  });

  afterConnection = () => {
    console.log('-----------------------------------')
    console.log('|                                 |')
    console.log('|       EMPLOYEE MANAGER          |')
    console.log('|                                 |')
    console.log('-----------------------------------')
  };