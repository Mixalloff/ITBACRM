angular.module('crmApp').controller("settings_commonCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         vm.dateFormats = dateFormats;
     }
]); 

// Форматы дат для заполнения select-а
var dateFormats = [
    "дд мммм гггг",
    "дд.мм.гггг",
    "д.м.гг"
]