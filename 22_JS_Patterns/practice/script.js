var pageFacade = {
    updateMenu: function() {
        changeBgc();
        yellowBlock();
        listBlock();
        dataManipulate(strArr);
    }
};

function changeBgc() {
        document.body.style.backgroundColor = 'grey';
}

// changeBgc();

// Create yellow block 200x200px and move it to center (vert/hor)

function yellowBlock() {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.backgroundColor = 'yellow';
    var html = document.getElementsByTagName('html')[0];
    html.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.appendChild(div);
}

// yellowBlock();

// Create another block with list from 1 to 10

function listBlock() {
    var div = document.createElement('div');
    var ul = document.createElement('ul');
    for (var i=1; i<=10; i++) {
        var li = document.createElement('li');
        li.innerText = i;
        ul.appendChild(li);
    }
    div.appendChild(ul);
    document.body.appendChild(div);
}

// listBlock();

// Get data from a variable (should contain array of strings) and replace num list to this list

var strArr = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6', 'str7','str8', 'str9', 'str10'];

function dataManipulate(arr) {
    var li = document.getElementsByTagName('li');
    for (var i = 0; i < arr.length; i++) {
        li[i].innerText = arr[i];
    }
}

// dataManipulate(strArr);

pageFacade.updateMenu();