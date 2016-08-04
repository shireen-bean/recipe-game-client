import Ember from 'ember';

export function isCapable(recipe_level, profile_level) {
  if (recipe_level == profile_level){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(isCapable);
