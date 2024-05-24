const app = require('./app/app');

app.listen({ port: 3000 ,host: '0.0.0.0'}, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1)
  }
  console.info(`server is running on : ${address}`);
})