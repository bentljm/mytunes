// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', this.render, this);

  },

  render: function() {
    var songQueue = new SongQueueEntryView({model: SongModel});
    return this.$el.append(songQueue.render());

  }

});


