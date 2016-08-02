import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('profiles');
  this.route('recipes');

  this.route('profile', {path: '/profiles/:id'});
  this.route('favorites');
  this.route('recipe', {path: '/recipes/:id'});
  this.route('favorite', {path: '/favorites/:id'});
  this.route('schedule');
  this.route('schedules');
});

export default Router;
