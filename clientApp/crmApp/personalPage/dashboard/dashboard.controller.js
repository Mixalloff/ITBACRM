angular.module('crmApp').controller("dashboardCtrl", ["$scope", "$stateParams",
     function ($scope, $stateParams) {
         var vm = this;
         vm.calendar = testCalendar;
         vm.deals = testDeals;
         vm.events = testEvents;
                  
         // Ценровка календаря при загрузке
         $scope.$on('ngRepeatFinished', calendarScroll);
     }
]); 


var testCalendar = [
    {
        value: 30,
        name:  "Понедельник",
        month: "Май",
        today: false,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 111
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 112
            }
        ]
    },
    {
        value: 31,
        name:  "Вторник",
        month: "Май",
        today: false,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 111
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 112
            }
        ]
    },
    {
        value: 1,
        name:  "Среда",
        month: "Июнь",
        today: false,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 111
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 112
            }
        ]
    },
    {
        value: 2,
        name:  "Четверг",
        month: "Июнь",
        today: true,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 211
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 212
            }
        ]
    },
    {
        value: 3,
        name:  "Пятница",
        month: "Июнь",
        today: false,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 311
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 312
            }
        ]
    },
    {
        value: 4,
        name:  "Суббота",
        month: "Июнь",
        today: false,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 311
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 312
            }
        ]
    },
    {
        value: 5,
        name:  "Воскресенье",
        month: "Июнь",
        today: false,
        tasks:
        [
            {
                name: "Позвонить клиенту",
                time: "15:00",
                type: "call",
                id: 111
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                time: "18:00",
                type: "meeting",
                id: 112
            }
        ]
    },
];

 // Скролл до сегодняшнего дня при загрузке календаря
function calendarScroll(event) {
    var element = document.querySelector(".today");
    if (element) {
    var container = element.parentElement;
    var parentWidth = container.getClientRects()[0].width;
    var elementWidth = element.getClientRects()[0].width;
    var insideOffset = parentWidth / 2 - elementWidth / 2;
    var outsideOffset = element.getClientRects()[0].left - container.getClientRects()[0].left;
    container.scrollLeft = outsideOffset - insideOffset;
    }
}

var testDeals = [
    {
        name: "Разработка модуля",
        company: {
            name: '"ООО Прогресс"'
        },
        tasks: [
            {
                name: "Позвонить клиенту",
                date: "02.06.2016",
                time: "15:00",
                type: "call",
                id: 111
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                date: "03.06.2016",
                time: "18:00",
                type: "meeting",
                id: 112
            }
        ],
        score: 7, // "теплота" клиента по 10 бальной шкале
        amount: 80000
    },
    {
        name: "Разработка модуля",
        company: {
            name: '"ООО Прогресс"'
        },
        tasks: [
            {
                name: "Позвонить клиенту",
                date: "02.06.2016",
                time: "15:00",
                type: "call",
                id: 111
            },
            {
                name: "Встреча для обсуждения деталей ТЗ",
                date: "03.06.2016",
                time: "18:00",
                type: "meeting",
                id: 112
            }
        ],
        score: 7, // "теплота" клиента по 10 бальной шкале
        amount: 80000
    }
];

var testEvents = [
    {
        name: "Добавлен контакт Сидоров И.И.",
        owner: {
            name: "Петров А.А."
        },
        date: "01.06.2016",
        type: "ADD"  
    },
    {
        name: "Добавлен контакт Сидоров И.И.",
        owner: {
            name: "Петров А.А."
        },
        date: "01.06.2016",
        type: "ADD"  
    },
];