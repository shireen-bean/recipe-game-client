import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  store: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials'),

  profile: Ember.computed('user.id', function () {
    return this.get('store').queryRecord('profile', { user: this.get('user.id')});
  }),

  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isChef: Ember.computed.bool('profile.chef'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
