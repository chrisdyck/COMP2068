const connect = require('connect')

const acc = require('accounting');

const url = require('url');

const calculateTax = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    const {amount} = queryString;
    const HST = amount * 0.13;
    const total = parseFloat(HST) + parseFloat(amount);

    // res.end(JSON.stringify(queryString));
    res.end(`
    <h1>Tax Calculator</h1>
    Amount: ${acc.formatMoney(amount)}</br>
    HST: ${acc.formatMoney(HST)}</br>
    Total: ${acc.formatMoney(total)}
    `);
};

const app = connect();


app.use('/calculatetax', calculateTax);

app.listen(3000);
