const express = require('express');
const app = express();
const port = 4000

app.get('/', (req, res) => {
     res.send('My Phones data coming soon');
});

app.listen(port, () => {
     console.log(`My phone server running on port ${port}`);
});