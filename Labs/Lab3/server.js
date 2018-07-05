const connect = require('connect')
const url = require('url');

const add = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    const {x,y} = queryString;
 
    res.end(`
    <h1>Adding Numbers</h1>
    x: ${x}</br>
    y: ${y}</br>
    x + y: ${parseInt(x) + parseInt(y)}
    `);
};

const substract = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    const {x,y} = queryString;
 
    res.end(`
    <h1>Subtract Numbers</h1>
    x: ${x}</br>
    y: ${y}</br>
    x - y: ${parseInt(x) - parseInt(y)}
    `);
};

const multiply = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    const {x,y} = queryString;
 
    res.end(`
    <h1>Multiply Numbers</h1>
    x: ${x}</br>
    y: ${y}</br>
    x * y: ${parseInt(x) * parseInt(y)}
    `);
};

const divide = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    const {x,y} = queryString;
 
    res.end(`
    <h1>Divide Numbers</h1>
    x: ${x}</br>
    y: ${y}</br>
    x / y: ${parseInt(x) / parseInt(y)}
    `);
};
const app = connect();

app.use('/add', add);
app.use('/subtract', substract);
app.use('/multiply', multiply);
app.use('/divide', divide);

app.listen(3000);
