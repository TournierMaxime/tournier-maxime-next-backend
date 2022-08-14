const { Data } = require("../models/Data.js");
const { Projects } = require("../models/Projects.js");
//Récupère tous les posts
exports.getAllData = (req, res, next) => {
  if (req.method === "GET") {
    res.status(200).json(Data);
  }
};

exports.getOneData = (req, res, next) => {
  const id = Projects.projects.map((i) =>
    i.find((project) => project.id === Number(req.params.id))
  );

  if (req.method === "GET") {
    if (id) {
      return res.status(200).json(id);
    } else {
      return res.status(404).json({ message: "Donnée non trouvée" });
    }
  }
};
