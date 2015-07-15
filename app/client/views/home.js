


Template.me.helpers({
  homeButton: function() {
    return Session.get('homeButton');
  }
});



Template.me.events({
  'click button': function(event, template) {

  	$('button').fadeOut(2000);
    Session.set('homeButton', 'Placeholder')
  }
});

