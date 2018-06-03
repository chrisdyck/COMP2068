const express = require('express');
// const app = express();
const router = express.Router();

// app.get('/', (req, res, next) => {
//     res.send('Hello World');
// });

router.get('/', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.food);
    
    res.send('Hello World');
});

app.listen(3000);
console.log('port 3000')