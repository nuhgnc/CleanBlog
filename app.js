const express = require('express');
const app = express();

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

app.get('/', (req, res) => {
    res.send(blog);
});

const port = 3000;
app.listen(port, (req) => {
    console.log(`sunucu ${port} ile çalışıyor`);
});
