import { getAllGames, postGames } from "../controller/game.js";
import { Router } from "express";

const router=Router()


router.get('/games', getAllGames)
router.post('/games', postGames)



export default router