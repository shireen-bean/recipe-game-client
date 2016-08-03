import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('profile', params.profile_id);
  },

  actions: {
    save (profile) {
      profile.save();
      this.transitionTo('profiles');
    }
  }
});
