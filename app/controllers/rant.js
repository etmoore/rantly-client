import Ember from 'ember';

export default Ember.ObjectController.extend({

  isEditing: false,

  actions: {
    editRant: function() {
      this.set('isEditing', true);
    },
    saveRant: function(rant) {
      rant.save().then(function() {
        this.set('isEditing', false);
      }.bind(this));
    },
    deleteRant: function(rant) {
      this.store.deleteRecord(rant);
    },
  }
});
