// Сервис для передачи объекта (в диалоговые окна и т.п.)
angular.module('crmApp').factory("transferEntity", function() {
    var entity = {};
    // Получить объект
    var getEntity = function() {
        return entity;
    }
    // Установить объект по ссылке
    var setEntity = function(transferingEntity) {
        entity = transferingEntity;
    }
    // Установить клон объекта
    var cloneEntity = function(cloningEntity) {
        var key, clone = {};
        for(key in cloningEntity) {
            if(cloningEntity.hasOwnProperty(key)) {
                clone[key] = cloningEntity[key];
            }
        }
        entity = clone;
    }
    return {
        getEntity: getEntity,
        setEntity: setEntity,
        cloneEntity: cloneEntity
    }
});