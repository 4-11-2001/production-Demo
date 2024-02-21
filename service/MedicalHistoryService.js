// controllers/postalReceiveController.js
const MedicalFormController = require("../model/MedicalFormModel");

exports.addMedicalHistory = async (req, res) => {
  try {
    const newUser = await MedicalFormController.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllUsersMedicalHistory = async (req, res) => {
  try {
    const posts = await MedicalFormController.findAll();
    res.status(200).send({
      sucess: true,
      message: "All Posts Data",
      posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update  by ID
exports.updateMedicalHistory = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  console.log("Received parameters:", id, username);

  try {
    const updatedUser = await MedicalFormController.update(
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

exports.getSingleUserMedicalHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const section = await MedicalFormController.findByPk(id);

    if (!section) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(section);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteUserMedicalHistory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUserCount = await MedicalFormController.destroy({
      where: { id },
    });

    if (deletedUserCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).end(); // 204 No Content for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
