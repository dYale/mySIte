//tabs which will react to routing

if (Meteor.isClient) {

	ReactiveTabs.createInterface({
		template: 'dynamicTabs',
		onChange: function (slug) {
			console.log('[tabs] Tab has changed:', slug);
		}}),


	Blog.config({
    	rss: {
      title: 'My blog title',
      description: 'My blog description'
    },
    syntaxHighlighting: true,
  	syntaxHighlightingTheme: 'github'
	});


	//tab function abstracted to be incorperated in any template
	Template.registerHelper('tabs', function(){
		return [
		{ name: 'Me', slug: 'me', onRender: function(template) {
      	Router.go('/')
      }},
      { name: 'Skills', slug: 'skills', onRender: function(template) {
      	Router.go('/skills') 
      }},
      { name: 'Projects', slug: 'projects', onRender: function(template) {
      	Router.go('/projects') 
      }},
      { name: 'Connect', slug: 'connect', onRender: function(template) {
      	Router.go('/connect')
      }},
      { name: 'Blog', slug: 'blog', onRender: function(template) {
      	Router.go('/blog')
      }},
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
