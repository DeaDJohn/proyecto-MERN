const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password:{

    },
    registro:{

    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema)