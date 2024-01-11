const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const searchUser = (req, res) => {
      const { name } = req.query;
      const filteredUser = users.filter((item) =>
        item.name.includes(name.toLowerCase())
      );
      res.json(filteredUser);
    }

const getUser = (req, res) => {
    const { user_id } = req.params;
    const user = users.find((item) => item.id == user_id);
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  };

const addUser = (req, res) => {
      console.log(req.body);
      const new_user = {id: users.length + 1,...req.body};
      users.push(new_user);
      res.json(users);
    };

module.exports = { getAllUsers,searchUser,getUser, addUser };
