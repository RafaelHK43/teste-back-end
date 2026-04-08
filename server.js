const express =  require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const { use } = require('react');
require('dotenev').config();
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
app,use('/api/diario', require('./routes/diariosRoutes'));
 
mongoose.connect(process.env.MONGO_URI).then(()=>
    app.listen(process.env.PORT, () =>
    console.log('servidor Rodando!!!'))
);