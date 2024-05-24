const fastify = require('fastify');
const mongoose = require('mongoose');
require('dotenv').config();

const app = fastify();

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("database connected successfully !");
}).catch((err) => {
  console.log(` There was an error connecting to database. Err: ${err}`);

  process.exit(1);
})

app.get("/", (req, res) => {
  
  res.code(200).send("hello");
  
});

app.register(require('./auth/route'),{prefix:'/auth'})


module.exports = app;