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
                controller: 'tasksCtrl',
                controllerAs: 'tasks'
            })
            .state('personal.analytics', {
                url: '/analytics',
                templateUrl: 'crmApp/personalPage/analytics/analytics.html',
                controller: 'analyticsCtrl',
                controllerAs: 'analytics'
            })
            .state('personal.documents', {
                url: '/documents',
                templateUrl: 'crmApp/personalPage/documents/documents.html',
                controller: 'documentsCtrl',
                controllerAs: 'documents'
            })
            .state('personal.settings', {
                url: '/settings',
                templateUrl: 'crmApp/personalPage/settings/settings.html',
                controller: 'settingsCtrl',
                controllerAs: 'settings',
                abstract: true
            })
                .state('personal.settings.common', {
                    url: '/common',
                    templateUrl: 'crmApp/personalPage/settings/common/settings.common.html',
                    controller: 'settings_commonCtrl',
                    controllerAs: 'settings_common'
                })
                .state('personal.settings.sales_funnel', {
                    url: '/sales_funnel',
                    templateUrl: 'crmApp/personalPage/settings/sales_funnel/settings.sales_funnel.html',
                    controller: 'settings_sales_funnelCtrl',
                    controllerAs: 'settings_sales_funnel'
                })
                
                .state('personal.settings.users', {
                    url: '/users',
                    templateUrl: 'crmApp/personalPage/settings/users/settings.users.html',
                    controller: 'settings_usersCtrl',
                    controllerAs: 'settings_users'
                })
                .state('personal.settings.fields', {
                    url: '/fields',
                    templateUrl: 'crmApp/personalPage/settings/fields/settings.fields.html',
                    controller: 'settings_fieldsCtrl',
                    controllerAs: 'settings_fields'
                })
                .state('personal.settings.security', {
                    url: '/security',
                    templateUrl: 'crmApp/personalPage/settings/security/settings.security.html',
                    controller: 'settings_securityCtrl',
                    controllerAs: 'settings_security'
                })
                .state('personal.settings.developers', {
                    url: '/developers',
                    templateUrl: 'crmApp/personalPage/settings/developers/settings.developers.html',
                    controller: 'settings_developersCtrl',
                    controllerAs: 'settings_developers'
                })
                .state('personal.settings.tariffs', {
                    url: '/tariffs',
                    templateUrl: 'crmApp/personalPage/settings/tariffs/settings.tariffs.html',
                    controller: 'settings_tariffsCtrl',
                    controllerAs: 'settings_tariffs'
                })
        
        .state('page404', {
            url: '/404_page_not_found',
            templateUrl: 'crmApp/page404/page404.html'
        });
        $urlRouterProvider.otherwise('/404_page_not_found');
});