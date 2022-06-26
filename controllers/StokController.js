import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
import Stok from '../models/StokModel.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export const getStoks = async(req, res) => {
    try {
        const stoks = await Stok.find();
        res.json(stoks);
    } catch (error) {
        // Error 500 = Kesalahan di server
        res.status(500).json({ message: error.message });
    }
}

export const getStokById = async(req, res) => {
    try {
        const stok = await Stok.findById(req.params.id);
        res.json(stok);
    } catch (error) {
        // Error 404 = Not Found
        res.status(404).json({ message: error.message });
    }
}

export const saveStok = async(req, res) => {
    const stok = new Stok(req.body);
    try {
        const insertedStok = await stok.save();
        // Status 201 = Created
        res.status(201).json(insertedStok);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}

export const updateStok = async(req, res) => {
    try {
        const updatedStok = await Stok.updateOne({ _id: req.params.id }, { $set: req.body });
        // Status 200 = Successful
        res.status(200).json(updatedStok);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}

export const deleteStok = async(req, res) => {
    try {
        const stok = await Stok.findById(req.params.id);
        {stok.gambarId && await cloudinary.v2.uploader.destroy(`${stok.gambarId}`, function(error,result) {
            console.log(result, error) 
        })}
        const deletedStok = await Stok.deleteOne({ _id: req.params.id });
        // Status 200 = Successful
        res.status(200).json(deletedStok);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}