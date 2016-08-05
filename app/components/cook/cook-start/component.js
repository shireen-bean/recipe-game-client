import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions:{
    cook () {
      this.sendAction('cook', this.get('schedule'));
      }
    },


})
