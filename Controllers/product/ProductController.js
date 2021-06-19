var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
router.use(express.urlencoded({extended:true}));
router.use(express.json());
var Product = require('./Product');

// create a new product
router.post('/',(req, res) =>{
    Product.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category : req.body.category,
        image : req.body.image
    },
    function(err, product) {
        if(err) return res.status(500).send('There was a problem creating products in the database.');
        res.status(200).send(product);
    });
});

// Returns All the products in the database
router.get('/',  (req, res) =>{
    Product.find({}, (err,products)=>{
        if (err) return res.status(500).send("There was a problem finding the products.");
        res.status(200).send(products); 
    });
});
// Get a single product from the database.
router.get('/:id', (req, res)=>{
      Product.findById(req.params.id , (err, product)=>{
        if (err) return res.status(500).send("There was a problem finding the product.");
        if (!product) return res.status(404).send("No product found.");
        res.status(200).send(product);
    });
});

// Detleting a product from a database
router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id , (err, product)=>{
      if (err) return res.status(500).send("There was a problem deleting the product.");
      res.status(200).send(`product ${product.name} was deleted.`);
  });
});

// Update a single usser in the database
router.put('/:id', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, product)=>{
        if(err) return res.status(500).send("Tere was a problem updating the product.");
        res.status(200).send(product);
    });
});


module.exports = router;
