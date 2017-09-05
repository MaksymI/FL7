const createElements = () => {
    const outputDiv = document.createElement('div');
    outputDiv.id = 'output';
    outputDiv.innerText = '= '
    const outputH3 = document.createElement('h3');
    outputDiv.appendChild(outputH3);
    document.body.appendChild(outputDiv);
}

const clearResult = () => {
    document.getElementsByTagName('h3')[0].innerText = '';
}

const renderResult = (data) => {
    document.getElementsByTagName('h3')[0].innerText = data;
}

export default {
    createElements: createElements,
    clearResult: clearResult,
    renderResult: renderResult
}