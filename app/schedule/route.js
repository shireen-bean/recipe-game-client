import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('schedule', params.id)
  },

  actions: {
    completeMeal (schedule) {
      console.log('schedule id'+schedule.id);
      console.log('profile editing is'+schedule.profile.id)
      return this.get('ajax').patch('/schedules/'+ schedule.id, {
        data: {
          schedule: {
            complete: false,
          }
        }
      })
      .then(()=> {
        console.log("reached get request")
        return this.get('ajax').request('/profiles');
      })
      .then((result)=> {
        console.log("your points are "+ result.profile.points)
        return result.profile
      })
      .then((my_profile)=>{
        return this.get('ajax').patch('/profiles/'+ my_profile.id, {
        data: {
          profile: {
            points: my_profile.points + 5,
          },
        },
      })
    })
    .then((result)=> console.log(result))
    },

  }
});
