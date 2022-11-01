const express = require("express");
const user = require("../../users");

const router = express.Router();

// get all users
router.get("/", (req, res) => {
  res.json(user.findAll());
});

// get user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = user.findById(id);
  if (data && data !== 404) {
    res.json(data);
  } else {
    res.status(404).send(`User id ${id} Not found.`);
  }
});

// // search user by fname, lname, gender, email

// // create user
router.post("/create", (req, res) => {
  // body = first_name, last_name, email, gender, ip_address, avatar,
  const status = user.newUser(req.body);
  const message =
    status === 200 ? "Create User Successfully." : "Create User Fail.";
  res.status(status).send(message);
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const status = user.deleteUser(id);
  const message =
    status === 200
      ? `Delete User id ${id} Successfully.`
      : `User id ${id} Not found.`;
  res.status(status).send(message);
});

module.exports = router;
