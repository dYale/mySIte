


Template.skills.helpers({
  skillsButton: function() {
    return Session.get('skillsButton');
  }
});






Template.skills.events({
  'click button': function(event, template) {
    Session.set('skillsButton', 'Ok but seriously, give me a job....');
  }
});



