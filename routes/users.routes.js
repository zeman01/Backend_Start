import express from "express";
import {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/:id", getUserById);

// POST request
router.post("/", createUser);

// PUT request
router.put("/:id", updateUser);

// DELETE request
router.delete("/:id", deleteUser);

export default router;
