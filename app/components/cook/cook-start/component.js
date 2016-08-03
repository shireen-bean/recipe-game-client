import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  profile: Ember.computed('user.id', function () {
    return this.get('store').queryRecord('profile', { user: this.get('user.id')});
  }),


  actions:{
    cook () {
      this.sendAction('cook', this.get('recipe'))
    },
  }
});
