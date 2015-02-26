import Ember from 'ember';

export default Ember.ArrayController.extend({
  title: '',
  body: '',
  charCount: function(){
    return this.get('body').length;
  }.property('body'),
  actions: {
    createRant: function() {
      var title = this.get('title');
      var body = this.get('body');
      var newRant = this.store.createRecord('rant', { title: title, body: body });
      newRant.save();

      this.set('title', '');
      this.set('body', '');
    },

    deleteRant: function(rant) {
      this.store.deleteRecord(rant);
    },
  }
});
