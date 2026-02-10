const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Route to handle form submission
app.post('/submit-romance', (req, res) => {
    console.log("------------------------------------");
    console.log("💖 NEW ROMANCE DATA RECEIVED 💖");
    console.log(`Meeting Date: ${req.body.met_date}`);
    console.log(`How they met: ${req.body.met_story}`);
    console.log(`Why they fell in love: ${req.body.love_reason}`);
    console.log(`Love Language: ${req.body.love_language}`);
    console.log("------------------------------------");
    
    // Redirect to the letter after logging the data
    res.redirect('/letter.html');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Open index.html in your browser and watch this terminal!`);
});
