import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  profile: Ember.computed('user.id', function () {
    return this.get('store').queryRecord('profile', { user: this.get('user.id')});
  }),

  actions: {
    add () {
      this.get('profile').then((profile) => {
        console.log('before send action profile id is', profile.id);
        this.sendAction('add', this.get('recipe.id'), profile.id);
        console.log('after send action profile id is', profile.id);
      });
    }
  }
});
