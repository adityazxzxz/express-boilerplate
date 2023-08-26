const argon2 = require('argon2');
const { writeErrorLog } = require('./logger');
const CryptoJS = require('crypto-js');

const key = process.env.ENCRYPT_KEY

const createHash = async (password) => {
    try {
        const hashedPassword = await argon2.hash(password);
        return hashedPassword;
    } catch (error) {
        writeErrorLog("Error hashing :", error)
        throw error;
    }
}

const verifyHash = async (hashedPassword, password) => {
    try {
        const isPasswordValid = await argon2.verify(hashedPassword, password);
        return isPasswordValid;
    } catch (error) {
        writeErrorLog("Error verify hash :", error);
        throw error;
    }
}

const encrypt = (value) => {
    const encryptedValue = CryptoJS.AES.encrypt(value, key).toString();
    return encryptedValue;
};

const decrypt = (value) => {
    const decryptedValue = CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
    return decryptedPin
}

module.exports = {
    verifyHash,
    createHash,
    encrypt,
    decrypt
}