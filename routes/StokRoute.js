import express from "express";
import {
  getStoks,
  getStokForTable,
  getStokMainInfo,
  getStokForTransaction,
  getStokById,
  saveStok,
  updateStok,
  deleteStok
} from "../controllers/StokController.js";

const router = express.Router();

router.get("/stoks", getStoks);
router.get("/stokForTable", getStokForTable);
router.get("/stokMainInfo", getStokMainInfo); 
router.get("/stokForTransaction", getStokForTransaction); 
router.get("/stoks/:id", getStokById);
router.post("/stoks", saveStok);
router.patch('/stoks/:id', updateStok);
router.delete('/stoks/:id', deleteStok);

export default router;
