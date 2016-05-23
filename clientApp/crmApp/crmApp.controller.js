angular.module('crmApp').controller("appCtrl",
     function ($scope, $mdSidenav) {
         var vm = this;
         vm.toogleNav= function(navID) {
             $mdSidenav(navID).toggle();
         }
         vm.isOpen = function(navID){
            return $mdSidenav(navID).isOpen();
         };
     }
); 