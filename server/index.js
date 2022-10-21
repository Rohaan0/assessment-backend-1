const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());

app.use(cors());


const { getCompliment, getNewFortune, getFortunes, deleteFortune, createFortune } = require('./controller.js')

app.get('/api/fortune', getFortunes)

app.delete('/api/fortune/:id', deleteFortune)

app.post('/api/fortune', createFortune)

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getNewFortune)



app.listen(4000, () => console.log("Server running on 4000"));
