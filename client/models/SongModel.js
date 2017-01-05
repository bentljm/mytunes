// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  //has an play method that triggers an "play" event
  play: function() {
    this.trigger('play', this);
  },

  //has an enqueue method that triggers an "enqueue" event
  enqueue: function() {
    this.trigger('enqueue', this);
  },

  //has a dequeue method that triggers a "dequeue" event
  dequeue: function() {
    this.trigger('dequeue', this);
  },

  //has an ended method that triggers an "ended" event
  ended: function() {
    this.trigger('ended', this);
  },

  removeTrack: function() {
    this.trigger('removeTrack', this);
  }



});
