import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  // profile: Ember.computed('user.id', function () {
  //   return this.get('store').queryRecord('profile', { user: this.get('user.id')});
  // }),
  //
  // schedule: Ember.computed( 'recipe', function () {
  //   return this.get('store').queryRecord('schedule', { recipe: this.get('recipe.id')});
  // }),

  actions:{
    cook () {
      console.log('the schedule is', this.get('schedule'));
      this.sendAction('cook', this.get('schedule'));
      }
    },


})
