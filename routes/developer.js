import { postDeveloper,getAllDeveloper } from "../controller/developer.js"
import { Router } from "express";
// router as variable
const devrouter=Router()

// creating crud
devrouter.get('/developer', getAllDeveloper)
devrouter.post('/developer', postDeveloper)

export default devrouter;
