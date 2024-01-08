import express from "express";
import { body } from "express-validator";

import { addOnce, getAll } from "../controllers/conference.js";

const router = express.Router();

router
  .route("/")
  .post(addOnce);

  export default router;