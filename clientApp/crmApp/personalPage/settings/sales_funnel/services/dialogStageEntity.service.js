angular.module('crmApp').factory("dialogStageEntity", function() {
    var stageEntity = {};
    var getStageEntity = function() {
        return stageEntity;
    }
    var setStageEntity = function(num, name, color) {
        stageEntity = new StageObject(num, name, color);
    }
    var setStageEntityObject = function(editedStageObj) {
        stageEntity = editedStageObj;
    }
    function StageObject(num, name, color) {
        this.num = num ? num : 1; // порядковый номер этапа
        this.name = name ? name : "";
        this.color = color ? color : "#FFF";
    };
    return {
        getStageEntity: getStageEntity,
        setStageEntity: setStageEntity,
        setStageEntityObject: setStageEntityObject
    }
});