angular.module('crmApp').controller("settings_fieldsCtrl", ["$stateParams", "$mdDialog", "transferParams", "transferEntity", 
     function ($stateParams, $mdDialog, transferParams, transferEntity) {
         var vm = this;
         
         vm.config = configFields;
         vm.addGroup = addGroup;
         vm.addField = addField;
         vm.mdDialog = $mdDialog;
         vm.dialogParams = transferParams;
         vm.startDialog = startFieldsDialog;
         vm.dialogObject = transferEntity;
     }
]);

// Добавить поле
function addField(ev, itemType) {
    this.dialogParams.setParams(
        {
            headerText: "Добавить поле",
            okBtnText: "Добавить",
            isAdding: true,
            isGroup: false,
            type: itemType
        }
    );
    this.dialogObject.setEntity({});
    this.startDialog(ev);
}

// Добавить группу
function addGroup(ev, itemType) {
    this.dialogParams.setParams(
        {
            headerText: "Добавить группу",
            okBtnText: "Добавить",
            isAdding: true,
            isGroup: true,
            type: itemType
        }
    );
    this.dialogObject.setEntity({});
    this.startDialog(ev);
}

// Открытие диалогового окна
function startFieldsDialog(ev) {
    var controller = this;
    controller.mdDialog.show({
        controller: 'settings_fieldsCtrl',
        controllerAs: 'settings_fields',
        templateUrl: 'crmApp/personalPage/settings/fields/content/settings_fields.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
    })
    .then(function(newEntity) {
        if (controller.dialogParams.getParams().isAdding) {
            insertToEntitiesArray(controller, newEntity);
        }
        else {
            editStageArray();
        }
    }, function() {
        // закрыто диалоговое окно
    });
}

// Добавление в массив сущностей
function insertToEntitiesArray(controller, addingEntity) {
    var itemType = controller.dialogParams.getParams().type;
    if (controller.dialogParams.getParams().isGroup) {
        controller.config.fields[itemType].groups.push(
            {
                name: addingEntity.name,
                type: itemType,
                entity: "group",
                fields: []
            }
        );
    }
    else {
        addingEntity.group.fields.push(
            {
                name: addingEntity.name,
                type: itemType,
                entity: "item",
                valueType: addingEntity.valueType.name,
                isRequired: addingEntity.isRequired
            }
        );
    }
}

function editStageArray() {
    
}

// Объект конфигурации полей
var configFields = {
    valueTypes: [
        {
            name: "Строка",
            programType: "String"
        },
        {
            name: "Число",
            programType: "Number"
        },
        {
            name: "Дата",
            programType: "Date"
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
                    type: "contacts",
                    entity: "group",
                    fields: [
                        {
                            name: "ФИО",
                            type: "contacts",
                            entity: "item",
                            valueType: "String",
                            isRequired: true
                        },
                        {
                            name: "Компания",
                            type: "contacts",
                            entity: "item",
                            valueType: "String",
                            isRequired: false
                        },
                        {
                            name: "Должность",
                            type: "contacts",
                            entity: "item",
                            valueType: "String",
                            isRequired: false
                        },
                    ]
                },
                // Для контакта (почта, телефон, ...)
                {
                    name: "Контактные данные",
                    type: "contacts",
                    entity: "group",
                    fields: [
                        {
                            name: "Email",
                            type: "contacts",
                            entity: "item",
                            valueType: "String",
                            isRequired: false
                        },
                        {
                            name: "Телефон",
                            type: "contacts",
                            entity: "item",
                            valueType: "String",
                            isRequired: false
                        },
                        {
                            name: "Адрес",
                            type: "contacts",
                            entity: "item",
                            valueType: "String",
                            isRequired: false
                        },
                    ]
                },
            ]
           
        }
    }
}