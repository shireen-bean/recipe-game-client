import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  auth: Ember.inject.service(),
  model () {
    return this.get('store').findAll('recipe');
  },

  actions: {
    favorite (recipe) {
      return this.get('ajax').post('/favorites', {
        data: {
          favorite: {
            profile_id: this.get('auth.credentials.id'),
            recipe_id: recipe,
          },
        },
      });
    },


  },
});
