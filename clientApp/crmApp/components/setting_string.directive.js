 // Директива строки настроек
 angular.module('crmApp').directive('settingString', function ($state) {
    return {
        restrict: 'E',
        template: "<div class='setting_string' layout></div>",
        transclude: true,
        replace: true,
        compile: function compile(templateElement, templateAttrs) {
           // Метка для настройки
           templateElement.append("<label flex='20'>" + templateAttrs.settingLabel + "</label>");
           // select опций
           templateElement.append('<md-select ng-model="' + templateAttrs.settingCurrent + '"' + 
                                            'ng-change="' + templateAttrs.onchangeSetting + '(' + templateAttrs.settingCurrent + ', ' + templateAttrs.configItems + ')">' + 
                                        '<md-option ng-value="item"' + 
                                                'ng-repeat="item in ' + templateAttrs.configItems + '"' + 
                                                'ng-selected="item.isSelected">' + 
                                            '{{item.name}}' + 
                                        '</md-option>' + 
                                    '</md-select>');
           // Строка с примером вывода
           templateElement.append("<div class='example_value'>{{" + templateAttrs.settingCurrent + ".example}}</div>");
           
        },
        link: function (scope, element, attrs) {
             
        }
    }
});

// setting-label - текст метки
// onchange-setting - функция при изменении значения (ng-change)
// setting-current - объект текущего состояния (settings_common.currentHoursFormat = ngModel)
// config-items - массив объектов для select-a (config.dateFormats)
/* 
<setting-string setting-label="asdasdssa"
                   config-items="settings_common.hoursFormats"
                   setting-current="settings_common.currentHoursFormat"
                   onchange-setting="settings_common.select">
</setting-string>
*/