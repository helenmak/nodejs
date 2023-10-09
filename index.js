const express =require('express');
const cors =require('cors');


const app = express();

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use('/', (req,res)=> {
  res.status(200).json({ "a": "HELLOE" })
})


const PORT = 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
