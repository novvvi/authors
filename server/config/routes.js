var Authors = require("../controllers/authors")

module.exports = (app) => {
    app.get("/api/authors", (req, res) => {
        Authors.index(req, res);
    });

    app.post("/api/authors", (req, res) => {
        Authors.create(req, res);
    });

    app.put("/api/authors/edit/:id", (req, res) => {
        Authors.update(req, res);
    });

    app.delete("/api/authors/:id", (req,res) =>{
        Authors.remove(req, res);
    });
}
