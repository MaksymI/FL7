import style from '../scss/style.scss'
import mathOperation from './math'
import renderResults from './renderResults'
import inputsRender from './inputsRender'

inputsRender();
renderResults.createElements();

const inputs = document.getElementsByTagName('input');
const operationsBtn = document.getElementsByTagName('button');

for(let i=0; i < operationsBtn.length; i++) {
    operationsBtn[i].addEventListener('click', (event) => {
        renderResults.clearResult();
        renderResults.renderResult(mathOperation(event.target.innerText)(parseInt(inputs[0].value), parseInt(inputs[1].value)));
    })
}
