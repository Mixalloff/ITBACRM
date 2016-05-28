// Сервис для передачи произвольных параметров в UI элементы
angular.module('crmApp').factory("dialogParams", function() {
    var dialogParams = {};
    var getDialogParams = function() {
        return dialogParams;
    }
    var setDialogParams = function(dialogObject) {
        dialogParams = dialogObject;
    }
    return {
        getDialogParams: getDialogParams,
        setDialogParams: setDialogParams
    }
});
