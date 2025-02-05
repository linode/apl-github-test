const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


//new feature
//major change
//small fix
//another fix
//some awesome feature
// major change

//feature number 15697
//feature number 6015
