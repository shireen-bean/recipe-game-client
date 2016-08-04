import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  given_name: DS.attr('string'),
  user: DS.belongsTo('user'),
  level: DS.attr('number'),
  recipes: DS.hasMany('recipe'),
  points: DS.attr('number')
});
