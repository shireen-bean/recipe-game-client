import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  directions: DS.attr(),
  time: DS.attr('number'),
  image: DS.attr('string'),
  ingredients: DS.attr(),
});
