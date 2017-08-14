var container = document.getElementById('container');

function renderUsers(data) {
    container.innerHTML = '';
    for (var i=0; i<data.length; i++){
        var div = document.createElement('div');
        div.innerHTML = `
        <strong>Name:</strong> <span>${data[i].name}</span>
        <strong>City:</strong> <span>${data[i].address.city}</span>
        <strong>Company:</strong> <span>${data[i].company.name}</span>
        `;
        div.setAttribute('id', data[i].id);
        div.style.cursor = 'pointer';
        container.appendChild(div);
    }
}

container.addEventListener('click', containerEventsHandler);

function containerEventsHandler(event) {
    var eventPath = event.path[1];
    // console.log(eventPath.children);
    if(eventPath.children.length == 6) {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + eventPath.id).then(function(response) {
            return response.json();
        }).then(function(returnedValue) {
            renderPosts(returnedValue, eventPath, 5);
        }).catch(function(err) {
            throw new Error(err);
        });
    } else {
        start();
    }
}

function renderPosts(data, path, numberOfPosts) {
   for (var i=0; i<numberOfPosts; i++){
        var div = document.createElement('div');
        div.style.cursor = 'initial';
        div.style.margin = '0 0 0 35px';
        div.style.backgroundColor = '#ccc';
        div.innerHTML = `<strong>title:</strong> <span>${data[i].title}</span>`;
        path.appendChild(div);
    }
}

function start() {
fetch('https://jsonplaceholder.typicode.com/users').then(function(response) {
    return response.json();
}).then(function(returnedValue) {
    renderUsers(returnedValue);
}).catch(function(err) {
    throw new Error(err);
});
}

start ();