import Ember from 'ember';

export function calculateLevel(param) {
  if(param == 1) {
    return "Starving College Kid";
  } else if (param == 2) {
    return "Chef's Young Prodige";
  } else if (param == 3) {
    return "Almost-adult";
  } else if (param == 4) {
    return "Wife/Husband Material";
  } else {
    return "Executive Chef";
  }
}

export default Ember.Helper.helper(calculateLevel);
