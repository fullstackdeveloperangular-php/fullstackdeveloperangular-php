 var app = angular.module('myApp',['ngMaterial','ngRoute']);
 app.controller('MyController',  function($scope){
  
 })
 app.config(function ($routeProvider,$locationProvider) {
 	$locationProvider.html5Mode(true);

 	$routeProvider.when('/', {
 		templateUrl: 'pages/user_list.html',
 		controller: 'userlistController'
 	}).when('/danh_sach_nguoi_dung', {
 		templateUrl: 'pages/user_list.html',
 		controller: 'userlistController'
 	})
 	.when('/them_nguoi_dung', {
 		templateUrl: 'pages/add_user.html',
 		controller: 'adduserController'
 	}).otherwise({ redirectTo: '/' })
 })

 app.controller('userlistController',  function($scope,$http){

 })
 app.controller('adduserController',  function($scope,$http){
  	$scope.adduser =function(){
  		console.log('ban da click');
 		var dulieu = $.param({
 			username: $scope.username,
 			password: $scope.password,
 			level:    $scope.level
 		})
 		console.log(dulieu);
 		var config = {
 			headers: {
 				'Content-type': 'application/x-www-form-urlencoded;charset: UTF-8'
 			}
 		}

 		$http.post('http://localhost:8888/angular_php/API/user/adduser', dulieu, config)
 		.then(function(res){
 			console.log(res.data);
 		},function(res){
 			console.log(res.data);
 		})
 	}

 })

 