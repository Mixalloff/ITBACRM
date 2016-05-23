angular.module('crmApp').controller("dashboardCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         //alert("dashboard: " + $stateParams.company_id);
         vm.calendar = testCalendar;
     }
]); 


var testCalendar = [
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
         ];