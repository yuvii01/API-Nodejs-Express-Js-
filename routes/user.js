import express from "express";
import { User } from "../models/user.js";
import { FindUser, getAllUsers, getNewUser, loginUser, logout, myProfile} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// router.get("/all", getAllUsers);

router.post("/new", getNewUser);
router.get("/login/:email/:password", loginUser);
router.get("/me",isAuthenticated , myProfile);
router.get("/logout", logout);


router.get("/userid", FindUser);
// router.post("/userid/:id", FindUserbyId);
// router.put("/userid/:id", updateuser);
// router.delete("/userid/:id", deleteuser);
    
    
    
   






        export default router ;