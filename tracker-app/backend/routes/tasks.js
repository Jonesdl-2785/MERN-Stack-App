const router = require('express').Router();
let task = require('../models/task.model');

router.route('/').get((req, res) => {
  task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newtask = new task({
    username,
    description,
    duration,
    date,
  });

  newtask.save()
    .then(() => res.json('task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    task.findByIdAndDelete(req.params.id)
      .then(() => res.json('task deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    task.findById(req.params.id)
      .then(task => {
        task.username = req.body.username;
        task.description = req.body.description;
        task.duration = Number(req.body.duration);
        task.date = Date.parse(req.body.date);

        task.save()
          .then(() => res.json('task updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
