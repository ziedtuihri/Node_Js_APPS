import { Schema, model } from "mongoose";

const menuSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'name is required'],
        maxlength: [30, 'A fullname  must have less or equal then 30   characters'],
        minlength: [3, 'A fullname  must have more or equal then 10 characters']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        maxlength: [40, 'A email  must have less or equal then 40   characters'],
        minlength: [10, 'A email  must have more or equal then 10 characters']
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required'],
    },
    image: {
        type: String
    },
}
);

export default model("PhdStudent", menuSchema);