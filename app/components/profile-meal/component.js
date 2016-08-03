import Ember from 'ember';

export default Ember.Component.extend({



  actions: {
    cook (schedule) {
      console.log("Lets get cooking!")
      console.log("we are editing schedule: "+ schedule.id)
      this.sendAction('cook', schedule)
    }
  }
});
