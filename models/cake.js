const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cakeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    Ocassion: {
      type: String,
      require: true,
    },
    size: { type: String, required: true },
    filling: { type: String, required: true },
    flavour: { type: String, required: true },

    comments: { type: String },
},{
    timestamps: true,
}
)

module.exports = mongoose.model("Cake", cakeSchema);
