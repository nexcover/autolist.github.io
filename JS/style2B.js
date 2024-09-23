// 숫자입력, 정렬 및 새로고침 유지

const enteredNumbers = new Set();
let numbersArray30 = [];
let numbersArray31 = [];
let numbersArray32 = [];
let numbersArray33 = [];
let numbersArray34 = [];
let numbersArray35 = [];
let numbersArray36 = [];
let numbersArray37 = [];
let numbersArray38 = [];
let isSorted = false;

document.addEventListener('DOMContentLoaded', (event) => {
    loadNumbers();
    loadTextInputs();
});

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = input.value;
    const color = document.querySelector('input[name="color"]:checked').value;
    if (number >= 301 && number <= 310) {
        processNumber(number, color, numbersArray31, 'numberList2');
    } else if (number >= 311 && number <= 320) {
        processNumber(number, color, numbersArray33, 'numberList4');
    } else if (number >= 321 && number <= 325) {
        processNumber(number, color, numbersArray34, 'numberList5');
    } else if (number >= 326 && number <= 340) {
        processNumber(number, color, numbersArray37, 'numberList8');
    } else if (number >= 341 && number <= 355) {
        processNumber(number, color, numbersArray38, 'numberList9');
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
    numbersArray30 = [];
    numbersArray31 = [];
    numbersArray32 = [];
    numbersArray33 = [];
    numbersArray33 = [];
    numbersArray34 = [];
    numbersArray35 = [];
    numbersArray36 = [];
    numbersArray37 = [];
    numbersArray38 = [];
    localStorage.removeItem('numbersArray30');
    localStorage.removeItem('numbersArray31');
    localStorage.removeItem('numbersArray32');
    localStorage.removeItem('numbersArray33');
    localStorage.removeItem('numbersArray34');
    localStorage.removeItem('numbersArray35');
    localStorage.removeItem('numbersArray36');
    localStorage.removeItem('numbersArray37');
    localStorage.removeItem('numbersArray38');
    localStorage.removeItem('isSorted');
    resetTextInputs();
    updateTotalCount();
}

