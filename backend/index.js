const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routers/auth');
const product = require('./routers/product');
require('dotenv').config();
require('./models/db');

const PORT = process.env.PORT || 5000; 
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/products',product);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
