const router = require('express').Router()
const bcrypt = require('bcrypt')
const Users = require('../models/users')

/* REGISTER */
router.post('/register', async ( req, res ) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)
        const newUser = new Users({
            username: req.body.username,
            password: hash
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json(e)
    }
})

/* LOGIN */
router.post('/login', async (req, res) => {
    try {
        const user = await Users.findOne({username: req.body.username})
        const valid = await bcrypt.compare(req.body.password, user.password)

        !user && res.status(400).json("Nom d'utilisateur inconnu")
        !valid && res.status(400).json('Mot de passe incorrect')

        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router