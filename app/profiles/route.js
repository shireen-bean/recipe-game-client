import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isStudent: Ember.computed('profile', function() {
    if (this.get('profile.level')===1) {
      return false;
    } else {
      return true;
    }
  }),

  isNovice: Ember.computed('profile', function() {
    if ('profile.level'=== 2) {
      return true;
    } else {
      return false;
    }
  }),


  model () {
    return this.get('store').findAll('profile');
  },

  actions: {

    editName (profile) {
      this.transitionTo('profiles/edit', profile);
    },

    editPicture (profile) {
      this.transitionTo('profiles/edit-picture', profile);
    },

    cook (schedule) {
      this.transitionTo('schedules', schedule.id);
    }


  },
});
