// 숫자입력, 정렬 및 새로고침 유지

const enteredNumbers = new Set();
let numbersArray49 = [];
let numbersArray50 = [];
let numbersArray51 = [];
let numbersArray52 = [];
let numbersArray53 = [];
let numbersArray54 = [];
let numbersArray55 = [];
let numbersArray56 = [];
let isSorted = false;

document.addEventListener('DOMContentLoaded', (event) => {
    loadNumbers();
    loadTextInputs();
});

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = input.value;
    const color = document.querySelector('input[name="color"]:checked').value;
    if (number >= 445 && number <= 459) {
        processNumber(number, color, numbersArray53, 'numberList5');
    } else if (number >= 460 && number <= 474) {
        processNumber(number, color, numbersArray54, 'numberList6');
    } else if (number >= 475 && number <= 489) {
        processNumber(number, color, numbersArray55, 'numberList7');
    } else if (number >= 490 && number <= 499) {
        processNumber(number, color, numbersArray56, 'numberList8');
    } else {
        alert('숫자를 잘못입력하였습니다.');
    }
4}

function processNumber(number, color, array, listId) {
    if (!enteredNumbers.has(number)) {
        enteredNumbers.add(number);
        array.push({ number, color });
        saveNumbers();
        displayNumbers(array, listId);
        updateTotalCount();
        document.getElementById('numberInput').value = '';
    } else {
        alert('이미 입력한 번호입니다.');
    }
}

function resetNumbers() {
    document.getElementById('numberList1').innerHTML = '';
    document.getElementById('numberList2').innerHTML = '';
    document.getElementById('numberList3').innerHTML = '';
    document.getElementById('numberList4').innerHTML = '';
    document.getElementById('numberList5').innerHTML = '';
    document.getElementById('numberList6').innerHTML = '';
    document.getElementById('numberList7').innerHTML = '';
    document.getElementById('numberList8').innerHTML = '';
    enteredNumbers.clear();
    numbersArray49 = [];
    numbersArray50 = [];
    numbersArray51 = [];
    numbersArray52 = [];
    numbersArray53 = [];
    numbersArray54 = [];
    numbersArray55 = [];
    numbersArray56 = [];
    localStorage.removeItem('numbersArray49');
    localStorage.removeItem('numbersArray50');
    localStorage.removeItem('numbersArray51');
    localStorage.removeItem('numbersArray52');
    localStorage.removeItem('numbersArray53');
    localStorage.removeItem('numbersArray54');
    localStorage.removeItem('numbersArray55');
    localStorage.removeItem('numbersArray56');
    localStorage.removeItem('isSorted');
    resetTextInputs();
    updateTotalCount();
}

function toggleSort() {
    if (isSorted) {
        displayNumbers(numbersArray49, 'numberList1');
        displayNumbers(numbersArray50, 'numberList2');
        displayNumbers(numbersArray51, 'numberList3');
        displayNumbers(numbersArray52, 'numberList4');
        displayNumbers(numbersArray53, 'numberList5');
        displayNumbers(numbersArray54, 'numberList6');
        displayNumbers(numbersArray55, 'numberList7');
        displayNumbers(numbersArray56, 'numberList8');
    } else {
        const sortedArray1 = [...numbersArray49].sort((a, b) => a.number - b.number);
        const sortedArray2 = [...numbersArray50].sort((a, b) => a.number - b.number);
        const sortedArray3 = [...numbersArray51].sort((a, b) => a.number - b.number);
        const sortedArray4 = [...numbersArray52].sort((a, b) => a.number - b.number);
        const sortedArray5 = [...numbersArray53].sort((a, b) => a.number - b.number);
        const sortedArray6 = [...numbersArray54].sort((a, b) => a.number - b.number);
        const sortedArray7 = [...numbersArray55].sort((a, b) => a.number - b.number);
        const sortedArray8 = [...numbersArray56].sort((a, b) => a.number - b.number);
        displayNumbers(sortedArray1, 'numberList1');
        displayNumbers(sortedArray2, 'numberList2');
        displayNumbers(sortedArray3, 'numberList3');
        displayNumbers(sortedArray4, 'numberList4');
        displayNumbers(sortedArray5, 'numberList5');
        displayNumbers(sortedArray6, 'numberList6');
        displayNumbers(sortedArray7, 'numberList7');
        displayNumbers(sortedArray8, 'numberList8');
    }
    isSorted = !isSorted;
    saveSortState();
}

function displayNumbers(array, listId) {
    const numberList = document.getElementById(listId);
    numberList.innerHTML = '';
    array.forEach((item, index) => {
        const newNumber = document.createElement('div');
        newNumber.textContent = item.number;
        newNumber.style.color = item.color;
        newNumber.classList.add('number-item');
        newNumber.onclick = (event) => {
            if (event.altKey) {
                removeNumber(index, array, listId);
            }
        };
        numberList.appendChild(newNumber);
    });
}

function removeNumber(index, array, listId) {
    const number = array[index].number;
    enteredNumbers.delete(number);
    array.splice(index, 1);
    saveNumbers();
    displayNumbers(array, listId);
    updateTotalCount();
}

