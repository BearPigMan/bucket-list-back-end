'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Goal = models.goal;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Goal.find({_owner: req.currentUser._id}).then(goals => res.json({goals})).catch(err => next(err));
};

const show = (req, res, next) => {
  Goal.findById(req.params.id).then(goal => goal
    ? res.json({goal})
    : next()).catch(err => next(err));
};

const create = (req, res, next) => {
  let goal = req.body.goal;
  goal = Object.assign(goal, {_owner: req.currentUser._id});
  Goal.create(goal).then(goal => res.json({goal})).catch(err => next(err));
};

const update = (req, res, next) => {
  let search = {
    _id: req.params.id,
    _owner: req.currentUser._id
  };
  Goal.findOne(search).then(goal => {
    if (!goal) {
      return next();
    }
    delete req.body._owner; // disallow owner reassignment.
    if (!req.body.goal.title) {
      return next();
    }
    else {
      return goal.update(req.body.goal).then(() => res.sendStatus(200));
    }
  }).catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = {
    _id: req.params.id,
    _owner: req.currentUser._id
  };
  Goal.findOne(search).then(goal => {
    if (!goal) {
      return next();
    }

    return goal.remove().then(() => res.sendStatus(200));
  }).catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, {
  before: [
    {
      method: authenticate,
      except: ['show']
    }
  ]
});
