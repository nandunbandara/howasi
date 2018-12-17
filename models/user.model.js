const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    email: { type:string, required:true, unique:true },
    hash: { type:string, required:true },
    salt: { type:string, required:true }
});

UserSchema.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString("hex");
};

module.exports = mongoose.model("User", UserSchema);