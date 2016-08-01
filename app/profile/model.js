import DS from 'ember-data';

export default DS.Model.extend({
  given_name: DS.attr('string'),
  user_id: DS.belongsTo('user'),
  level: DS.attr('number'),
  // favorites: DS.hasMany('favorite'),
  // schedules: DS.hasMany('schedule'),
});
