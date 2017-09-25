myApp.directive('student', function() {
        return {
            restrict: 'E',
            scope: {
                name: '=',
                surname: '=',
                photo: '=',
                id: '='
            },
            // priority: 0,
            // transclude: false,
            template: `<div>
                            <img src="{{photo}}" alt="image" ui-sref="profile({ id: {{id}} })>
                            <div>
                                <input ng-show="isVisible" ng-model="name">
                                <input ng-show="isVisible" ng-model="surname">
                                <span ng-show="!isVisible">{{name}}</span>
                                <span ng-show="!isVisible">{{surname}}</span>
                            </div>
                            <button ng-click="isVisible=true" ng-show="!isVisible">EDIT</button>
                            <button ng-click="isVisible=false" ng-show="isVisible">SAVE</button>
                    </div>`

    };
});