myApp.controller('firstCtrl', ['$scope', function($scope) {
    $scope.students = [
        {name: 'Roman', surname: 'Mahotskyi', photo: 'http://lorempixel.com/200/100'},
        {name: 'Some', surname: 'Student', photo: 'http://lorempixel.com/200/100'},
        {name: 'Some2', surname: 'Student2', photo: 'http://lorempixel.com/200/100'}
    ];

}]);