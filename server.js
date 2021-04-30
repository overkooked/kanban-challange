const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use(express.static('build'));

// app.get('/:dir', function (req, res) {
//     res.sendFile('index.html', { root: `build/${req.params.dir}` });
// })

// app.get('/:dir/:file', function (req, res) {
//     res.sendFile(req.url, { root: './build' });
// })

app.get('/', function (req, res) {
    res.redirect(req.url + 'v1');
})


app.get('/:dir', function (req, res) {
    console.log(req.url);
    const url = req.url === '/favicon.ico' ? 'favicon.ico' : 'index.html'
    res.sendFile(url);
})

app.get('/:dir/:file', function (req, res) {
    res.sendFile(req.url, { root: './' });
})

app.get('/:dir/data/:json', function (req, res) {
    res.sendFile(req.url);
})

app.listen(port, () => console.log(`listening on port ${port}!`));