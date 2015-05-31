


Template.connect.helpers({
  connectButton: function() {
    return Session.get('connectButton');
  }
});



Template.connect.events({
  'click button': function(event, template) {

  	$('button').fadeOut(2000);
    Session.set('connectButton', 'ok but seriously, STOP PUSHING MY BUTTONS!');
  }
});

