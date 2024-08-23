
const {body, validationResult } = require("express-validator");



const handleFormSubmit = async (req, res) => {
    console.log(`Form submit event triggered`)
    const username = req.body.username;
    console.log(`username: ${username}`);


// test: 
    console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
}

module.exports = handleFormSubmit