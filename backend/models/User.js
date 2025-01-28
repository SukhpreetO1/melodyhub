import { mongoose } from "../routes/allRoutes.js";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile_number : {
        type: Number,
        required: true,
        unique: true
    },
    date_of_birth : {
        type: Date,
        // required: true,
    },
    password : {
        type: String,
        required: true
    },
    confirm_password : {
        type: String
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        default: null,
    },
}, {
    timestamps : true,
});

const User = mongoose.model("User", userSchema);
export default User;