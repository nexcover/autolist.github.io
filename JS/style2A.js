// 숫자입력, 정렬 및 새로고침 유지

const enteredNumbers = new Set();
let numbersArray20 = [];
let numbersArray21 = [];
let numbersArray22 = [];
let numbersArray23 = [];
let numbersArray24 = [];
let numbersArray25 = [];
let numbersArray26 = [];
let numbersArray27 = [];
let numbersArray28 = [];
let isSorted = false;

document.addEventListener('DOMContentLoaded', (event) => {
    loadNumbers();
    loadTextInputs();
});

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = input.value;
    const color = document.querySelector('input[name="color"]:checked').value;
    if (number >= 201 && number <= 210) {
        processNumber(number, color, numbersArray20, 'numberList1');
    } else if (number >= 301 && number <= 310) {
        processNumber(number, color, numbersArray21, 'numberList2');
    } else if (number >= 211 && number <= 220) {
        processNumber(number, color, numbersArray22, 'numberList3');
    } else if (number >= 311 && number <= 320) {
        processNumber(number, color, numbersArray23, 'numberList4');
    } else if (number >= 221 && number <= 225 || number >= 321 && number <= 325) {
        processNumber(number, color, numbersArray24, 'numberList5');
    } else if (number >= 226 && number <= 240) {
        processNumber(number, color, numbersArray25, 'numberList6');
    } else if (number >= 241 && number <= 255) {
        processNumber(number, color, numbersArray26, 'numberList7');
    } else if (number >= 326 && number <= 340) {
        processNumber(number, color, numbersArray27, 'numberList8');
    } else if (number >= 341 && number <= 355) {
        processNumber(number, color, numbersArray28, 'numberList9');
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
    document.getElementById('numberList9').innerHTML = '';
    enteredNumbers.clear();
    numbersArray20 = [];
    numbersArray21 = [];
    numbersArray22 = [];
    numbersArray23 = [];
    numbersArray23 = [];
    numbersArray24 = [];
    numbersArray25 = [];
    numbersArray26 = [];
    numbersArray27 = [];
    numbersArray28 = [];
    localStorage.removeItem('numbersArray20');
    localStorage.removeItem('numbersArray21');
    localStorage.removeItem('numbersArray22');
    localStorage.removeItem('numbersArray23');
    localStorage.removeItem('numbersArray24');
    localStorage.removeItem('numbersArray25');
    localStorage.removeItem('numbersArray26');
    localStorage.removeItem('numbersArray27');
    localStorage.removeItem('numbersArray28');
    localStorage.removeItem('isSorted');
    resetTextInputs();
    updateTotalCount();
}

