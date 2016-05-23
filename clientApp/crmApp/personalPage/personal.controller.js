angular.module('crmApp').controller("personalCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         alert("personal: " + $stateParams.person_id);
     }
]); 