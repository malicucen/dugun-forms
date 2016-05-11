/**
 * @ngdoc directive
 * @name dugun.forms:DgFormDate
 * @restrict 'E'
 * @scope
 **/
function DgFormDate(moment) {
    return {
        restrict: 'AEC',
        scope: {
            model: '=ngModel',
            required: '=',
            placeholder: '@',
            id: '@dgId'
        },
        templateUrl: 'form-elements/date/date.html',
        link: function(scope) {
            function dateChanged(newValue) {
                if(!newValue) return;
                if(newValue) {
                    scope.model = moment(newValue).format('YYYY-MM-DD');
                } else {
                    delete scope.model;
                }
            }

            // Initialize scope.dates with values from model.
            function init() {
                if(!scope.date) {
                    scope.date = null;
                }

                if(scope.model && !scope.date) {
                    scope.date = scope.model;
                }
            }

            init();
            scope.$watch('date', dateChanged);
            scope.$watch('model', init);
        }
    };
}

DgFormDate.$inject = [
    'moment',
];

angular.module('dugun.forms').directive('dgFormDate', DgFormDate);