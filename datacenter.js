const mongoose = require("mongoose");

const public = mongoose.Schema({
    banlı: Array,
    owner: Array,
    bot: Array
});

module.exports = mongoose.model("evetçaldımnerdenbildin", public);