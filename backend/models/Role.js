import { mongoose } from "../routes/allRoutes.js";

const roleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
}, {
    timestamps : true,
})

const Role = mongoose.model("Role", roleSchema);
export default Role;