// 숫자입력, 정렬 및 새로고침 유지

const enteredNumbers = new Set();
let numbersArray1 = [];
let numbersArray2 = [];
let numbersArray3 = [];
let numbersArray4 = [];
let numbersArray5 = [];
let numbersArray6 = [];
let numbersArray7 = [];
let numbersArray8 = [];
let isSorted = false;

document.addEventListener('DOMContentLoaded', (event) => {
    loadNumbers();
    loadTextInputs();
});

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = input.value;
    const color = document.querySelector('input[name="color"]:checked').value;
    if (number >= 101 && number <= 115) {
        processNumber(number, color, numbersArray1, 'numberList1');
    } else if (number >= 116 && number <= 130 && number != 127 || number == 132) {
        processNumber(number, color, numbersArray2, 'numberList2');
    } else if (number >= 131 && number <= 145 && number != 132 || number == 127) {
        processNumber(number, color, numbersArray3, 'numberList3');
    } else if (number >= 146 && number <= 155) {
        processNumber(number, color, numbersArray4, 'numberList4');
    } else if (number >= 156 && number <= 167) {
        processNumber(number, color, numbersArray5, 'numberList5');
    } else if (number >= 168 && number <= 179) {
        processNumber(number, color, numbersArray6, 'numberList6');
    } else if (number >= 180 && number <= 191) {
        processNumber(number, color, numbersArray7, 'numberList7');
    } else if (number >= 192 && number <= 199) {
        processNumber(number, color, numbersArray8, 'numberList8');
    } else {
        alert('숫자를 잘못입력하였습니다.');
    }
}

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
    numbersArray1 = [];
    numbersArray2 = [];
    numbersArray3 = [];
    numbersArray4 = [];
    numbersArray5 = [];
    numbersArray6 = [];
    numbersArray7 = [];
    numbersArray8 = [];
    localStorage.removeItem('numbersArray1');
    localStorage.removeItem('numbersArray2');
    localStorage.removeItem('numbersArray3');
    localStorage.removeItem('numbersArray4');
    localStorage.removeItem('numbersArray5');
    localStorage.removeItem('numbersArray6');
    localStorage.removeItem('numbersArray7');
    localStorage.removeItem('numbersArray8');
    localStorage.removeItem('isSorted');
    resetTextInputs();
    updateTotalCount();
}

