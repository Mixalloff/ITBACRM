angular.module('crmApp').controller("dashboardCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         vm.calendar = testCalendar;
         
         var centered = false;
         
         // Скролл до сегодняшнего дня при загрузке календаря
         vm.calendarScroll = function () {
            //  var element = document.querySelector(".today");
            //  var p = document.querySelector(".calendar_carousel_container");
            //  if (element) {
            //      var container = element.parentElement;
            //     var parentWidth = container.getClientRects()[0].width;
            //     var elementWidth = element.getClientRects()[0].width;
            //     var insideOffset = parentWidth / 2 - elementWidth / 2;
            //     var outsideOffset = element.getClientRects()[0].left - container.getClientRects()[0].left;
            //     container.scrollLeft = outsideOffset - insideOffset;
            //  }
             
            //  container.scrollLeft =100;
             var element = document.querySelector(".today");
             if(element){
                  element.scrollIntoView(true);
             }
            
         }
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