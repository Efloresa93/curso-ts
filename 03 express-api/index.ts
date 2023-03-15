import express from 'express';

//const express = require('express')


const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.status(200).json({
      ok: false,
      msg: 'NO hay token en la petición'
    });

    res.json({
        "Hola": 'Hello World!'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})