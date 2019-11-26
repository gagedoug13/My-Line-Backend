const express = require('express')

const { User } = require('../models/user')


const router = express.Router()

router.get('/', async (req, res) => {
    const users = await User.query()
    res.json(users)
})

router.post('/', async (req, res) => {
    const newUser = req.body
  
    const user = await User.query().insert(newUser)
  
    res.send(user)
})



router.get('/:id', async (req, res) => {
    const user = await User.query().findById(req.params.id).eager('favorites')
    res.json(user)
})




module.exports = router
