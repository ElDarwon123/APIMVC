import mongoose, {Schema} from "mongoose"


let GamesSchema = new mongoose.Schema ({
    name: String,
    image: String,
    description: String,
    brand: [{
        name: String
    }]
})

export default mongoose.model('games',GamesSchema)