(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/13654406_578754465640942_346398414832563762_n.jpg?oh=64beb0cc766acd05d9a659ff89d0aef0&oe=5A2FEB0F',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];

    // array off all students in appropriate formate
    var tempStudents = students.map(function(student){
         return {
             Student: student.name + ' ' + student.lastName,
             email: student.email,
             'Profile picture': student.img,
             Skills: student.skills,
             controls: ''
         };
    });

    // student obj all keys ['Student', 'email', 'Profile picture', 'Skills', 'controls']
    var studentObjKeys = Object.keys(tempStudents[0]);

    var sortIcons = [];

    // function for initialization sort Icons
    function sortIconsInit(){
        sortIcons.length = 0;
        for (let i=0; i<studentObjKeys.length; i++) {
            var sortIcon = document.createElement('span');
            sortIcon.setAttribute('class', `glyphicon btn btn-default btn-xs glyphicon-sort`);
            sortIcon.disabled = true;
            // sortIcon.onclick = '';
            sortIcon.style.cursor = 'initial';
            sortIcon.style.margin = '0 0 0 5px';
            sortIcons.push(sortIcon);
        }
    }

    sortIconsInit();
    
    var sortClass = 'glyphicon-sort';

    // function for initialization table header
    function createTableHeader(students, tableBody) {
        var trHeader = document.createElement("tr");
        for (let i=0; i<studentObjKeys.length; i++) {
            var th = document.createElement('th');
            var innerTh = document.createTextNode(studentObjKeys[i]);
            th.appendChild(innerTh);
            th.style.cursor = 'pointer';
            th.appendChild(sortIcons[i]);
            trHeader.appendChild(th);
        }
        tableBody.appendChild(trHeader);
    }
    
    // function for initialization table rows
    function createTableContent(students, tableBody) {
        for (var i=0; i<students.length; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j<studentObjKeys.length; j++){
                var td = document.createElement('td');
                var tempText = students[i][studentObjKeys[j]] || '';
                if (studentObjKeys[j] == 'Profile picture'){ // for picture
                    td.innerHTML += `<img src=${tempText} class="img-rounded" width="160" height="120">`;
                } else if (studentObjKeys[j] == 'controls'){ // for controls
                    td.innerHTML += `
                    <div class="btn-group">
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-edit"></span></button>
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>
                    </div>
                    `;
                } else { // for Student, email and skills
                    var innerTd = document.createTextNode(tempText);
                    td.appendChild(innerTd);
                }
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        }
    }

    // function for rendering table
    function renderTableContet(students, tableBody, table) {
        tableBody.innerHTML = ''; // clearing content
        createTableHeader(students, tableBody); // initializing table header
        createTableContent(students, tableBody); // initializing table rows
        table.appendChild(tableBody);
        container.appendChild(table);
    }

    // creating div for form
    var formDiv = document.createElement("div");
    // setting bootstrap grid class for div
    formDiv.setAttribute('class', 'col-md-12');
    // creating form and inputs
    formDiv.innerHTML = `
            <form class="form">
            <fieldset>
            <legend>Student form</legend>
            <div class="row">
                <div class="col-xs-6 form-group">
                    <label>Name</label>
                    <input id="Name" type="text" class="form-control" required/>
                </div>
                <div class="col-xs-6 form-group">
                    <label>Lastname</label>
                    <input id="Lastname" type="text" class="form-control" required/>
                </div>
                <div class="col-xs-6 form-group">
                    <label>Email</label>
                    <input id="Email" type="email" class="form-control" required/>
                </div>
                <div class="col-xs-6 form-group">
                    <label>Profile picture</label>
                    <input id="picture" type="url" class="form-control" pattern="https?://.+"  />
                </div>
                <div class="col-xs-6 form-group">
                    <label>Skils</label>
                    <input id="Skils" type="text" class="form-control" required/>
                </div>
                <div class="col-xs-6 form-group">
                    <input type="button" id="Save" class="btn btn-primary" value="Save"/>
                    <button type="reset" id="Reset" class="btn btn-default">Cancel</button>
                </div>
            </div>
            </fieldset>
            </form>`
    

    var container = document.getElementById('container');

    container.appendChild(formDiv);
    var table = document.createElement("table");
    
    table.setAttribute('class', 'table table-hover'); //  "Hint: use class for table ‘table table-hover’".

    var tbody = document.createElement("tbody");

    renderTableContet(tempStudents, tbody, table);

    // (hint: add listener to the tbody)
    tbody.addEventListener('click', tableEventsHandler);

    // trigger for choose edit or add then Save button clicked
    // pressing Save button - finish editing current student
    var edit = false;

    function tableEventsHandler(event) {
        var cssType = event.target.getAttribute('type') || '';
        var cssClass = event.target.getAttribute('class') || '';
        var text = event.target.innerText || event.path[1].innerText; // th row text || for sort working if sort button clicked
        var num = studentObjKeys.indexOf(text);
        var studentName;
        var eventPath;
        if (cssType == 'button' && ~event.target.childNodes[0].getAttribute('class').indexOf("trash")) { // if click trash button
            studentName = event.path[3].cells[0].innerText;
            delHandler();
        } else if(~cssClass.indexOf("trash")) { // if click trash icon
            studentName = event.path[4].cells[0].innerText;
            delHandler();
        } else if(cssType == 'button' && ~event.target.childNodes[0].getAttribute('class').indexOf("edit")) { // if click edit button
            eventPath = event.path[3];
            editHandler();
        } else if(~cssClass.indexOf("edit")) { // if click edit icon
            eventPath = event.path[4];
            editHandler();
        } else if (text == 'Student' || text == 'email' || text == 'Profile picture' || text == 'controls') { // if click Student, email, Profile picture or controls header
            sortRender(num, sortByStringProp, sortReverseByStringProp);
        } else if (text == 'Skills') { // if click Skills header
            sortRender(num, sortByArrStringProp, sortReverseByArrStringProp);
        } else if (event.target.getAttribute('src')) { // if click on picture
            event.stopPropagation();
            alert('Student: ' + event.path[2].cells[0].innerHTML);
        } else { // Show alert with student when user clicks to the table row
            event.stopPropagation();
            alert('Student: ' + event.path[1].childNodes[0].innerHTML);
        }

        function delHandler() {
            event.stopPropagation();
            edit = false;
            deleteStudent(tempStudents, studentName);
            renderTableContet(tempStudents, tbody, table);
        }

        function editHandler() {
            edit = true;
            event.stopPropagation();
            fillForm();
            window.scrollTo(0,0);
        }

        function sortRender(num, sortFunction, sortFunctionReverse) {
            if (sortClass == 'glyphicon-sort-by-alphabet') {
                sortClass = 'glyphicon-sort-by-alphabet-alt';
                sortIconsInit();
                sortIcons[num].setAttribute('class', `glyphicon btn btn-default btn-xs ${sortClass}`);
                sortFunctionReverse(tempStudents, text);
            } else {
                sortClass = 'glyphicon-sort-by-alphabet';
                sortIconsInit();
                sortIcons[num].setAttribute('class', `glyphicon btn btn-default btn-xs ${sortClass}`);
                sortFunction(tempStudents, text);
            }
            event.stopPropagation();
            renderTableContet(tempStudents, tbody, table);
        }
        
        function fillForm() {
            editedStudentName = eventPath.cells[0].innerText;
            document.getElementById('Name').value = eventPath.cells[0].innerText.split(" ")[0];
            document.getElementById('Lastname').value = eventPath.cells[0].innerText.split(" ")[1];
            document.getElementById('Email').value = eventPath.cells[1].innerText;
            document.getElementById('Skils').value = eventPath.cells[3].innerText;
            document.getElementById('picture').value = eventPath.cells[2].firstChild.getAttribute('src');
        }
    }


    function deleteStudent(arr, name) {
        var rowN =  arr.map(student => student.Student).indexOf(name);
        arr.splice(rowN, 1);
    }

    var editedStudentName = '';
    var editedStudent = { };
        
    function saveButonHandler() {
        editedStudent.Student = document.getElementById('Name').value + ' ' + document.getElementById('Lastname').value;
        editedStudent.email = document.getElementById('Email').value;
        editedStudent['Profile picture'] = document.getElementById('picture').value;
        editedStudent.Skills = document.getElementById('Skils').value.split(',');
        editedStudent.controls = '';
        if (edit) {
            updateStudent(tempStudents, editedStudent, editedStudentName);
            edit = false;
            clearForm();
        } else {
            pushStudent(editedStudent, tempStudents);
            clearForm();
        }
    }

    function clearForm() {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length-1; i++) {
            inputs[i].value = ''
        }
    }

    function pushStudent(student, arr) {
        arr.push(Object.assign({}, student));
        renderTableContet(arr, tbody, table);
    }

    function updateStudent(arr, student, name) {
        var rowN = arr.map(std => std.Student).indexOf(name);
        arr[rowN].Student = student.Student;
        arr[rowN].email = student.email;
        arr[rowN].Skills = student.Skills;
        arr[rowN]['Profile picture'] = student['Profile picture'];
        renderTableContet(arr, tbody, table);
    }

    function formValidate() {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            if(!inputs[i].value) {
                alert('Please fill data');
                throw new Error('Input empty');
            }
        }
        if(!validateEmail(inputs[2].value)) {
            alert('Enter a valid email address');
            throw new Error('Enter a valid email address');
        }
        if(!validateUrl(inputs[3].value)) {
            alert('Enter a valid url address');
            throw new Error('Enter a valid url address');
        }
    }

    function validateEmail(email) {
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    function validateUrl(url) {
        var reg = /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))$/;
        return reg.test(url);
    }

    var saveButton = document.getElementById('Save');

    saveButton.addEventListener('click', function() {
        formValidate();
        saveButonHandler();
    });

    // sorting array of objects by object property (if string)
    function sortByStringProp(arr, prop) {
        arr.sort((a, b) => a[prop].localeCompare(b[prop]));
    }

    // reverse sorting array of objects by object property (if string)
    function sortReverseByStringProp(arr, prop) {
        arr.sort((a, b) => b[prop].localeCompare(a[prop]));
    }

    // sorting array of objects by object property (if Arr of string), by first world only ;)
    function sortByArrStringProp(arr, prop) {
        arr.sort((a, b) => a[prop][0].localeCompare(b[prop][0]));
    }

    // reverse sorting array of objects by object property (if Arr of string)
    function sortReverseByArrStringProp(arr, prop) {
        arr.sort((a, b) => b[prop][0].localeCompare(a[prop][0]));
    }

})();