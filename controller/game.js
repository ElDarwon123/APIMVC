import GamesSchema from '../models/game.js'

export const getAllGames=async(req,res)=>{
    try {
        const foundGames=await GamesSchema.find()
        res.status(200).json({foundGames})
    } catch (error) {
        res.send(error)
    }
}

export const postGames=async(req, res)=>{
    try {
        const {name, image, description, brand}= req.body

        const newGame= new GamesSchema({
            name,
            image,
            description,
            brand
        })
        const savedGame=await newGame.save()
    
        res.status(200).json({message:"juego guardada cabron", savedGame})
    } catch (error) {
        res.status(400).json({message:`SERVER ERROR! ${error}`})
    }
    
}