import { getAllGames, postGames } from "../controller/game.js";
import { postDeveloper,getAllDeveloper } from "../controller/developer.js"
import { Router } from "express";

const router=Router()


router.get('/games', getAllGames)
router.post('/games', postGames)
router.get('/developer', getAllDeveloper)
router.post('/developer', postDeveloper)


export default router