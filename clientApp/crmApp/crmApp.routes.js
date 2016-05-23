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
            url: '/company/:company_id',
            templateUrl: 'crmApp/personalPage/personal.html',
            controller: 'personalCtrl',
            controllerAs: 'personal',
            abstract: true
        })
        .state('personal.dashboard', {
            url: '/dashboard',
            templateUrl: 'crmApp/personalPage/dashboard/dashboard.html',
            controller: 'dashboardCtrl',
            controllerAs: 'dashboard'
        })
        .state('personal.deals', {
            url: '/deals',
            templateUrl: 'crmApp/personalPage/deals/deals.html',
            controller: 'dealsCtrl',
            controllerAs: 'deals'
        })
        .state('personal.contacts', {
            url: '/contacts',
            templateUrl: 'crmApp/personalPage/contacts/contacts.html',
            controller: 'contactsCtrl',
            controllerAs: 'contacts'
        })
        .state('personal.tasks', {
            url: '/tasks',
            templateUrl: 'crmApp/personalPage/tasks/tasks.html',
            controller: 'tasks',
            controllerAs: 'tasks'
        })
        .state('personal.analytics', {
            url: '/analytics',
            templateUrl: 'crmApp/personalPage/analytics/analytics.html',
            controller: 'analyticsCtrl',
            controllerAs: 'analytics'
        })
        .state('page404', {
            url: '/404_page_not_found',
            templateUrl: 'crmApp/page404/page404.html'
        });
        $urlRouterProvider.otherwise('/404_page_not_found');
});