import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('schedule', params.id)
  },

  actions: {
    completeMeal (schedule) {
      console.log('schedule id'+schedule.id);
      console.log('profile editing is'+schedule.profile.id)
      return this.get('ajax').patch('/schedules/'+ schedule.id, {
        data: {
          schedule: {
            complete: true,
          }
        }
      })
    },

  }
});
