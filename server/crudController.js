module.exports.create = (Model) => (req, res, next) => {
  new Model(req.body)
    .save()
    .then((data) => res.json(data))
    .catch((error) => next({ error }));
};

module.exports.get = (Model) => (req, res, next) => {
  Model
    .find()
    .then((data) => res.json(data))
    .catch((error) => nex({error}));
};

module.exports.put = (Model) => (req, res, next) => {
  Model
  .findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then((data) => res.json(data))
  .catch(error => next({error}))
  
}

module.exports.delete = (Model) => (req,res, next) => {
  Model
  .deleteOne({_id: req.params.id})
  .then(data => res.json(data))
  .catch(error => next({error}))
}