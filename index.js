const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./index.html', (err, data) => handleFile(err, data, res));
});

app.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => handleFile(err, data, res));
});

app.get('/contact-me', (req, res) => {
    fs.readFile('./contact-me.html', (err, data) => handleFile(err, data, res));
});

app.get('*', (req, res) => {
    fs.readFile('./404.html', (err, data) => handleFile(err, data, res));
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });

let handleFile = (err, data, res) => {
    if(err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end()
}
