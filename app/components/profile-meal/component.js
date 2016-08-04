import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),


  actions: {
    cook (schedule) {
      console.log("Lets get cooking!");
      console.log("we are editing schedule: "+ schedule.id);
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
