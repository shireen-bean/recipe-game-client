import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  auth: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('recipe', params.id)
  },

  actions: {
    favorite () {
      return this.get('ajax').post('/favorites', {
        data: {
          favorite: {
            profile_id: this.get('auth.credentials.id'),
            recipe_id: this.get('recipe.id'),
          },
        },
      })
    },
  }
});
