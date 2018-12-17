const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    email: { type:string, required:true, unique:true },
    hash: { type:string, required:true },
    salt: { type:string, required:true }
});

// create salted hash from the user entered password and store
UserSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};

// compare the salted hash of the user entered password with the stored
UserSchema.methods.validatePassword = (password) => {
    let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha256").toString("hex");
    return hash === this.hash;
};

UserSchema.methods.generateJWT = () => {

    const today = new Date();
    const exp = new Date();

    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(exp.getTime()/1000, 10)
    }, 's3cr3t');

};

UserSchema.methods.toAuthJSON = () => {

    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT()
    };

};

module.exports = mongoose.model("User", UserSchema);