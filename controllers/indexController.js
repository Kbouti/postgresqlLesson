

const {body, validationResult } = require("express-validator");



const handleFormSubmit = async (req, res) => {
    console.log(`Form submit event triggered`)
    const username = req.params.username;
    console.log(`username: ${username}`);

    // console.log(req.params)
}

module.exports = handleFormSubmit