const mongoose = require('mongoose');
var Authors = mongoose.model("Authors");

module.exports = {
    index: (req, res) => {
        Authors.find({}, (err, data) =>{
            if (err) {
                console.log (err);
                res.json({msg: "fail", data: err});
            }
            else {
                res.json(data);
            };
        });
    },

    create: (req, res) => {
        Authors.create({name: req.body.name}, (err) => {
            if (err) {
                res.json({msg: "fail", data: err});
            }
            else {
                res.json({msg: "sucess"});
            };
        });
    },


    update: (req, res) => {
        console.log(req)
        Authors.findOneAndUpdate({_id : req.params.id}, {$set: {name : req.body.name}},{ runValidators: true, context: 'query' }, (err, data) => {
            if (err){
                console.log(err);
                res.json({msg: "fail", data: err});
            }
            else {
                res.json({msg: "sucess"})
            };
        });
    },

    remove: (req, res) => {
        Authors.deleteOne({_id: req.params.id}, (err) =>{
            if (err) {
                res.json(err);
            }
            else {
                res.json({msg: "sucess"});
            };
        });
    }
};