const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Find all
router.get('/', async(req,res) => {
    const products = await Product.find()
    try{
           if (products && products[0] != undefined) {
            res.json(products)
           } else {
            res.send('Empty Database')
           }           
    }catch(err){
        res.send('Error ' + err)
    }
})
// Find by Id
router.get('/:id', async(req,res) => {
    const product = await Product.findById(req.params.id)
    try {
        if (product && product != null)
        res.json(product)
        else
        res.send('Product not found')
    } catch (err) {
        res.send('Error ' + err)
    }    
})

// Save a product
router.post('/', async(req,res) => {
    const product = new Product({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    })

    try{
        const a1 =  await product.save() 
        res.json(a1)
    }catch(err){
        res.send("Error at: " + err)
    }
})
// Change product
router.patch('/:id',async(req,res)=> {
    try{
        const product = await Product.findById(req.params.id) 
        product.name = req.body.name
        product.brand = req.body.brand
        product.price = req.body.price
        product.category = req.body.category
        product.stock = req.body.stock
        const a1 = await product.save()
        res.json(a1)   
    }catch(err){
        res.send("Error at: " + err)
    }

})
// Delete product
router.delete('/:id', async(req,res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    try{
        if (product && product != null){
            res.send('Product deleted')
        } else {
            res.send("Can't delete a non-existent product")
        }           
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router