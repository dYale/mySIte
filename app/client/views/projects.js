


Template.projects.helpers({
  projectsButton: function() {
    return Session.get('projectsButton');
  }
});






Template.projects.events({
  'click button': function(event, template) {
    Session.set('projectsButton', 'Placeholder');
  }
});



