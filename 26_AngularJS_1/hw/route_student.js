myApp.config(function ($stateProvider) {
    var profile = {
        name: 'profile',
        url: '/profile/:id',
        template: function ($stateParams) {
            return `<div class="students">
                        <figure>
                            <img src="{{students[${$stateParams.id}].photo}}">
                            <figcaption>{{students[${$stateParams.id}].name}} {{students[${$stateParams.id}].surname}}</figcaption>
                            <figcaption>Date of birth: {{students[${$stateParams.id}].date_of_birth}}</figcaption>
                            <figcaption>Phone number: {{students[${$stateParams.id}].phone}}</figcaption>
                        </figure>
                    </div>`
        },
        controller: 'firstCtrl',
    }

    var home = {
        name: 'home',
        url: '/',
        template: `<div>
                    <student ng-repeat="student in students" edit="edit" photo="student.photo" name="student.name" surname="student.surname" id="student.id"></student>
                </div>`,
        controller: 'firstCtrl',
    }

    $stateProvider.state(home);
    $stateProvider.state(profile);
});