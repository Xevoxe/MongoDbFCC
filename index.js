let dotenv = require('dotenv');
let mongoose = require('mongoose');

dotenv.config();

const connect = mongoose.connect(process.env.MONGOLAB_URI);

