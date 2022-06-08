const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://fyp:ubit123456789@cluster0.qgl2hyy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})

