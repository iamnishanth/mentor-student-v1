const db = require("../config/db");

const assignMentor = (req, res) => {
  let unassignedStudents = req.body.students;
  for (let item of db.students) {
    for (let elm of unassignedStudents) {
      if (item.id == elm.id) {
        item.mentor = req.body.mentor;
      }
    }
  }
  res.json(db);
};

module.exports.assignMentor = assignMentor;
