const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    sname: {
        type: 'string'
    },
    rating: {
        type: Number
    },
    gonre: {
        type: 'string'
    }
})
const newSeries = new mongoose.model('Series', seriesSchema)

module.exports = newSeries 