const db = require("../config/db");

const changeMentor = (req, res) => {
  let id = req.body.id;
  for (let student of db.students) {
    if (student.id == req.body.id) {
      student.mentor = req.body.newMentor;
      break;
    }
  }
  res.json(db);
};

module.exports.changeMentor = changeMentor;
