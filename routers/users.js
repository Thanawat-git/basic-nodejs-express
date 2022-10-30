const uuid = require("uuid")
const _ = require("lodash")
const express = require("express");
const router = express.Router();

const data = require("../MOCK_DATA.json");

// get all users
router.get("/", (req, res) => {
  res.json(data);
});

// get user by id
router.get("/:id", (req, res) => {
    const id = req.params.id
    const isUser = data.some(user=> user.id === parseInt(id))

    if(isUser){
        res.json(data.find(user=> user.id === parseInt(id)))
    } else {
        res.status(404).send(`User id ${id} Not found.`);
    }
});

// search user by fname, lname, gender, email

// create user
router.post("/create", (req, res)=> {
    // body = first_name, last_name, email, gender, ip_address, avatar, 
    const newUser = {
        id: uuid.v4(),
        ...req.body
    }

    if(!newUser.first_name || !newUser.last_name || !newUser.email){
       return res.sendStatus(400)
    }

    data.push(newUser)
    res.status(200).send("Create User Successfully.");
})

router.delete("/delete/:id", (req, res)=> {
    const id = req.params.id
    const isUser = data.some(user=> user.id === parseInt(id))
    if(isUser){
        _.remove(data, (user=> user.id === parseInt(id)))
        res.status(200).send(`Delete User id ${id} Successfully.`);
    } else {
        res.status(404).send(`User id ${id} Not found.`);
    }
})

module.exports = router;
