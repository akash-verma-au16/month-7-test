const cluster = require('cluster');
const { cpus } = require('os');

const numCPUs = cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const express = require('express');
  const app = express();

  app.get('/count', (req, res) => {
    let count = 0;
    for (let i = 0; i <= 50000000000; i++) {
      count += 1;
    }

    res.json({ count });
  });

  app.get('/health', (req, res) => {
    res.json({ msg: 'Dummy JSON Data' });
  });

  app.get('*', (req, res) => {
    res.json({
      Info: 'Two Routes:',
      '/count': 'returns count value',
      '/health': 'returns Dummy Data',
    });
  });

  app.listen(3000);

  console.log(`Process ${process.pid} started`);
}
