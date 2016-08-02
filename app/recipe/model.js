import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr('string'),
  directions: DS.attr(),
  time: DS.attr('number'),
  image: DS.attr('string'),
  ingredients: DS.attr(),
  profiles: DS.hasMany('profile')
});
