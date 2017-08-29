const button1 = document.createElement('button');
button1.innerHTML = `error`;
document.body.appendChild(button1);
button1.addEventListener('click', function() {
    const redPopup = module.makePopup({color: 'red'});
    redPopup.showPopup();
    setTimeout(function() {
        redPopup.destroyPopup();
    }, 2000);
});

const button2 = document.createElement('button');
button2.innerHTML = `warning`;
document.body.appendChild(button2);
button2.addEventListener('click', function() {
    const yellowPopup = module.makePopup({color: 'yellow'});
    yellowPopup.showPopup();
    setTimeout(function() {
        yellowPopup.destroyPopup();
    }, 2000);
});

const button3 = document.createElement('button');
button3.innerHTML = `notification`;
document.body.appendChild(button3);
button3.addEventListener('click', function() {
    const greenPopup = module.makePopup({color: 'green'});
    greenPopup.showPopup();
    setTimeout(function() {
        greenPopup.destroyPopup();
    }, 2000);
});