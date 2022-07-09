import mongoose from "mongoose";

const StokSchema = new mongoose.Schema({
    gambarId: [String],
    gambar: [String],
    kode: {type: String},
    namaStok: {type: String},
    merk: {type: String},
    satuanKecil: {type: String},
    satuanBesar: {type: String},
    konversi: {type: Number},
    qty: {type: Number, default: 0},
    hargaJualKecil: {type: Number},
    hargaJualBesar: {type: Number},
    kodeGrup: {type: String},
})

export default mongoose.model('Stok', StokSchema);