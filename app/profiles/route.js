import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model () {
    return this.get('store').queryRecord('profile', { user_id: this.get('auth.credentials.id')});
  },
});
