import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPicture () {
      this.sendAction("editPicture", this.get('profile'));
    }
  }
});
