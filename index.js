const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('your server ins running')
})

app.listen(port, () => {
    console.log(`your api is running on : ${port}`);
})