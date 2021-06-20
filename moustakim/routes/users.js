var express = require('express');
var router = express.Router();
const usersRepo = require('../respositories/users')


router.get('/', async function(req, res, next) {
  const  page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  res.send(await  usersRepo.getUsers(offset,limit))
});



router.delete('/:id',async function(req,res,next){
    const id = req.params.id
    await usersRepo.deleteUser(id)
    res.send({id}) 
})

router.put('/',async function(req,res,next){
    const user = req.body
  res.send(await usersRepo.updateUser(user))
})

router.post('/',async function(req,res,next){
    const user = req.body
    const retrievedUser = await usersRepo.getUserByEmail(user.email) 
    if(!retrievedUser){
      res.send(await usersRepo.addUser(user))
    }else{
      res.status(400).json({ message: 'Deja existe!' })
    }
})

router.get('/:id',async function(req, res, next) {
      res.send(await usersRepo.getUser(req.params.id))
})

module.exports = router;
