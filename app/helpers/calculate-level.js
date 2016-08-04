import Ember from 'ember';

export function calculateLevel(param) {
  if(param == 1) {
    return "Starving College Kid";
  } else if (param == 2) {
    return "Novice Chef";
  } else if (param == 4) {
    return "Advanced Chef";
  } else {
    return "Executive Chef";
  }
}

export default Ember.Helper.helper(calculateLevel);
