import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createRant: function() {
      var title = this.get('title');
      var body = this.get('body');
      var newRant = this.store.createRecord('rant', { title: title, body: body });
      newRant.save();

      this.set('title', null);
      this.set('body', null);
    },

    deleteRant: function(rant) {
      this.store.deleteRecord(rant);
    },
  }
});
