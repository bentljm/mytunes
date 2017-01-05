// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //when a song is added
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    //when a song ends
    this.on('ended', function() {
    //remove the song
      this.remove(this.at(0));
      //check to see if there are any songs left
      if (this.length > 0) {
        //and if there are, play the next one
        this.playFirst();
      }
    }, this);


    //when a song is dequeued
    this.on('dequeue', function(song) {
      //remove the song
      this.remove(song);
    }, this);

  },

  //play the first one in the queue
  playFirst: function() {
    this.at(0).play();

  }

});




