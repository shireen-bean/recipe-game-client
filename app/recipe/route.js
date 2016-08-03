import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  auth: Ember.inject.service(),
  // store: Ember.inject.service('store'),
  model (params) {
    return this.get('store').findRecord('recipe', params.id);
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
      });
    },

    add (recipe, profile) {
      console.log("recipe to add is", recipe);
      console.log("profile to add is",profile);
      return this.get('ajax').post('/schedules', {
        data: {
          schedule: {
            profile_id: profile,
            recipe_id: recipe,
          },
        },
      }
    );
  },


  }
});
