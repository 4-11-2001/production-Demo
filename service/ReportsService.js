// controllers/postalReceiveController.js
const ReportsController = require('../model/ReportsModel');

exports.addreport = async (req, res) => {
  try {
    const newUser = await ReportsController.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllReports = async (req, res) => {
    try {
      const users = await ReportsController.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  // Update  by ID
exports.updateReport = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    console.log('Received parameters:', id, username);

  
    try {
      const updatedUser = await ReportsController.update(
        { username },
        { where: { id}, returning: true, plain: true }
      );
  
      if (!updatedUser[1]) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(updatedUser[1]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.getSingleReport = async (req, res) => {
    const { id } = req.params;
  
    try {
      const section = await ReportsController.findByPk(id);
  
      if (!section) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(section);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.deleteReport= async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedUserCount = await ReportsController.destroy({ where: { id } });
  
      if (deletedUserCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(204).end(); // 204 No Content for successful deletion
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };