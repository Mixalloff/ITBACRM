angular.module('crmApp').controller("dashboardCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         alert("dashboard: " + $stateParams.person_id);
     }
]); 