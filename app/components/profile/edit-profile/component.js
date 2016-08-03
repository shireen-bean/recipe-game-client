import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      this.sendAction("edit", this.get('profile'));
    }
  }
});
