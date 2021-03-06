angular.module('crmApp').controller("settings_commonCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         vm.config = configCommon;
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
var configCommon = {
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
            example: "3.35 pm",
            isCurrent: false, // Сохраненный в настройках
            isSelected: false // Выбранный в данный момент
        }
    ],
    // Валюта, используемая в расчетах, записях и т.д.
    currency: [
        {
            name: 'Рубль',
            value: 'RUB',
            example: '1 300 руб.',
            isCurrent: true,
            isSelected: true,
        },
        {
            name: 'Доллар',
            value: 'USD',
            example: '1 300 $',
            isCurrent: false,
            isSelected: false,
        },
        {
            name: 'Евро',
            value: 'EUR',
            example: '1 300 eur',
            isCurrent: false,
            isSelected: false,
        },
    ]
}