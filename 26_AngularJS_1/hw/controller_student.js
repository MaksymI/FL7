myApp.controller('firstCtrl', ['$scope', function($scope) {
    $scope.students = [
        {name: 'Some0', surname: 'Student0', photo: 'http://lorempixel.com/200/100', phone: 1234567890, birth: new Date(`Sep 01, 1986`)},
        {name: 'Some1', surname: 'Student1', photo: 'http://lorempixel.com/200/100', phone: 1234567890, birth: new Date(`Sep 10, 1987`)},
        {name: 'Some2', surname: 'Student2', photo: 'http://lorempixel.com/200/100', phone: 1234567890, birth: new Date(`Oct 21, 1992`)},
        {name: 'Some3', surname: 'Student3', photo: 'http://lorempixel.com/200/100', phone: 1234567890, birth: new Date(`Jun 05, 1995`)}
    ];

}]);