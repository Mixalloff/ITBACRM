angular.module('crmApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	'use strict';
	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
	});
    
    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'crmApp/landingPage/landing.html',
            controller: 'landingCtrl',
            controllerAs: 'landing',
            // redirectTo: 'personal',
        })
        .state('personal', {
            // resolve: {
            //     personId: function($stateParams) {
            //         return $stateParams.person_id;
            //     }
            // },
            url: '/company/:person_id',
            templateUrl: 'crmApp/personalPage/personal.html',
            controller: 'personalCtrl',
            controllerAs: 'personal',
            // redirectTo: 'personal',
        })
        .state('personal.dashboard', {
            url: '/:person_id/dashboard',
            templateUrl: 'crmApp/personalPage/dashboard/dashboard.html',
            controller: 'dashboardCtrl',
            controllerAs: 'dashboard'
        })
        .state('page404', {
            url: '/404_page_not_found',
            templateUrl: 'crmApp/page404/page404.html'
        });
        $urlRouterProvider.otherwise('/404_page_not_found');
});