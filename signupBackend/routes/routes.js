const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) =>{

    //salt the password
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword =  await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        // pass in secure password
        password:securePassword
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router