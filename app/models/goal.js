'use strict';
const GeoJSON = require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  position: {
    lat: Number,
    lng: Number
  },

  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;

// title, description, user_id,
