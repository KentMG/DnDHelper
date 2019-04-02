const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@dndhelper-kyqmm.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
const express = require('express');
const router = express.Router();
var cors = require('cors');
express().use("*", cors());

const Character = require('./models').Characters
const Shapes = require('./models').Shapes
const Abilities = require('./models').Abilities

router.post("/Update", function(req, res){
    let Char = new Character({
        Name: req.body.name,
        Class: req.body.class,
        Level: req.body.level,
        HP: req.body.hp,
        AC: req.body.ac,
        WildShapes: req.body.shapes,
        Abilities: req.body.abilities,
        Spells: req.body.spells
    });
    Char.save();
    res.send("ok");
})

router.get('/Abilities/:id', (req, res) => {
    let id = req.params.id;
    Abilities.findById(id, (err, oneAbility) => {
        if (err) console.log(err);
        res.json(oneAbility);
    })
});

router.get("/Characters", function (req, res) {

    // client.connect(err => {
    //     const collection = client.db("DnDHelper").collection("Characters");
    Character.find({}, (err, characters) => {
        if (err) {
            throw err;
        }
        console.log(characters)
        res.json(characters);
    });
    //     client.close();
    // });

})

// router.get("/Shapes/:id", function (req, res) {

//     // client.connect(err => {
//         // const collection = client.db("DnDHelper").collection("Shapes");

//         WildShapes.map(shape => {
//           shape = Shapes.find({shape});
//           that.setState({Shapes:that.state.Shapes.push(shape)})    
//         })
//         that.setState({Shapes})
//         // client.close();
//     //   });

// })


router.get('/Shapes/:id', (req, res) => {
    let id = req.params.id;
    Shapes.findById(id, (err, oneShape) => {
        if (err) console.log(err);
        res.json(oneShape);
    })
});

module.exports = router;