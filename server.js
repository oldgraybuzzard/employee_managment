const { prompt } = require('inquirer');
const express = require('express');
const cTable = require('console.table');
const db = require('./db/connection');
const apiRoutes = require('./routes');
// const init = require('./utils/prompts');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//turn on routes
// Use apiRoutes
app.use('/api', apiRoutes);

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      dbMessage();
    });
  });

  dbMessage = () => {
    console.log('-----------------------------------')
    console.log('|                                 |')
    console.log('|       EMPLOYEE MANAGER          |')
    console.log('|                                 |')
    console.log('-----------------------------------')
  };