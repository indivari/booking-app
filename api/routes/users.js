import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user , you are logged in");
});

router.get("/checkUser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user, you are logged in and you can delete your account");
});

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello Admin, you are logged in and can delete all accounts");
});

//update

router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/:id", getUser);

//get all
router.get("/", getAllUsers);

export default router;
