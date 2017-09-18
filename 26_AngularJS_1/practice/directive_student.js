myApp.directive('student', function() {
        return {
            restrict: 'E',
            scope: {
                name: '=',
                surname: '=',
                photo: '='
            },
            
            template: `<div>
                            <img src="{{photo}}" alt="">
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