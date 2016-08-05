import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model() {
    return this.get('store').findAll('schedule');
  },

  actions: {
    cook (schedule) {
      console.log('it reached here!');
      this.transitionTo('schedule', schedule.id);
    },

    deleteSchedule (schedule) {
      return this.get('ajax').del('/schedules/'+ schedule.id)
      .finally((result)=>this.refresh());
    },

    favoriteMeal (schedule) {
      return this.get('ajax').patch('/schedules/'+ schedule.id, {
        data: {
          schedule: {
            favorite: true,
          }
        }
      })
      .finally((result)=>this.refresh());
    },

  }
});
