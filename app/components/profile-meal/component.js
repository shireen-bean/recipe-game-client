import Ember from 'ember';

export default Ember.Component.extend({

  

  actions: {
    cook (recipe) {
      console.log("Lets get cooking!")
      console.log("we are cooking recipe: "+ recipe.id)
      this.sendAction('cook', recipe)
    }
  }
});
