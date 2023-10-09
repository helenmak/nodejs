const express =require('express');
const cors =require('cors');
const bodyParser =require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use('/', (req,res)=> {
  res.status(200).json('HELLOE')
})


const PORT = 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
