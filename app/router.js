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
  this.route('profiles/edit', { path: '/profiles/:profile_id/edit' });
  this.route('profiles/cook', { path: '/profiles/cook/:recipe_id' });
  this.route('recipes');
  this.route('recipes/cook', { path: '/recipes/cook/:recipe_id' });

  this.route('profile', {path: '/profiles/:id'});
  this.route('recipe', {path: '/recipes/:id'});
  this.route('schedule', {path: '/schedules/:id'});
  this.route('schedules');
});

export default Router;
