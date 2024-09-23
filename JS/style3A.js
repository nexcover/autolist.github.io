// 숫자입력, 정렬 및 새로고침 유지

const enteredNumbers = new Set();
let numbersArray41 = [];
let numbersArray42 = [];
let numbersArray43 = [];
let numbersArray44 = [];
let numbersArray45 = [];
let numbersArray46 = [];
let numbersArray47 = [];
let numbersArray48 = [];
let isSorted = false;

document.addEventListener('DOMContentLoaded', (event) => {
    loadNumbers();
    loadTextInputs();
});

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = input.value;
    const color = document.querySelector('input[name="color"]:checked').value;
    if (number >= 401 && number <= 412) {
        processNumber(number, color, numbersArray41, 'numberList1');
    } else if (number >= 413 && number <= 424) {
        processNumber(number, color, numbersArray42, 'numberList2');
    } else if (number >= 425 && number <= 436) {
        processNumber(number, color, numbersArray43, 'numberList3');
    } else if (number >= 437 && number <= 444) {
        processNumber(number, color, numbersArray44, 'numberList4');
    } else if (number >= 445 && number <= 459) {
        processNumber(number, color, numbersArray45, 'numberList5');
    } else if (number >= 460 && number <= 474) {
        processNumber(number, color, numbersArray46, 'numberList6');
    } else if (number >= 475 && number <= 489) {
        processNumber(number, color, numbersArray47, 'numberList7');
    } else if (number >= 490 && number <= 499) {
        processNumber(number, color, numbersArray48, 'numberList8');
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
    numbersArray41 = [];
    numbersArray42 = [];
    numbersArray43 = [];
    numbersArray44 = [];
    numbersArray45 = [];
    numbersArray46 = [];
    numbersArray47 = [];
    numbersArray48 = [];
    localStorage.removeItem('numbersArray41');
    localStorage.removeItem('numbersArray42');
    localStorage.removeItem('numbersArray43');
    localStorage.removeItem('numbersArray44');
    localStorage.removeItem('numbersArray45');
    localStorage.removeItem('numbersArray46');
    localStorage.removeItem('numbersArray47');
    localStorage.removeItem('numbersArray48');
    localStorage.removeItem('isSorted');
    resetTextInputs();
    updateTotalCount();
}

function toggleSort() {
    if (isSorted) {
        displayNumbers(numbersArray41, 'numberList1');
        displayNumbers(numbersArray42, 'numberList2');
        displayNumbers(numbersArray43, 'numberList3');
        displayNumbers(numbersArray44, 'numberList4');
        displayNumbers(numbersArray45, 'numberList5');
        displayNumbers(numbersArray46, 'numberList6');
        displayNumbers(numbersArray47, 'numberList7');
        displayNumbers(numbersArray48, 'numberList8');
    } else {
        const sortedArray1 = [...numbersArray41].sort((a, b) => a.number - b.number);
        const sortedArray2 = [...numbersArray42].sort((a, b) => a.number - b.number);
        const sortedArray3 = [...numbersArray43].sort((a, b) => a.number - b.number);
        const sortedArray4 = [...numbersArray44].sort((a, b) => a.number - b.number);
        const sortedArray5 = [...numbersArray45].sort((a, b) => a.number - b.number);
        const sortedArray6 = [...numbersArray46].sort((a, b) => a.number - b.number);
        const sortedArray7 = [...numbersArray47].sort((a, b) => a.number - b.number);
        const sortedArray8 = [...numbersArray48].sort((a, b) => a.number - b.number);
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
    localStorage.setItem('numbersArray41', JSON.stringify(numbersArray41));
    localStorage.setItem('numbersArray42', JSON.stringify(numbersArray42));
    localStorage.setItem('numbersArray43', JSON.stringify(numbersArray43));
    localStorage.setItem('numbersArray44', JSON.stringify(numbersArray44));
    localStorage.setItem('numbersArray45', JSON.stringify(numbersArray45));
    localStorage.setItem('numbersArray46', JSON.stringify(numbersArray46));
    localStorage.setItem('numbersArray47', JSON.stringify(numbersArray47));
    localStorage.setItem('numbersArray48', JSON.stringify(numbersArray48));
}

function saveSortState() {
    localStorage.setItem('isSorted', JSON.stringify(isSorted));
}

function loadNumbers() {
    const storedNumbers1 = localStorage.getItem('numbersArray41');
    const storedNumbers2 = localStorage.getItem('numbersArray42');
    const storedNumbers3 = localStorage.getItem('numbersArray43');
    const storedNumbers4 = localStorage.getItem('numbersArray44');
    const storedNumbers5 = localStorage.getItem('numbersArray45');
    const storedNumbers6 = localStorage.getItem('numbersArray46');
    const storedNumbers7 = localStorage.getItem('numbersArray47');
    const storedNumbers8 = localStorage.getItem('numbersArray48');
    const storedSortState = localStorage.getItem('isSorted');
    if (storedNumbers1) {
        numbersArray41 = JSON.parse(storedNumbers1);
        numbersArray41.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray41, 'numberList1');
    }
    if (storedNumbers2) {
        numbersArray42 = JSON.parse(storedNumbers2);
        numbersArray42.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray42, 'numberList2');
    }
    if (storedNumbers3) {
        numbersArray43 = JSON.parse(storedNumbers3);
        numbersArray43.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray43, 'numberList3');
    }
    if (storedNumbers4) {
        numbersArray44 = JSON.parse(storedNumbers4);
        numbersArray44.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray44, 'numberList4');
    }
    if (storedNumbers5) {
        numbersArray45 = JSON.parse(storedNumbers5);
        numbersArray45.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray45, 'numberList5');
    }
    if (storedNumbers6) {
        numbersArray46 = JSON.parse(storedNumbers6);
        numbersArray46.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray46, 'numberList6');
    }
    if (storedNumbers7) {
        numbersArray47 = JSON.parse(storedNumbers7);
        numbersArray47.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray47, 'numberList7');
    }
    if (storedNumbers8) {
        numbersArray48 = JSON.parse(storedNumbers8);
        numbersArray48.forEach(item => enteredNumbers.add(item.number));
        displayNumbers(numbersArray48, 'numberList8');
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
    numbersArray41.length + 
    numbersArray42.length + 
    numbersArray43.length + 
    numbersArray44.length + 
    numbersArray45.length + 
    numbersArray46.length + 
    numbersArray47.length + 
    numbersArray48.length;
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