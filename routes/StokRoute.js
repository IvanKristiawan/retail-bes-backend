import express from "express";
import {
  getStoks,
  getStokById,
  saveStok,
  updateStok,
  deleteStok
} from "../controllers/StokController.js";

const router = express.Router();

router.get("/stoks", getStoks);
router.get("/stoks/:id", getStokById);
router.post("/stoks", saveStok);
router.patch('/stoks/:id', updateStok);
router.delete('/stoks/:id', deleteStok);

export default router;
