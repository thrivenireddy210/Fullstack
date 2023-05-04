const express = require('express');
const cors = require('cors')
const {body,validationResult}=require('express-validator')
const Joi=require('joi')
const app = express();
app.use(cors());
const fs = require('fs');
const { required } = require('joi');

const movieData  = fs.readFileSync('./movies.json');
const movies = JSON.parse(movieData)

app.get('/movies',(req,res)=>{
    res.json(movies);
})
app.post('/create',body('name').isLength({min:3}),
body('rating').isInt({min:2,max:5}),
(req,res)=>{
    const errors = validationResult(req);
    res.send('created succcessfully')
}

)
app.listen(8000,()=>{
    console.log("port 8000 started");
})