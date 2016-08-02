import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['hidden'],
  hidden: false,

  actions: {
    favorite () {
      this.toggleProperty('hidden');
      this.sendAction('favorite',this.get('recipe.id'));
    }
  }
});
