import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),


  actions: {
    cook (schedule) {
      this.sendAction('cook', schedule);
    },

    deleteSchedule (schedule) {
      this.sendAction('deleteSchedule', schedule);
    },

    favoriteMeal (schedule) {
        this.sendAction('favoriteMeal', schedule);
    },

  }
});
