// Create factory for system messages: error (red popup), warning (yellow popup), notification (green popup).
// Place 3 buttons on a page for each type of message. Every time when user clicks on a button,
//  show appropriate message popup. After 2 seconds message should disappear.

class Popup {
    constructor() {
        this.element = document.createElement('div');
        this.element.style.width = '200px';
        this.element.style.height = '200px';
        this.element.style.backgroundColor = 'inherit';
    }
    applyColor(newColor) {
        this.element.style.backgroundColor = newColor;
    }
    showPopup() {
        document.body.appendChild(this.element);
    }
    destroyPopup() {
        document.body.removeChild(this.element);
    }

}
class RedPopup extends Popup {
    constructor() {
        super();
        this.element.style.backgroundColor = 'red';
    }
}
class YellowPopup extends Popup {
    constructor() {
        super();
        this.element.style.backgroundColor = 'yellow';
    }
}
class GreenPopup extends Popup {
    constructor() {
        super();
        this.element.style.backgroundColor = 'green';
    }
}

class PopupFactory {
    makePopup(specification) {
        let popup;
        switch(specification.color) {
            case 'red':
                popup = new RedPopup();
                break;
            case 'yellow':
                popup = new YellowPopup();
                break;
            case 'green':
                popup = new GreenPopup();
                break;
            default:
                throw new Error('Unknown popup type, check your specification');
        }
        // popup.applyColor(specification.color);
        return popup;
    }
}

const popupFactory = new PopupFactory();

const button1 = document.createElement('button');
button1.innerHTML = `error`;
document.body.appendChild(button1);
button1.addEventListener('click', function() {
    const redPopup = popupFactory.makePopup({color: 'red'});
    redPopup.showPopup();
    setTimeout(function() {
        redPopup.destroyPopup();
    }, 2000);
});

const button2 = document.createElement('button');
button2.innerHTML = `warning`;
document.body.appendChild(button2);
button2.addEventListener('click', function() {
    const yellowPopup = popupFactory.makePopup({color: 'yellow'});
    yellowPopup.showPopup();
    setTimeout(function() {
        yellowPopup.destroyPopup();
    }, 2000);
});

const button3 = document.createElement('button');
button3.innerHTML = `notification`;
document.body.appendChild(button3);
button3.addEventListener('click', function() {
    const greenPopup = popupFactory.makePopup({color: 'green'});
    greenPopup.showPopup();
    setTimeout(function() {
        greenPopup.destroyPopup();
    }, 2000);
});

