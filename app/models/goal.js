'use strict';

const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type:String,
    required:false
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},{
  timestamps: true,
  toJSON: { virtuals: true },
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;


// title, description, user_id,
