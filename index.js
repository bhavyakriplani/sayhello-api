const express = require('express');
const app = express();
const port = 80;

app.get('/sayHello', (req, res) => {
    res.status(200).json({ message: "Hello User" });
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});