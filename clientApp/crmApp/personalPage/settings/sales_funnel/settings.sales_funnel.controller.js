angular.module('crmApp').controller("settings_sales_funnelCtrl", ["$stateParams", "$mdDialog", "transferParams", "transferEntity",
     function ($stateParams, $mdDialog, transferParams, transferEntity) {
         var vm = this;
         vm.addStage = addStage;
         vm.config = configFunnel;
         vm.deleteStage = deleteStage;
         vm.dialogCancel = dialogCancel;
         vm.dialogDone = dialogDone;
         // Объект этапа воронки
         vm.dialogObject = transferEntity;
         // Параметры диалогового окна
         vm.dialogParams = transferParams;
         vm.editStage = editStage;
         vm.mdDialog = $mdDialog;
         vm.setColor = setColor;
         vm.startStageDialog = startStageDialog;
     }
]); 

// Установка цвета в строке этапа воронки
function setColor(color){
    return { "background-color": color };
}

// Добавление этапа воронки
function addStage(ev) {
    this.dialogObject.setEntity(
         {
             id: Math.round(Math.random()*1000),
             num: configFunnel.sales_funnel.countUserStages + 1,
             name: "",
             color: "#FFF"
         }
    );
    this.dialogParams.setParams(
        {
            headerText: "Добавить этап",
            okBtnText: "Добавить",
            isAdding: true
        }
    );
    this.startStageDialog(ev);
}

// Удаление этапа воронки
function deleteStage(ev, stage, mas) {
    var confirm = this.mdDialog.confirm()
          .title('Удаление этапа "' + stage.name + '"')
          .textContent('Изменение необратимо. Вы действительно хотите удалить этап "' + stage.name + '"?')
          .ariaLabel('удалить')
          .targetEvent(ev)
          .ok('Удалить')
          .cancel('Отмена');
    this.mdDialog.show(confirm).then(function() {
        for (var i = 0; i < mas.length; i++) {
            if (stage.num == mas[i].num) {
                for (var j = i; j < mas.length; j++) {
                    mas[j].num--;
                }
                mas.splice(i, 1);
                return;
            }
        }
    }, function() {
      // Отмена
    });
    
}

// Исправление существующего этапа воронки
function editStage(ev, editedStage) {
    this.dialogParams.setParams(
         {
            headerText: "Исправление этапа",
            okBtnText: "Сохранить",
            isAdding: false
        }
    );
    this.dialogObject.cloneEntity(editedStage);
    this.editedStage = editedStage;
    this.startStageDialog(ev, this.mdDialog);
}

// Запуск диалогового окна
function startStageDialog(ev) {
    var controller = this;
    controller.mdDialog.show({
        controller: 'settings_sales_funnelCtrl',
        controllerAs: 'settings_sales_funnel',
        templateUrl: 'crmApp/personalPage/settings/sales_funnel/content/edit_funnel_stage.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
    })
    .then(function(newStage) {
        if (controller.dialogParams.getParams().isAddedState) {
            insertToStageArray(newStage, controller.config.sales_funnel.stages);
            controller.config.sales_funnel.countUserStages++;
        }
        else {
            delFromStageArray(newStage, controller.config.sales_funnel.stages);
            insertToStageArray(newStage, controller.config.sales_funnel.stages);
           // alert('edit');
        }
    }, function() {
        // закрыто диалоговое окно
    });
}

function delFromStageArray(elem, mas) {
    for (var i = 0; i < mas.length; i++) {
        if (mas[i].id == elem.id) {
            // Удаление
            mas.splice(i, 1);
            for(var j = i; j < mas.length; j++) {
                mas[j].num--;
            }
            return;
        }
    }
}

// Вставка в массив этапов воронки (учитывает последовательность по параметру num)
function insertToStageArray(elem, mas) {
    for (var i = 0; i < mas.length; i++) {
        if (mas[i].num == elem.num) {
            // Вставка
            for(var j = i; j < mas.length; j++) {
                mas[j].num++;
            }
            mas.splice(i, 0, elem);
            return;
        }
    }
    // Если нет совпадений
    mas.push(elem);
}

// Обработка подтверждения действия и закрытия диалогового окна
// stageObj (Object) - объект изменений
function dialogDone(stageObj) {
    this.mdDialog.hide(stageObj);
}

// Нажатие отмены (закрыть)
function dialogCancel($mdDialog) {
    this.mdDialog.cancel();
}

// Конфигурация для воронки
var configFunnel = {
    sales_funnel: {
        stages: [
            {
                id: 1,
                num: 1,
                name: "Заявки",
                color: "#FF0"
            },
            {
                id: 2,
                num: 2, // порядковый номер этапа
                name: "Первичный контакт",
                color: "#00F",
            },
            {
                id: 3,
                num: 3, // порядковый номер этапа
                name: "Обсуждение деталей",
                color: "#F0F",
            },
            
        ],
        systemStages: [
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
        countUserStages: 3
    }
}