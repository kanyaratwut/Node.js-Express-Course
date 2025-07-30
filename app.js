const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello Kanyarat!');
}); //ใช้สำหรับจัดการ request ที่เข้ามาหน้า / จะส่งอะไรกลับไป

app.listen(port, () => {
    debug(`Example app listening at ` + chalk.green(port));
}); //รอฟังที่ port ที่กําหนด