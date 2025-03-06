const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// minor fix. can be backported to v4.3.x
// BREKING CHANGE: The old way of doing things is no longer supported
// and a fix is needed
// a new feature
//a new fix
// a fix
// a new fix
// a new feature
// a new feature with a breaking change
// a feature
// a new feature
// a new performance improvement
