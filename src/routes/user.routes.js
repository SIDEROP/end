import { Router } from "express";
import {userGet} from "../controllers/user.js"


let router = Router()

router.route("/get").get(userGet)


export default router