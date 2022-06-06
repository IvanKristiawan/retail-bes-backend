import express from "express";
import { getSuppliers, getSupplierById, saveSupplier, updateSupplier, deleteSupplier } from '../controllers/SupplierController.js';

const router = express.Router();

router.get('/suppliers', getSuppliers);
router.get('/suppliers/:id', getSupplierById);
router.post('/suppliers', saveSupplier);
router.patch('/suppliers/:id', updateSupplier);
router.delete('/suppliers/:id', deleteSupplier);

export default router;