function toggleSort() {
    if (isSorted) {
        displayNumbers(numbersArray1, 'numberList1');
        displayNumbers(numbersArray2, 'numberList2');
        displayNumbers(numbersArray3, 'numberList3');
        displayNumbers(numbersArray4, 'numberList4');
        displayNumbers(numbersArray5, 'numberList5');
        displayNumbers(numbersArray6, 'numberList6');
        displayNumbers(numbersArray7, 'numberList7');
        displayNumbers(numbersArray8, 'numberList8');
    } else {
        const sortedArray1 = [...numbersArray1].sort((a, b) => a.number - b.number);
        const sortedArray2 = [...numbersArray2].sort((a, b) => a.number - b.number);
        const sortedArray3 = [...numbersArray3].sort((a, b) => a.number - b.number);
        const sortedArray4 = [...numbersArray4].sort((a, b) => a.number - b.number);
        const sortedArray5 = [...numbersArray5].sort((a, b) => a.number - b.number);
        const sortedArray6 = [...numbersArray6].sort((a, b) => a.number - b.number);
        const sortedArray7 = [...numbersArray7].sort((a, b) => a.number - b.number);
        const sortedArray8 = [...numbersArray8].sort((a, b) => a.number - b.number);
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
    localStorage.setItem('numbersArray1', JSON.stringify(numbersArray1));
    localStorage.setItem('numbersArray2', JSON.stringify(numbersArray2));
    localStorage.setItem('numbersArray3', JSON.stringify(numbersArray3));
    localStorage.setItem('numbersArray4', JSON.stringify(numbersArray4));
    localStorage.setItem('numbersArray5', JSON.stringify(numbersArray5));
    localStorage.setItem('numbersArray6', JSON.stringify(numbersArray6));
    localStorage.setItem('numbersArray7', JSON.stringify(numbersArray7));
    localStorage.setItem('numbersArray8', JSON.stringify(numbersArray8));
}

function saveSortState() {
    localStorage.setItem('isSorted', JSON.stringify(isSorted));
}

function loadNumbers() {
    const storedNumbers1 = localStorage.getItem('numbersArray1');
    const storedNumbers2 = localStorage.getItem('numbersArray2');
    const storedNumbers3 = localStorage.getItem('numbersArray3');
    const storedNumbers4 = localStorage.getItem('numbersArray4');
    const storedNumbers5 = localStorage.getItem('numbersArray5');
    const storedNumbers6 = localStorage.getItem('numbersArray6');
    const storedNumbers7 = localStorage.getItem('numbersArray7');
    const storedNumbers8 = localStorage.getItem('numbersArray8');
    const storedSortState = localStorage.getItem('isSorted');
    if (storedNumbers1) {
        numbersArray1 = JSON.parse(storedNumbers1);
        numbersArray1.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray1, 'numberList1');
    }
    if (storedNumbers2) {
        numbersArray2 = JSON.parse(storedNumbers2);
        numbersArray2.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray2, 'numberList2');
    }
    if (storedNumbers3) {
        numbersArray3 = JSON.parse(storedNumbers3);
        numbersArray3.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray3, 'numberList3');
    }
    if (storedNumbers4) {
        numbersArray4 = JSON.parse(storedNumbers4);
        numbersArray4.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray4, 'numberList4');
    }
    if (storedNumbers5) {
        numbersArray5 = JSON.parse(storedNumbers5);
        numbersArray5.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray5, 'numberList5');
    }
    if (storedNumbers6) {
        numbersArray6 = JSON.parse(storedNumbers6);
        numbersArray6.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray6, 'numberList6');
    }
    if (storedNumbers7) {
        numbersArray7 = JSON.parse(storedNumbers7);
        numbersArray7.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray7, 'numberList7');
    }
    if (storedNumbers8) {
        numbersArray8 = JSON.parse(storedNumbers8);
        numbersArray8.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray8, 'numberList8');
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
    numbersArray1.length + 
    numbersArray2.length + 
    numbersArray3.length + 
    numbersArray4.length + 
    numbersArray5.length + 
    numbersArray6.length + 
    numbersArray7.length + 
    numbersArray8.length;
    document.getElementById('totalCount').textContent = totalCount;
}

// 텍스트 입력 및 새로고침 유지

function saveTextInputs() {
    const textInput1 = document.getElementById('textInput1').value;
    const textInput2 = document.getElementById('textInput2').value;
    const textInput3 = document.getElementById('textInput3').value;
    const textInput4 = document.getElementById('textInput4').value;
    localStorage.setItem('textInput1', textInput1);
    localStorage.setItem('textInput2', textInput2);
    localStorage.setItem('textInput3', textInput3);
    localStorage.setItem('textInput4', textInput4);
}

function loadTextInputs() {
    const textInput1 = localStorage.getItem('textInput1');
    const textInput2 = localStorage.getItem('textInput2');
    const textInput3 = localStorage.getItem('textInput3');
    const textInput4 = localStorage.getItem('textInput4');
    if (textInput1) document.getElementById('textInput1').value = textInput1;
    if (textInput2) document.getElementById('textInput2').value = textInput2;
    if (textInput3) document.getElementById('textInput3').value = textInput3;
    if (textInput4) document.getElementById('textInput4').value = textInput4;
}

function resetTextInputs() {
    document.getElementById('textInput1').value = '';
    document.getElementById('textInput2').value = '';
    document.getElementById('textInput3').value = '';
    document.getElementById('textInput4').value = '';
    localStorage.removeItem('textInput1');
    localStorage.removeItem('textInput2');
    localStorage.removeItem('textInput3');
    localStorage.removeItem('textInput4');
}

document.getElementById('textInput1').addEventListener('input', saveTextInputs);
document.getElementById('textInput2').addEventListener('input', saveTextInputs);
document.getElementById('textInput3').addEventListener('input', saveTextInputs);
document.getElementById('textInput4').addEventListener('input', saveTextInputs);