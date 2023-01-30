const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const billingRoutes = require('./routes/billingRoutes');
const port = process.env.PORT || 5000;


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.1eg3a.mongodb.net/?retryWrites=true&w=majority`;

app.use('/api/billing-list', billingRoutes);
app.use('/api', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


