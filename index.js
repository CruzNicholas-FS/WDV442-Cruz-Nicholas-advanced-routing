const express = require("express");
const app = express();

app.get("/products/all", (req, res)=>{
    res.send(`Products, ${req.headers.page}, ${req.headers.sort}, ${req.headers.order}`)
})

app.get("/products/:productId", (req, res)=>{
    res.send(`Product, ${req.params.productId}`)
})

app.get("/products/:productId-:productSize-:productColor", (req, res)=>{
    res.send(`Product, ${req.params.productId}, ${req.params.productSize}, ${req.params.productColor}`)
})

app.listen(3000);