import Ember from 'ember';

export default Ember.Component.extend({


  actions: {
    completeMeal () {
      console.log("click happened yay!")
      this.sendAction('completeMeal', this.get('schedule'));
      }
    }
});
