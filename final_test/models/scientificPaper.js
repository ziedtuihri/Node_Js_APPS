import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
    phdStudentId: {
        type: String
    },
    conferenceId: {
        type: String,
        required: [true, 'adress is required'],
        maxlength: [30, 'A adress  must have less or equal then 30   characters'],
        minlength: [3, 'A adress  must have more or equal then 10 characters']
    },
    status: {
        type: Boolean
    },
},
    {
        timestamps: true
    }
);

export default model("ScientificPaper", restaurantSchema);