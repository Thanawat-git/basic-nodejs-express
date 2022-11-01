const jwt = require("jsonwebtoken");
const { router } = require("../functions/express");

const user = require("../functions/users");

const secretkey = "F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShV"
// user login
router.post("/login", (req, res) => {
  // body = {email, password}
  const data = user.findUser(req.body);
  if (data !== 404) {
    jwt.sign({ user, data }, secretkey, (err, token) => {
      res.json({
        token,
      });
    });
  }
  res.status(404).send(`User id ${id} Not found.`);
});

module.exports = router;