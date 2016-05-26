angular.module('crmApp').controller("settings_sales_funnelCtrl", ["$stateParams",
     function ($stateParams) {
         var vm = this;
         vm.config = config;
         vm.setColor = setColor;
     }
]); 

function setColor(color){
    return { "background-color": color };
}

var config = {
    sales_funnel: {
        stages: [
            {
                id: 1,
                num: 1, // порядковый номер этапа
                name: "Первичный контакт",
                color: "#00F",
            },
            {
                id: 2,
                num: 2, // порядковый номер этапа
                name: "Обсуждение деталей",
                color: "#F0F",
            },
            {
                id: 0,
                num: 1,
                name: "Заявки",
                color: "#FF0",
                system: "LEADS"
            },
            {
                id: 1000,
                num: 1000,
                name: "Завершенные сделки",
                color: "#0F0",
                system: "DONE"
            },
            {
                id: -1,
                num: -1,
                name: "Потерянные сделки",
                color: "#F00",
                system: "CANCELED"
            }
        ],
        
    }
}