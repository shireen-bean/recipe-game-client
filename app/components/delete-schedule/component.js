import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteSchedule () {
      console.log("delete the schedule")
      this.sendAction('deleteSchedule', this.get('schedule'))
    }
  }
});
