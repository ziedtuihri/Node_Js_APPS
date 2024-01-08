import express from "express";
import { body } from "express-validator";

import multer from "../middlewares/multer-config.js";

import { addOnce, getAll } from "../controllers/phdStudent.js";

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(
    multer,
    body("fullname").isLength({ min: 5 }),
    body("phone").isNumeric({min:8, max: 8 }),
    addOnce);

  export default router;