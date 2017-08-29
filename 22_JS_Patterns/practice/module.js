// Module
// Create a module with Factory inside and 1 method for message creation.

const module = (function () {
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

    return popupFactory;

})();
