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

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedRecipe = recipe.find(n => n._id === id);
    res.send(selectedRecipe)
})


app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    const chefRecipe = recipe.filter(n => parseInt(n.chef_id) === id);
    res.send(chefRecipe)

})
// recipe

app.listen(port, () => {
    console.log(`your api is running on : ${port}`);
})