const connect = require('connect');

const app = connect();

const o = {
    a: 1,
    b: 2,
    c: "Hi"
};

const hello = (req, res, next) => {res.write('hello new app'); res.end();};
const goodbye = (req, res, next) => {res.write('goodbye new app'); res.end();};
const fallback = (req, res, next) => {res.write('Sorry...I haven\'t coded this yet. Wrong page :)'); res.end();};
const api = (req, res, next) => {
    res.write(JSON.stringify(o)); 
    res.end();};

app.listen(3000);

app.use('/api', api);
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use(fallback);

console.log('server is running on port 3000');