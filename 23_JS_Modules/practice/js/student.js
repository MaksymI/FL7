let studentList = [];

function addToList(name) {
    studentList.push(name);
}

function getList() {
    return studentList;
}

export default {
    addToList: addToList,
    getList: getList,
}