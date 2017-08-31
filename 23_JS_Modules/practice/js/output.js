export function outputToPage (data) {
    let divNode = document.getElementById('out');
    divNode.innerHTML = data;
}

export function outputToConsole (data) {
    console.log('Data: ' + data);
}
