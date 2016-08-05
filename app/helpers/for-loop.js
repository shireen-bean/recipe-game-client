import Ember from 'ember';

export function forLoop(array) {
  for(let i=0; i<=array.length; i++){
    return array[i];
  }
}

export default Ember.Helper.helper(forLoop);
