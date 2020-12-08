const router = require('express').Router();
let Travel = require('../models/travel.model');

router.route('/').get((req, res) => {
  Travel.find()
    .then(travels => res.json(travels))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const destination = req.body.destination;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newTravel = new Travel({
    username,
    destination,
    description,
    date,
  });

  newTravel.save()
  .then(() => res.json('Travel added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Travel.findById(req.params.id)
    .then(travel => res.json(travel))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Travel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Travel deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Travel.findById(req.params.id)
    .then(travel => {
      travel.username = req.body.username;
      travel.destination = req.body.destination;
      travel.description = req.body.description;
      travel.date = Date.parse(req.body.date);

      travel.save()
        .then(() => res.json('Travel updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;