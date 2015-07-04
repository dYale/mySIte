Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'me', controller: 'MainController'});
Router.route('/skills', {name: 'skills', controller: 'SkillsController'})
Router.route('/projects', {name: 'projects', controller: 'ProjectsController'})
Router.route('/connect', {name: 'connect', controller: 'ConnectController'})
Router.route('/signin', {name: 'signin', controller: 'SigninController'})



MainController = RouteController.extend({
  action: function() {
  	this.render('me', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});


SkillsController = RouteController.extend({
	action: function(){
		this.render('skills', {
			data: function(){
				return { posts: ['post white', 'post blue'] } }
			}
		)
	}
})



ProjectsController = RouteController.extend({
	action: function(){
		this.render('projects', {
			data: function(){
				return { posts: ['projects', 'post blue'] } }
			}
		)
	}
})


ConnectController = RouteController.extend({
	action: function(){
		this.render('connect', {
			data: function(){
				return { posts: ['post white', 'post blue'] } }
			}
		)
	}
})