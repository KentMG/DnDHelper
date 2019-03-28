const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  Name: { type: String},
  Class: { type: String},
  Level: { type: Number},
  HP: { type: Number},
  AC: { type: Number},
  WildShapes: { type: Array, "default": [] },
  Abilities:{ type: Array, "default": [] },
  Spells:{ type:  Array, "default": [] }
}, {collection : 'Characters'});

const ShapesSchema = new Schema({
  Name: { type: String},
  HP: { type: Number},
  AC: { type: Number},
  Speeds: { Speed: { type: String }},
  Stats:[{type: Number}],
  Skills:[{type: Number}],
  Senses:[{type: Number}],
  Abilities:{ type:  Array, "default": [] },
  Actions:{ type:  Array, "default": [] }
});

const Shapes = mongoose.model("Shape", ShapesSchema, "Shapes");
const Characters = mongoose.model("Character", CharacterSchema);
module.exports.Characters = Characters;
module.exports.Shapes = Shapes;


