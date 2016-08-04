import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  profile: Ember.computed('user.id', function () {
    return this.get('store').queryRecord('profile', { user: this.get('user.id')});
  }),

  isAble: Ember.computed('profile.level', 'recipe.level', function(){
      console.log("the profile of isAble is", this.get('profile.level'));
      console.log('the recipe level is ', this.get('recipe.level'));
      if (this.get('profile.level') >= this.get('recipe.level')){
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
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
