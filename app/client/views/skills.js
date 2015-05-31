


Template.skills.helpers({
  skillsButton: function() {
    return Session.get('skillsButton');
  }
});






Template.skills.events({
  'click button': function(event, template) {
    Session.set('skillsButton','Wow, you actually wanna hear my story. I am so unprepared... um. Hmmmmm.');
  }
});



