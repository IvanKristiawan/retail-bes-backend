import Supplier from "../models/SupplierModel.js";

export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getSupplierForTable = async (req, res) => {
  try {
    const suppliers = await Supplier.find(
      {},
      { _id: 1, kode: 1, namaSupplier: 1, alamatSupplier: 1, kota: 1 }
    );
    res.json(suppliers);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getSupplierMainInfo = async (req, res) => {
  try {
    const suppliers = await Supplier.find(
      {},
      { _id: 1, kode: 1, namaSupplier: 1 }
    );
    res.json(suppliers);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.json(supplier);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveSupplier = async (req, res) => {
  const supplier = new Supplier(req.body);
  try {
    const insertedSupplier = await supplier.save();
    // Status 201 = Created
    res.status(201).json(insertedSupplier);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedSupplier);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const deletedSupplier = await Supplier.deleteOne({ _id: req.params.id });
    // Status 200 = Successful
    res.status(200).json(deletedSupplier);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
