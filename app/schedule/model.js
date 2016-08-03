import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

// export default DS.Model.extend({
//   profile: DS.belongsTo('profile', { inverse: 'schedules' }),
//   recipe: DS.belongsTo('recipe', { inverse: 'schedules' }),
//   complete: DS.attr('boolean'),
//   favorite: DS.attr('boolean'),
// });

export default DS.Model.extend({
  profile: DS.belongsTo('profile'),
  recipe: DS.belongsTo('recipe'),
  complete: DS.attr('boolean'),
  favorite: DS.attr('boolean'),
});
