//tabs which will react to routing

if (Meteor.isClient) {

	ReactiveTabs.createInterface({
		template: 'dynamicTabs',
		onChange: function (slug) {
			console.log('[tabs] Tab has changed:', slug);
		}
	});


	//tab function abstracted to be incorperated in any template
	Template.registerHelper('tabs', function(){
		return [
		{ name: 'Me', slug: 'me', onRender: function(template) {
      	Router.go('/') } },
      { name: 'Skills', slug: 'skills', onRender: function(template) {
      	Router.go('/skills') } },
      { name: 'Projects', slug: 'projects', onRender: function(template) {
      	Router.go('/projects') } },
      { name: 'Connect', slug: 'connect', onRender: function(template) {
      	Router.go('/connect')
      }}
    ];
	})

	Template.registerHelper('activeTab',function(){
		console.log("Active Tab", this)
		return Session.get('activeTab');
	})

// Template.registerHelper('tabs',function () {
//     var currentRoute = Router.current();
//     return currentRoute;
//   });



}


// Meteor.methods({
// 	Template.({
//   		'click button': function(event, template) {
//     	Session.set('myAppVariable', 'Ok but seriously, give me a job....');
//   }
// });



// })
