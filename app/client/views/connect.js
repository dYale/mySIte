


Template.connect.helpers({
  connectButton: function() {
    return Session.get('connectButton');
  }
});



Template.connect.events({
  'click button': function(event, template) {

  	$('button').fadeOut(2000);
    Session.set('connectButton', 'Congratulations! You have found the Easter Egg! YOU WIN! now hire me....');
  }
});

