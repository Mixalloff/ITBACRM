 // Директива, вызывающая событие окончания загрузки ngRepeat
 angular.module('crmApp').directive('onFinishRepeat', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});