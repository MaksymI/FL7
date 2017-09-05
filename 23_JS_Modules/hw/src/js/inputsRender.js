export default () => {
    const inputsDiv = document.createElement('div');

    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    inputsDiv.appendChild(input1);
    inputsDiv.appendChild(input2);
    document.body.appendChild(inputsDiv);

    const buttonsDiv = document.createElement('div');

    const operationsBtn = [];
    const operationsBtnTxt = ['+', '-', '*', '/'];

    for (let i=0; i < operationsBtnTxt.length; i++) {
        operationsBtn[i] = document.createElement('button');
        operationsBtn[i].innerText = operationsBtnTxt[i];
        buttonsDiv.appendChild(operationsBtn[i]);
    }

    document.body.appendChild(buttonsDiv);
}
