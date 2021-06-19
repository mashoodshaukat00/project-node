var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    desciption: String,
    category: String,
    image : String
});
mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Product');