const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('your server ins running')
})
// for chef port start
app.get('/chef', (req, res) => {
    res.send(chef);
})
// for chef port end

app.listen(port, () => {
    console.log(`your api is running on : ${port}`);
})