import { Schema, model } from "mongoose";

const menuSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    nbrPaperMax: {
        type: Number
    }
}
);

export default model("Conference", menuSchema);