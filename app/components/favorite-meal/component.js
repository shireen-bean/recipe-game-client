import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    favoriteMeal () {
      this.sendAction('favoriteMeal', this.get('schedule'));
    }
  }
});