function toggleSort() {
    if (isSorted) {
        displayNumbers(numbersArray30, 'numberList1');
        displayNumbers(numbersArray31, 'numberList2');
        displayNumbers(numbersArray32, 'numberList3');
        displayNumbers(numbersArray33, 'numberList4');
        displayNumbers(numbersArray34, 'numberList5');
        displayNumbers(numbersArray35, 'numberList6');
        displayNumbers(numbersArray36, 'numberList7');
        displayNumbers(numbersArray37, 'numberList8');
        displayNumbers(numbersArray38, 'numberList9');
    } else {
        const sortedArray1 = [...numbersArray30].sort((a, b) => a.number - b.number);
        const sortedArray2 = [...numbersArray31].sort((a, b) => a.number - b.number);
        const sortedArray3 = [...numbersArray32].sort((a, b) => a.number - b.number);
        const sortedArray4 = [...numbersArray33].sort((a, b) => a.number - b.number);
        const sortedArray5 = [...numbersArray34].sort((a, b) => a.number - b.number);
        const sortedArray6 = [...numbersArray35].sort((a, b) => a.number - b.number);
        const sortedArray7 = [...numbersArray36].sort((a, b) => a.number - b.number);
        const sortedArray8 = [...numbersArray37].sort((a, b) => a.number - b.number);
        const sortedArray9 = [...numbersArray38].sort((a, b) => a.number - b.number);
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
    localStorage.setItem('numbersArray30', JSON.stringify(numbersArray30));
    localStorage.setItem('numbersArray31', JSON.stringify(numbersArray31));
    localStorage.setItem('numbersArray32', JSON.stringify(numbersArray32));
    localStorage.setItem('numbersArray33', JSON.stringify(numbersArray33));
    localStorage.setItem('numbersArray34', JSON.stringify(numbersArray34));
    localStorage.setItem('numbersArray35', JSON.stringify(numbersArray35));
    localStorage.setItem('numbersArray36', JSON.stringify(numbersArray36));
    localStorage.setItem('numbersArray37', JSON.stringify(numbersArray37));
    localStorage.setItem('numbersArray38', JSON.stringify(numbersArray38));
}

function saveSortState() {
    localStorage.setItem('isSorted', JSON.stringify(isSorted));
}

function loadNumbers() {
    const storedNumbers1 = localStorage.getItem('numbersArray30');
    const storedNumbers2 = localStorage.getItem('numbersArray31');
    const storedNumbers3 = localStorage.getItem('numbersArray32');
    const storedNumbers4 = localStorage.getItem('numbersArray33');
    const storedNumbers5 = localStorage.getItem('numbersArray34');
    const storedNumbers6 = localStorage.getItem('numbersArray35');
    const storedNumbers7 = localStorage.getItem('numbersArray36');
    const storedNumbers8 = localStorage.getItem('numbersArray37');
    const storedNumbers9 = localStorage.getItem('numbersArray38');
    const storedSortState = localStorage.getItem('isSorted');
    if (storedNumbers1) {
        numbersArray30 = JSON.parse(storedNumbers1);
        numbersArray30.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray30, 'numberList1');
    }
    if (storedNumbers2) {
        numbersArray31 = JSON.parse(storedNumbers2);
        numbersArray31.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray31, 'numberList2');
    }
    if (storedNumbers3) {
        numbersArray32 = JSON.parse(storedNumbers3);
        numbersArray32.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray32, 'numberList3');
    }
    if (storedNumbers4) {
        numbersArray33 = JSON.parse(storedNumbers4);
        numbersArray33.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray33, 'numberList4');
    }
    if (storedNumbers5) {
        numbersArray34 = JSON.parse(storedNumbers5);
        numbersArray34.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray34, 'numberList5');
    }
    if (storedNumbers6) {
        numbersArray35 = JSON.parse(storedNumbers6);
        numbersArray35.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray35, 'numberList6');
    }
    if (storedNumbers7) {
        numbersArray36 = JSON.parse(storedNumbers7);
        numbersArray36.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray36, 'numberList7');
    }
    if (storedNumbers8) {
        numbersArray37 = JSON.parse(storedNumbers8);
        numbersArray37.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray37, 'numberList8');
    }
    if (storedNumbers9) {
        numbersArray38 = JSON.parse(storedNumbers9);
        numbersArray38.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray38, 'numberList9');
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
    numbersArray30.length + 
    numbersArray31.length + 
    numbersArray32.length + 
    numbersArray33.length + 
    numbersArray34.length + 
    numbersArray35.length + 
    numbersArray36.length + 
    numbersArray37.length +
    numbersArray38.length;
    document.getElementById('totalCount').textContent = totalCount;
}



// 텍스트 입력 및 새로고침 유지

function saveTextInputs() {
    const textInput9 = document.getElementById('textInput9').value;
    const textInput10 = document.getElementById('textInput10').value;
    const textInput11 = document.getElementById('textInput11').value;
    const textInput12 = document.getElementById('textInput12').value;
    localStorage.setItem('textInput9', textInput9);
    localStorage.setItem('textInput10', textInput10);
    localStorage.setItem('textInput11', textInput11);
    localStorage.setItem('textInput12', textInput12);
}

function loadTextInputs() {
    const textInput9 = localStorage.getItem('textInput9');
    const textInput10 = localStorage.getItem('textInput10');
    const textInput11 = localStorage.getItem('textInput11');
    const textInput12 = localStorage.getItem('textInput12');
    if (textInput9) document.getElementById('textInput9').value = textInput9;
    if (textInput10) document.getElementById('textInput10').value = textInput10;
    if (textInput11) document.getElementById('textInput11').value = textInput11;
    if (textInput12) document.getElementById('textInput12').value = textInput12;
}

function resetTextInputs() {
    document.getElementById('textInput9').value = '';
    document.getElementById('textInput10').value = '';
    document.getElementById('textInput11').value = '';
    document.getElementById('textInput12').value = '';
    localStorage.removeItem('textInput9');
    localStorage.removeItem('textInput10');
    localStorage.removeItem('textInput11');
    localStorage.removeItem('textInput12');
}

document.getElementById('textInput9').addEventListener('input', saveTextInputs);
document.getElementById('textInput10').addEventListener('input', saveTextInputs);
document.getElementById('textInput11').addEventListener('input', saveTextInputs);
document.getElementById('textInput12').addEventListener('input', saveTextInputs);