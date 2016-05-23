angular.module('crmApp').config(['$resourceProvider', function($resourceProvider){
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);