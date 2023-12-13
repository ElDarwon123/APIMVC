import mongoose, {Schema} from "mongoose"


let DeveloperSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String
})

export default mongoose.model('developer',DeveloperSchema)
