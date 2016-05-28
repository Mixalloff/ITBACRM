angular.module('crmApp').controller("settings_fieldsCtrl", ["$stateParams", "$mdDialog",
     function ($stateParams, $mdDialog) {
         var vm = this;
         
         vm.config = configFields;
         vm.addGroup = addGroup;
         vm.addField = addField;
         vm.mdDialog = $mdDialog;
     }
]);

function addGroup(ev) {
    
}

function startDialog(ev) {
    var controller = this;
    controller.mdDialog.show({
        controller: 'settings_fieldsCtrl',
        controllerAs: 'settings_fields',
        templateUrl: 'crmApp/personalPage/settings/settings_fields/content/settings_fields.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
    })
    .then(function(newStage) {
        if (controller.dialogParams.getDialogParams().isAddedState) {
            insertToStageArray(newStage, controller.config.sales_funnel.stages);
            controller.config.sales_funnel.countUserStages++;
        }
        else {
            alert('edit');
        }
    }, function() {
        // закрыто диалоговое окно
    });
}

var configFields = {
    valueTypes: [
        {
            name: "String"
        },
        {
            name: "Number"
        },
        {
            name: "Date"
        }
    ],
    fields: {
        // Поля контактов
        contacts: {
            // Группы полей
            groups: [
                // Основные
                {
                    name: "Основные",
                    fields: [
                        {
                            name: "ФИО",
                            valueType: "String",
                            isRequired: true
                        },
                        {
                            name: "Компания",
                            valueType: "String",
                            isRequired: false
                        },
                        {
                            name: "Должность",
                            valueType: "String",
                            isRequired: false
                        },
                    ]
                },
                // Для контакта (почта, телефон, ...)
                {
                    name: "Контактные данные",
                    fields: [
                        {
                            name: "Email",
                            valueType: "String",
                            isRequired: false
                        },
                        {
                            name: "Телефон",
                            valueType: "String",
                            isRequired: false
                        },
                        {
                            name: "Адрес",
                            valueType: "String",
                            isRequired: false
                        },
                    ]
                },
            ]
           
        }
    }
}