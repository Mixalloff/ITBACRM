angular.module('crmApp').factory("stageDialogParams", function() {
    var dialogParams = {};
    var getDialogParams = function() {
        return dialogParams;
    }
    var setDialogParams = function(isAdding) {
        dialogParams = new DialogParamsObj(isAdding);
    }
    function DialogParamsObj(isAdding) {
        this.dialogHeadText = isAdding ? "Добавить этап" : "Исправление этапа";
        this.dialogOkBtnText = isAdding ? "Добавить" : "Сохранить";
        this.isAddedState = isAdding;
    }
    return {
        getDialogParams: getDialogParams,
        setDialogParams: setDialogParams
    }
});
