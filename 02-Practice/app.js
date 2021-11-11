const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
  res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
  res.json(newProducts)
});

app.get('/api/products/:productID', (req, res) => {
//    console.log(req.params.productID)
    const {productID} = req.params;
    const singleProduct = products.find((product)=>{
        return product.id === Number(productID)
    })
    if(!singleProduct) {
        return res.status(404).send('Product does not exist!')
    }
    return res.json(singleProduct)
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
       console.log(req.params)
        res.send('Hello World!') // http://localhost:3000/api/products/1/reviews/1
});

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,limit)
    }
    res.status(200).json(sortedProducts)
})

// http://localhost:3000/api/v1/query?name=john&id=4 , Terminal { name: 'john', id: '4' }
// http://localhost:3000/api/v1/query?search=a&limit=2, Terminal { search: 'a', limit: '2' }
app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});