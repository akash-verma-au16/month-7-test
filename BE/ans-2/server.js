const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const connectDB = require('./db/mongoose');
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/parent', require('./routes/parent'));
app.use('/student', require('./routes/student'));
app.use('/summary', require('./routes/summary'));

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});
