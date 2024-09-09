/* eslint-disable no-undef */


const express = require('express');

const { resolve } = require('path');

const app = express();

app.use('/',
    express.static(
        resolve(
            __dirname,
            './dist'
         )
        )
);

app.listen(process.env.PORT || 3000, (err) => {
    if(err) {
        console.error('Error starting server:', err);
        return;
    }

});