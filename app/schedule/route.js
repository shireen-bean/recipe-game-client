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
        if (my_profile.points < 25){
        return this.get('ajax').patch('/profiles/'+ my_profile.id, {
        data: {
          profile: {
            points: my_profile.points + 5,
            level: 1,
          },
        },
      });
    } else if (my_profile.points < 50) {
      return this.get('ajax').patch('/profiles/'+ my_profile.id, {
      data: {
        profile: {
          points: my_profile.points + 5,
          level: 2,
        },
      },
    });
    } else if (my_profile.points < 75) {
      return this.get('ajax').patch('/profiles/'+ my_profile.id, {
      data: {
        profile: {
          points: my_profile.points + 5,
          level: 3,
        },
      },
    });
  } else if (my_profile.points < 100) {
      return this.get('ajax').patch('/profiles/'+ my_profile.id, {
      data: {
        profile: {
          points: my_profile.points + 5,
          level: 4,
        },
      },
    });
  } else if (my_profile.points >= 125) {
        return this.get('ajax').patch('/profiles/'+ my_profile.id, {
        data: {
          profile: {
            points: my_profile.points + 5,
            level: 5,
          },
        },
      });
      }
    })
    .then(()=> console.log("finished!"))
    },

  }
});
