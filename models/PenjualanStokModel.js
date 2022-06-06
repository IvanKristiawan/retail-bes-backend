import mongoose from "mongoose";

const PenjualanStokSchema = new mongoose.Schema({
    nomorNota: {type: String},
    jenis: {type: String},
    total: {type: Number, default: 0},
}, {timestamps: {}})

export default mongoose.model('PenjualanStok', PenjualanStokSchema);