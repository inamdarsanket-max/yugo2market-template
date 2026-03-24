require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Mongo connected'))
.catch(err=>console.error(err));

app.get('/', (req,res)=>res.send('API Running'));

app.listen(process.env.PORT || 5000, '0.0.0.0', ()=>{
  console.log('Server started');
});