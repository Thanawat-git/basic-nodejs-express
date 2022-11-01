const _ = require("lodash");
const uuid = require("uuid");
const users = require("./MOCK_DATA.json");

exports.findAll = () => {
  return users;
};

exports.findById = (id) => {
  const user = _.find(users, (user) => user.id == id);
  return user || 404;
};

exports.newUser = (data) => {
  const newUser = {
    id: uuid.v4(),
    ...data,
  };

  if (!newUser.first_name || !newUser.last_name || !newUser.email) {
    return 400;
  }

  users.push(newUser);
  return 200;
};

exports.deleteUser = (id) => {
  const isUser = users.some((user) => user.id === parseInt(id));
  if (isUser) {
    _.remove(users, (user) => user.id === parseInt(id));
    return 200;
  }

  return 404;
};
