angular.module('crmApp').controller("settings_commonCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         vm.dateFormats  = config.dateFormats;
         vm.timeFormats  = config.timeFormats;
         vm.hoursFormats = config.hoursFormats;
         
         vm.select = select;
     }
]); 

// Выбор элемента из массива (установка флага isSelected)
function select(item, mas) {
    for (var i = 0; i < mas.length; i++) {
        var s = (item.$$mdSelectId == mas[i].$$mdSelectId);
        mas[i].isSelected = s;
    }
}

// Конфигурация настроек
var config = {
    // Форматы дат для заполнения select-а
    dateFormats: [
        {
            name: "дд мммм гггг",
            value: "дд мммм гггг",
            example: "01 июнь 2016",
            isCurrent: true, // Сохраненный в настройках
            isSelected: true // Выбранный в данный момент
        },
        {
            name: "дд.мм.гггг",
            value: "дд.мм.гггг",
            example: "01.06.2016",
            isCurrent: false, // Сохраненный в настройках
            isSelected: false // Выбранный в данный момент
        },
        {
            name: "дд.мм.гг",
            value: "дд.мм.гг",
            example: "01.06.16",
            isCurrent: false, // Сохраненный в настройках
            isSelected: false // Выбранный в данный момент
        }
    ],
    // Форматы времени
    timeFormats: [
        {
            name: "hh:mm",
            value: "hh:mm",
            example: "15:35",
            isCurrent: true, // Сохраненный в настройках
            isSelected: true // Выбранный в данный момент
        },
        {
            name: "hh.mm",
            value: "hh.mm",
            example: "15.35",
            isCurrent: false, // Сохраненный в настройках
            isSelected: false // Выбранный в данный момент
        }
    ],
    // Форматы времени
    hoursFormats: [
        {
            name: "24",
            value: "24",
            example: "15:35",
            isCurrent: true, // Сохраненный в настройках
            isSelected: true // Выбранный в данный момент
        },
        {
            name: "12",
            value: "12",
            example: "3.35 am",
            isCurrent: false, // Сохраненный в настройках
            isSelected: false // Выбранный в данный момент
        }
    ],
}