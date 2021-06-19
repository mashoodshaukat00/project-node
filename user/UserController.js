var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
router.use(express.urlencoded({extended:true}));
router.use(express.json());
var User = require('./User');

// create a new user
router.post('/',(req, res) =>{
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
    function(err, user) {
        if(err) return res.status(500).send('wtf was that');
        res.status(200).send(user);
    });
});

// Returns All the users in the database
router.get('/', (req, res) =>{
    User.find({}, (err,users)=>{
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users); 
    });
});
// Get a single user from the database.
router.get('/:id', (req, res)=>{
      User.findById(req.params.id , (err, user)=>{
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// Detleting a user from a database
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id , (err, user)=>{
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send(`User ${user.name} was deleted.`);
  });
});

// Update a single usser in the database
router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, user)=>{
        if(err) return res.status(500).send("Tere was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;
