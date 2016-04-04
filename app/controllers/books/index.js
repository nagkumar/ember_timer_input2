import Ember from 'ember';

export default Ember.Controller.extend({
  expiresAt: null,

  actions: {
    changeDateAction(date) {
      console.log("selected Date:", date, 'nag', this.expiresAt);
    }
  }
});
