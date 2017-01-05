// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',


  initialize: function() {
  //when a song ends
    this.model.on('ended', function() {
    //remove the song
      this.remove(this.model.at(0));
      //check to see if there are any songs left
      if (this.model.length > 0) {
        //and if there are, play the next one
        this.setSong(this.model.at(0));
      }
    }, this);
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
