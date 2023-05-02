const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')
const recipe = require('./data/recipe.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('your server ins running')
})
// for chef port start
app.get('/chef', (req, res) => {
    res.send(chef);
})
// for chef port end

// recipe
app.get('/recipe', (req, res) => {
    res.send(recipe);
})
// recipe

app.listen(port, () => {
    console.log(`your api is running on : ${port}`);
})