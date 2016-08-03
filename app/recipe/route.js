import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

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
      })
      .then(()=>console.log("meal scheduled!"))
      .catch(()=> {
        this.get('flashMessages')
        .danger('Sorry We had a problem adding that recipe to your profile');
      })
    },

    add (recipe, profile) {
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
