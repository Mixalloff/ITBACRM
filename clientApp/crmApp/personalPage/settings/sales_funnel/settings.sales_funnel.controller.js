angular.module('crmApp').controller("settings_sales_funnelCtrl", ["$stateParams", "$mdDialog",
     function ($stateParams, $mdDialog) {
         var vm = this;
         vm.config = configFunnel;
         vm.setColor = setColor;
         vm.addStage = function(ev) {
                $mdDialog.show({
                    controller: 'settings_sales_funnelCtrl',
                    templateUrl: 'crmApp/personalPage/settings/sales_funnel/content/edit_funnel_stage.dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    //   fullscreen: useFullScreen
                })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
            }
     }
]); 

function setColor(color){
    return { "background-color": color };
}

function addStage(ev) {
    $mdDialog.show({
      controller: settings_sales_funnelCtrl,
      templateUrl: 'crmApp/personalPage/settings/sales_funnel/edit_funnel_stage.dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    //   fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
}

var configFunnel = {
    sales_funnel: {
        stages: [
            {
                id: 1,
                num: 1, // порядковый номер этапа
                name: "Первичный контакт",
                color: "#00F",
            },
            {
                id: 2,
                num: 2, // порядковый номер этапа
                name: "Обсуждение деталей",
                color: "#F0F",
            },
            {
                id: 0,
                num: 1,
                name: "Заявки",
                color: "#FF0",
                system: "LEADS"
            },
            {
                id: 1000,
                num: 1000,
                name: "Завершенные сделки",
                color: "#0F0",
                system: "DONE"
            },
            {
                id: -1,
                num: -1,
                name: "Потерянные сделки",
                color: "#F00",
                system: "CANCELED"
            }
        ],
        
    }
}