function toggleSort() {
    if (isSorted) {
        displayNumbers(numbersArray20, 'numberList1');
        displayNumbers(numbersArray21, 'numberList2');
        displayNumbers(numbersArray22, 'numberList3');
        displayNumbers(numbersArray23, 'numberList4');
        displayNumbers(numbersArray24, 'numberList5');
        displayNumbers(numbersArray25, 'numberList6');
        displayNumbers(numbersArray26, 'numberList7');
        displayNumbers(numbersArray27, 'numberList8');
        displayNumbers(numbersArray28, 'numberList9');
    } else {
        const sortedArray1 = [...numbersArray20].sort((a, b) => a.number - b.number);
        const sortedArray2 = [...numbersArray21].sort((a, b) => a.number - b.number);
        const sortedArray3 = [...numbersArray22].sort((a, b) => a.number - b.number);
        const sortedArray4 = [...numbersArray23].sort((a, b) => a.number - b.number);
        const sortedArray5 = [...numbersArray24].sort((a, b) => a.number - b.number);
        const sortedArray6 = [...numbersArray25].sort((a, b) => a.number - b.number);
        const sortedArray7 = [...numbersArray26].sort((a, b) => a.number - b.number);
        const sortedArray8 = [...numbersArray27].sort((a, b) => a.number - b.number);
        const sortedArray9 = [...numbersArray28].sort((a, b) => a.number - b.number);
        displayNumbers(sortedArray1, 'numberList1');
        displayNumbers(sortedArray2, 'numberList2');
        displayNumbers(sortedArray3, 'numberList3');
        displayNumbers(sortedArray4, 'numberList4');
        displayNumbers(sortedArray5, 'numberList5');
        displayNumbers(sortedArray6, 'numberList6');
        displayNumbers(sortedArray7, 'numberList7');
        displayNumbers(sortedArray8, 'numberList8');
        displayNumbers(sortedArray9, 'numberList9');
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
    localStorage.setItem('numbersArray20', JSON.stringify(numbersArray20));
    localStorage.setItem('numbersArray21', JSON.stringify(numbersArray21));
    localStorage.setItem('numbersArray22', JSON.stringify(numbersArray22));
    localStorage.setItem('numbersArray23', JSON.stringify(numbersArray23));
    localStorage.setItem('numbersArray24', JSON.stringify(numbersArray24));
    localStorage.setItem('numbersArray25', JSON.stringify(numbersArray25));
    localStorage.setItem('numbersArray26', JSON.stringify(numbersArray26));
    localStorage.setItem('numbersArray27', JSON.stringify(numbersArray27));
    localStorage.setItem('numbersArray28', JSON.stringify(numbersArray28));
}

function saveSortState() {
    localStorage.setItem('isSorted', JSON.stringify(isSorted));
}

function loadNumbers() {
    const storedNumbers1 = localStorage.getItem('numbersArray20');
    const storedNumbers2 = localStorage.getItem('numbersArray21');
    const storedNumbers3 = localStorage.getItem('numbersArray22');
    const storedNumbers4 = localStorage.getItem('numbersArray23');
    const storedNumbers5 = localStorage.getItem('numbersArray24');
    const storedNumbers6 = localStorage.getItem('numbersArray25');
    const storedNumbers7 = localStorage.getItem('numbersArray26');
    const storedNumbers8 = localStorage.getItem('numbersArray27');
    const storedNumbers9 = localStorage.getItem('numbersArray28');
    const storedSortState = localStorage.getItem('isSorted');
    if (storedNumbers1) {
        numbersArray20 = JSON.parse(storedNumbers1);
        numbersArray20.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray20, 'numberList1');
    }
    if (storedNumbers2) {
        numbersArray21 = JSON.parse(storedNumbers2);
        numbersArray21.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray21, 'numberList2');
    }
    if (storedNumbers3) {
        numbersArray22 = JSON.parse(storedNumbers3);
        numbersArray22.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray22, 'numberList3');
    }
    if (storedNumbers4) {
        numbersArray23 = JSON.parse(storedNumbers4);
        numbersArray23.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray23, 'numberList4');
    }
    if (storedNumbers5) {
        numbersArray24 = JSON.parse(storedNumbers5);
        numbersArray24.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray24, 'numberList5');
    }
    if (storedNumbers6) {
        numbersArray25 = JSON.parse(storedNumbers6);
        numbersArray25.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray25, 'numberList6');
    }
    if (storedNumbers7) {
        numbersArray26 = JSON.parse(storedNumbers7);
        numbersArray26.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray26, 'numberList7');
    }
    if (storedNumbers8) {
        numbersArray27 = JSON.parse(storedNumbers8);
        numbersArray27.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray27, 'numberList8');
    }
    if (storedNumbers9) {
        numbersArray28 = JSON.parse(storedNumbers9);
        numbersArray28.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray28, 'numberList9');
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
    numbersArray20.length + 
    numbersArray21.length + 
    numbersArray22.length + 
    numbersArray23.length + 
    numbersArray24.length + 
    numbersArray25.length + 
    numbersArray26.length + 
    numbersArray27.length +
    numbersArray28.length;
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