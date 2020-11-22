const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function hashPassword(password){
    try {
    const newP = bcrypt.hash(password);
    return newP;
    } catch (err){
        return err;
    }
} 

module.exports {
    hashPassword;
}