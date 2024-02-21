const UserController = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "shoppingcartbyrohan@gmail.com",
    pass: "djxz ntdf xphx gpvq",
  },
});

const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, username: user.username },
    "your-secret-key",
    {
      expiresIn: "5m", // Adjust the expiration time as needed
    }
  );
};

exports.addUser = async (req, res) => {
  try {
    const newUser = await UserController.create(req.body);
    res.status(201).json(newUser);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await UserController.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update  by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  console.log("Received parameters:", id, username);

  try {
    const updatedUser = await UserController.update(
      { username },
      { where: { id }, returning: true, plain: true }
    );

    if (!updatedUser[1]) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser[1]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const section = await UserController.findByPk(id);

    if (!section) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(section);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUserCount = await UserController.destroy({ where: { id } });

    if (deletedUserCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).end(); // 204 No Content for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//for login
exports.loginUser = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await UserController.findOne({ where: { Email } });
    // console.log("User =>>>>", user);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
