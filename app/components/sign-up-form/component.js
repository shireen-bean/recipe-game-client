import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
      console.log(this.get('credentials.givenname'))
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
