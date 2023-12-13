import DeveloperSchema from '../models/developer.js'

export const getAllDeveloper=async(req,res)=>{
    try {
        const foundDeveloper=await DeveloperSchema.find()
        res.status(200).json({foundDeveloper})
    } catch (error) {
        res.send(error)
    }
}

export const postDeveloper=async(req, res)=>{
    try {
        const {name, image, email}= req.body

        const newDeveloper = new DeveloperSchema({
            name,
            image,
            email
        })
        const savedDeveloper =await newDeveloper.save()
    
        res.status(200).json({message:"desarrollador guardado cabron", savedDeveloper})
    } catch (error) {
        res.status(400).json({message:`SERVER ERROR! ${error}`})
    }
    
}