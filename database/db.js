const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://202152323:202152323@cluster0.fnxp5qj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb'))
    .catch((err) =>
    console.log('error connecting to mongodb', err))

module.exports = mongoose;
