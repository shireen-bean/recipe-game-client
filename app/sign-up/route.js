import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .finally(() => {
        this.get('ajax').post('/profiles', {
        data: {
          profile: {
            user_id: this.get('auth.credentials.id'),
            level: 1,
            given_name: this.get('auth.credentials.givenname'),
          },
        },
      }
    )
    console.log('profile created')
    })
      .then(() => this.transitionTo('application'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully signed-up! You have also been signed-in.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});


// delete
