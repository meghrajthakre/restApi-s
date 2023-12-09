const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('../db/connnection.js');
const newSeries = require('../models/Tvseries')

// we need to convert into json 
app.use(express.json());


app.post('/series', async (req, res) => {
    try {

        const series = new newSeries(req.body);
        const seriesAdd = await series.save();
        res.status(200).send(seriesAdd)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)

    }
})

app.get('/series', async (req, res) => {
    try {
        const sData = await newSeries.find()
        res.status(200).send(sData)

    } catch (error) {
        console.log(error);
    }
})


app.listen(port, () => {
    console.log(`listening on http://127.0.0.1:${port}`);
});