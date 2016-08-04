import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('profile', params.profile_id);
  },

  actions: {
    savePicture (profile) {
      // profile.save();

      // this.get('ajax').patch('/profiles/'+profile.id, {
      //
      // })

      this.transitionTo('profiles');
    }
  }
});
