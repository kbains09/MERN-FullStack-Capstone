const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; //Change in productions updte

const index = async (req, res) => {
  try {
    const users = await knex("users").select("*");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    let { username, email, password } = req.body;

    // If a new password is provided, hash it before storing
    if (password) {
      password = await bcrypt.hash(password, saltRounds);
    }

    await knex("users").where({ id }).update({
      username,
      email,
      // Conditionally update password only if it's provided
      ...(password && { password }),
    });

    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await knex("users").where({ id }).delete();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await knex("users").insert({
      username,
      email,
      password: hashedPassword
    });
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await knex('users').where({ username }).first();
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
  res.json({ message: "Login successful", token });
};

module.exports = {
  index: index,
  updateUser: updateUser,
  deleteUser: deleteUser,
  createUser: createUser,
  login: login
};
