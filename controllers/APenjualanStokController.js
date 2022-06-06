import APenjualanStok from '../models/APenjualanStok.js';

export const getAPenjualanStok = async(req, res) => {
    try {
        const aPenjualanStoks = await APenjualanStok.find();
        res.json(aPenjualanStoks);
    } catch (error) {
        // Error 500 = Kesalahan di server
        res.status(500).json({ message: error.message });
    }
}

export const getAPenjualanStokById = async(req, res) => {
    try {
        const aPenjualanStok = await APenjualanStok.findById(req.params.id);
        res.json(aPenjualanStok);
    } catch (error) {
        // Error 404 = Not Found
        res.status(404).json({ message: error.message });
    }
}

export const saveAPenjualanStok = async(req, res) => {
    const aPenjualanStok = new APenjualanStok(req.body);
    try {
        const insertedAPenjualanStok = await aPenjualanStok.save();
        // Status 201 = Created
        res.status(201).json(insertedAPenjualanStok);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}

export const updateAPenjualanStok = async(req, res) => {
    try {
        const updatedAPenjualanStok = await APenjualanStok.updateOne({ _id: req.params.id }, { $set: req.body });
        // Status 200 = Successful
        res.status(200).json(updatedAPenjualanStok);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}

export const deleteAPenjualanStok = async(req, res) => {
    try {
        const deletedAPenjualanStok = await APenjualanStok.deleteOne({ _id: req.params.id });
        // Status 200 = Successful
        res.status(200).json(deletedAPenjualanStok);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}