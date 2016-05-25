angular.module('crmApp').controller("personalCtrl", ["$stateParams", '$state',
     function ($stateParams, $state) {
         var vm = this;
         //alert("personal: " + $stateParams.company_id);
         vm.account = testAccount;
     }
]); 

var testAccount = {
    name: "Aleksandra Gagarina",
    position: "Manager",
    photo: "crmApp/content/images/gagarina.jpg"
}