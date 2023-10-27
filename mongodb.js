const mongoose = require("mongoose");


const whatsapp = new mongoose.Schema(
    {
        Username: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true}
    },
    {
        collection: "whatsappUser",
    }
)

mongoose.model("whatsapp", whatsapp)