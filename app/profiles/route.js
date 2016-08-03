import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  model () {
    return this.get('store').findAll('profile');
  },

  actions: {

    edit (profile) {
      this.transitionTo('profiles/edit', profile)
    },

    cook (recipe) {
      this.transitionTo('recipes/cook', recipe)
    }


  },
});
