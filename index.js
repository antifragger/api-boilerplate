const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Import routes
const userRoute = require('./src/routes/user');

// Invoke Dotenv so environment variables are loaded
dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('[Success] - Connected to MongoDB'))
  .catch((err) => console.log('[Error] - ', err));

// Middleware that makes sure that express and api responses are JSON formats
app.use(express.json());
app.use(bodyParser.json());

// Manage CORS by whitelisting domains
const whitelistDomains = process.env.WHITELIST_DOMAINS;
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelistDomains.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('[Access denied] - Not allowed by CORS'))
    }
  }
}
app.use(cors());

// Routes middleware
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log('[Success] - Server up and running');
});
