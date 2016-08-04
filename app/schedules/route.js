import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('schedule');
  },

  actions: {
    cook (schedule) {
      console.log('it reached here!');
      this.transitionTo('schedule', schedule.id);
    },
  }
});
