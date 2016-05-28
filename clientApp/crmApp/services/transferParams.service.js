// Сервис для передачи произвольных параметров в UI элементы
angular.module('crmApp').factory("transferParams", function() {
    var transferParams = {};
    var getParams = function() {
        return transferParams;
    }
    var setParams = function(settingParams) {
        transferParams = settingParams;
    }
    return {
        getParams: getParams,
        setParams: setParams
    }
});
