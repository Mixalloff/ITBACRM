angular.module('crmApp').controller("settings_fieldsCtrl", ["$stateParams", "$mdDialog", "transferParams", "transferEntity", 
     function ($stateParams, $mdDialog, transferParams, transferEntity) {
         var vm = this;
         
         vm.config = configFields;
         
         vm.mdDialog = $mdDialog;
         vm.dialogParams = transferParams;
         vm.startDialog = startFieldsDialog;
         vm.dialogObject = transferEntity;
         
         vm.addField = addField;
         vm.editField = editField;
         
         vm.addGroup = addGroup;
         vm.editGroup = editGroup;
         
         vm.getTypeById = getTypeById;
         vm.getGroupById = getGroupById;
         
         vm.insertToEntitiesArray = insertToEntitiesArray;
         vm.editEntitiesArray = editEntitiesArray;
         vm.deleteItem = deleteItem;
     }
]);

// Получение типа данных по id
function getTypeById(typeId) {
    var types = this.config.valueTypes;
    for (var i = 0; i < types.length; i++) {
        if (types[i].id = typeId) {
            return types[i];
        }
    }
}

// Получить группу по id
function getGroupById (groupId, type) {
    var groups = this.config.fields[type].groups;
    for (var i = 0; i < groups.length; i++) {
        if (groups[i].id == groupId) {
            return groups[i];
        }
    }
}

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

// Исправить поле
function editField(ev, item) {
    this.dialogParams.setParams(
        {
            headerText: "Исправление поля",
            okBtnText: "Сохранить",
            isAdding: false,
            isGroup: false,
            type: item.type
        }
    );
    item.valueType = this.getTypeById(item.valueType.id);
    item.group = this.getGroupById(item.groupId, item.type);
    this.dialogObject.cloneEntity(item);
    this.startDialog(ev);
}

// Исправить группу
function editGroup(ev, item) {
    this.dialogParams.setParams(
        {
            headerText: "Исправление группы",
            okBtnText: "Сохранить",
            isAdding: false,
            isGroup: true,
            type: item.type
        }
    );
    this.dialogObject.cloneEntity(item);
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

// Удаление сущности из массива
function deleteItem(ev, mas, item, isGroup) {
    var itemType = isGroup ? "группу " : "поле ";
    var confirm = this.mdDialog.confirm()
          .title('Удалить ' + itemType + '"' + item.name)
          .textContent('Изменение необратимо. Вы действительно хотите удалить ' + itemType + '"' + item.name + '?')
          .ariaLabel('удалить')
          .targetEvent(ev)
          .ok('Удалить')
          .cancel('Отмена');
    this.mdDialog.show(confirm).then(function() {
        for (var i = 0; i < mas.length; i++) {
            if (item.id == mas[i].id) {
                mas.splice(i, 1);
                return;
            }
        }
    }, function() {
      // Отмена
    });
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
            controller.insertToEntitiesArray(newEntity);
        }
        else {
            controller.editEntitiesArray(newEntity);
        }
    }, function() {
        // закрыто диалоговое окно
    });
}

// Добавление в массив сущностей
function insertToEntitiesArray(addingEntity) {
    var itemType = this.dialogParams.getParams().type;
    if (this.dialogParams.getParams().isGroup) {
        this.config.fields[itemType].groups.push(
            {
                name: addingEntity.name,
                id: Math.round(Math.random()*1000),
                type: itemType,
                entity: "group",
                fields: []
            }
        );
    }
    else {
        addingEntity.group.fields.push(
            {
                id: Math.round(Math.random()*1000),
                name: addingEntity.name,
                groupId: addingEntity.group.id,
                type: itemType,
                entity: "item",
                valueType: addingEntity.valueType,
                isRequired: addingEntity.isRequired
            }
        );
    }
}

// Изменение сущности в массиве
function editEntitiesArray(editingEntity) {
    var itemType = this.dialogParams.getParams().type;
    if (this.dialogParams.getParams().isGroup) {
        this.getGroupById(editingEntity.id, itemType).name = editingEntity.name;
    }
    else {
        var group = this.getGroupById(editingEntity.groupId, itemType);
        for (var i = 0; i < group.fields.length; i++) {
            if (group.fields[i].id == editingEntity.id) {
                group.fields[i] = editingEntity;
            }
        }
    }
}

// Объект конфигурации полей
var configFields = {
    valueTypes: [
        {
            id: 1,
            name: "Строка",
            programType: "String"
        },
        {
            id: 2,
            name: "Число",
            programType: "Number"
        },
        {
            id: 3,
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
                    id: 1,
                    type: "contacts",
                    entity: "group",
                    fields: [
                        {
                            id: 1,
                            name: "ФИО",
                            groupId: 1,
                            type: "contacts",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: true
                        },
                        {
                            id: 2,
                            name: "Компания",
                            groupId: 1,
                            type: "contacts",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                        {
                            id: 3,
                            name: "Должность",
                            groupId: 1,
                            type: "contacts",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                    ]
                },
                // Для контакта (почта, телефон, ...)
                {
                    name: "Контактные данные",
                    id: 2,
                    type: "contacts",
                    entity: "group",
                    fields: [
                        {
                            id: 4,
                            name: "Email",
                            groupId: 2,
                            type: "contacts",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                        {
                            id: 5,
                            name: "Телефон",
                            groupId: 2,
                            type: "contacts",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                        {
                            id: 6,
                            name: "Адрес",
                            groupId: 2,
                            type: "contacts",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                    ]
                },
            ]  
        },
        deals: {
            // Группы полей
            groups: [
                // Основные
                {
                    name: "Основные",
                    id: 3,
                    type: "deals",
                    entity: "group",
                    fields: [
                        {
                            id: 11,
                            name: "Наименование",
                            groupId: 3,
                            type: "deals",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: true
                        },
                        {
                            id: 12,
                            name: "Описание",
                            groupId: 3,
                            type: "deals",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                        {
                            id: 13,
                            name: "Сумма",
                            groupId: 3,
                            type: "deals",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Число",
                                programType: "Number"
                            },
                            isRequired: false
                        },
                    ]
                },
                // Для контакта (почта, телефон, ...)
                {
                    name: "Контактная информация",
                    id: 4,
                    type: "deals",
                    entity: "group",
                    fields: [
                        {
                            id: 14,
                            name: "Компания",
                            groupId: 4,
                            type: "deals",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        },
                        {
                            id: 15,
                            name: "Контактное лицо",
                            groupId: 4,
                            type: "deals",
                            entity: "item",
                            valueType: {
                                id: 1,
                                name: "Строка",
                                programType: "String"
                            },
                            isRequired: false
                        }
                    ]
                },
            ]  
        }
    }
}