


Template.skills.helpers({
  skillsButton: function() {
    return Session.get('skillsButton');
  }
});






Template.skills.events({
  'click button': function(event, template) {
    Session.set('skillsButton','Honestly, I have too many skills to list here. But I am impressive enough that you want to learn more!!!!');
  }
});



