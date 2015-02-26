import DS from 'ember-data';

var Rant = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
});

Rant.reopenClass({
  FIXTURES: [
    {id: 1, title: 'First Rant', body: 'This is the first rant ever written.'},
    {id: 2, title: 'Second Rant', body: 'This is the second rant ever written.'},
  ]
});

export default Rant;
