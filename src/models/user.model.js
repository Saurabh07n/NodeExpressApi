const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: String,
    id: String,
    name: String,
    owner: String,
    priority: String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);