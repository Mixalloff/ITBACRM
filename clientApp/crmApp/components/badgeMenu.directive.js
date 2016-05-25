 // Директива для подсветки пунктов меню
 angular.module('crmApp').directive('badgeMenu', function ($state) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$on('$stateChangeSuccess', function(){
                badgeCurrentMenuRow(element, attrs.id, $state.current.name);
            });
        }
    }
});

// Проверяет, совпадают ли id пункта меню и параметр текущей страницы
function badgeCurrentMenuRow(element, elemId, currentState) {
    if (elemId == currentState) {
        element.addClass('active-row');
    }
    else {
        element.removeClass('active-row');
    }
}