function saveNumbers() {
    localStorage.setItem('numbersArray49', JSON.stringify(numbersArray49));
    localStorage.setItem('numbersArray50', JSON.stringify(numbersArray50));
    localStorage.setItem('numbersArray51', JSON.stringify(numbersArray51));
    localStorage.setItem('numbersArray52', JSON.stringify(numbersArray52));
    localStorage.setItem('numbersArray53', JSON.stringify(numbersArray53));
    localStorage.setItem('numbersArray54', JSON.stringify(numbersArray54));
    localStorage.setItem('numbersArray55', JSON.stringify(numbersArray55));
    localStorage.setItem('numbersArray56', JSON.stringify(numbersArray56));
}

function saveSortState() {
    localStorage.setItem('isSorted', JSON.stringify(isSorted));
}

function loadNumbers() {
    const storedNumbers1 = localStorage.getItem('numbersArray49');
    const storedNumbers2 = localStorage.getItem('numbersArray50');
    const storedNumbers3 = localStorage.getItem('numbersArray51');
    const storedNumbers4 = localStorage.getItem('numbersArray52');
    const storedNumbers5 = localStorage.getItem('numbersArray53');
    const storedNumbers6 = localStorage.getItem('numbersArray54');
    const storedNumbers7 = localStorage.getItem('numbersArray55');
    const storedNumbers8 = localStorage.getItem('numbersArray56');
    const storedSortState = localStorage.getItem('isSorted');
    if (storedNumbers1) {
        numbersArray49 = JSON.parse(storedNumbers1);
        numbersArray49.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray49, 'numberList1');
    }
    if (storedNumbers2) {
        numbersArray50 = JSON.parse(storedNumbers2);
        numbersArray50.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray50, 'numberList2');
    }
    if (storedNumbers3) {
        numbersArray51 = JSON.parse(storedNumbers3);
        numbersArray51.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray51, 'numberList3');
    }
    if (storedNumbers4) {
        numbersArray52 = JSON.parse(storedNumbers4);
        numbersArray52.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray52, 'numberList4');
    }
    if (storedNumbers5) {
        numbersArray53 = JSON.parse(storedNumbers5);
        numbersArray53.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray53, 'numberList5');
    }
    if (storedNumbers6) {
        numbersArray54 = JSON.parse(storedNumbers6);
        numbersArray54.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray54, 'numberList6');
    }
    if (storedNumbers7) {
        numbersArray55 = JSON.parse(storedNumbers7);
        numbersArray55.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray55, 'numberList7');
    }
    if (storedNumbers8) {
        numbersArray56 = JSON.parse(storedNumbers8);
        numbersArray56.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray56, 'numberList8');
    }
    if (storedSortState) {
        isSorted = JSON.parse(storedSortState);
        if (isSorted) {
            toggleSort();
        }
    }
    updateTotalCount();
}

function updateTotalCount() {
    const totalCount = 
    numbersArray49.length + 
    numbersArray50.length + 
    numbersArray51.length + 
    numbersArray52.length + 
    numbersArray53.length + 
    numbersArray54.length + 
    numbersArray55.length + 
    numbersArray56.length;
    document.getElementById('totalCount').textContent = totalCount;
}



// 텍스트 입력 및 새로고침 유지

function saveTextInputs() {
    const textInput17 = document.getElementById('textInput17').value;
    const textInput18 = document.getElementById('textInput18').value;
    const textInput19 = document.getElementById('textInput19').value;
    const textInput20 = document.getElementById('textInput20').value;
    localStorage.setItem('textInput17', textInput17);
    localStorage.setItem('textInput18', textInput18);
    localStorage.setItem('textInput19', textInput19);
    localStorage.setItem('textInput20', textInput20);
}

function loadTextInputs() {
    const textInput17 = localStorage.getItem('textInput17');
    const textInput18 = localStorage.getItem('textInput18');
    const textInput19 = localStorage.getItem('textInput19');
    const textInput20 = localStorage.getItem('textInput20');
    if (textInput17) document.getElementById('textInput17').value = textInput17;
    if (textInput18) document.getElementById('textInput18').value = textInput18;
    if (textInput19) document.getElementById('textInput19').value = textInput19;
    if (textInput20) document.getElementById('textInput20').value = textInput20;
}

function resetTextInputs() {
    document.getElementById('textInput17').value = '';
    document.getElementById('textInput18').value = '';
    document.getElementById('textInput19').value = '';
    document.getElementById('textInput20').value = '';
    localStorage.removeItem('textInput17');
    localStorage.removeItem('textInput18');
    localStorage.removeItem('textInput19');
    localStorage.removeItem('textInput20');
}

document.getElementById('textInput17').addEventListener('input', saveTextInputs);
document.getElementById('textInput18').addEventListener('input', saveTextInputs);
document.getElementById('textInput19').addEventListener('input', saveTextInputs);
document.getElementById('textInput20').addEventListener('input', saveTextInputs);