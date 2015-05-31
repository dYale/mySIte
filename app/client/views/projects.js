


Template.projects.helpers({
  projectsButton: function() {
    return Session.get('projectsButton');
  }
});






Template.projects.events({
  'click button': function(event, template) {
    Session.set('projectsButton', 'Honestly, I have too many skills to list here. But I am impressive enough that you want to learn more!!!!');
  }
});



