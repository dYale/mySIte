


Template.me.helpers({
  homeButton: function() {
    return Session.get('homeButton');
  }
});



Template.me.events({
  'click button': function(event, template) {

  	$('button').fadeOut(2000);
    Session.set('homeButton', 'Hi Lizby!!! Happy Birthday!!! I put this together for you and I thought it would make a nice little birthday present! I intend to make it fully functional but I need your help! It is not my site and you have a unique and powerful imagination =]. I hope you have an amazing Birthday! Dan')
  }
});

