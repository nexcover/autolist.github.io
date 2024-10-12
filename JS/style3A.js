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
    const textInput13 = document.getElementById('textInput13').value;
    const textInput14 = document.getElementById('textInput14').value;
    const textInput15 = document.getElementById('textInput15').value;
    const textInput16 = document.getElementById('textInput16').value;
    const textInput65 = document.getElementById('textInput65').value;
    const textInput66 = document.getElementById('textInput66').value;
    const textInput67 = document.getElementById('textInput67').value;
    const textInput68 = document.getElementById('textInput68').value;
    const textInput69 = document.getElementById('textInput69').value;
    const textInput70 = document.getElementById('textInput70').value;
    const textInput71 = document.getElementById('textInput71').value;
    const textInput72 = document.getElementById('textInput72').value;
    const textInput73 = document.getElementById('textInput73').value;
    const textInput74 = document.getElementById('textInput74').value;
    const textInput75 = document.getElementById('textInput75').value;
    const textInput76 = document.getElementById('textInput76').value;
    const textInput77 = document.getElementById('textInput77').value;
    const textInput78 = document.getElementById('textInput78').value;
    const textInput79 = document.getElementById('textInput79').value;
    const textInput80 = document.getElementById('textInput80').value;
    localStorage.setItem('textInput13', textInput13);
    localStorage.setItem('textInput14', textInput14);
    localStorage.setItem('textInput15', textInput15);
    localStorage.setItem('textInput16', textInput16);
    localStorage.setItem('textInput65', textInput65);
    localStorage.setItem('textInput66', textInput66);
    localStorage.setItem('textInput67', textInput67);
    localStorage.setItem('textInput68', textInput68);
    localStorage.setItem('textInput69', textInput69);
    localStorage.setItem('textInput70', textInput70);
    localStorage.setItem('textInput71', textInput71);
    localStorage.setItem('textInput72', textInput72);
    localStorage.setItem('textInput73', textInput73);
    localStorage.setItem('textInput74', textInput74);
    localStorage.setItem('textInput75', textInput75);
    localStorage.setItem('textInput76', textInput76);
    localStorage.setItem('textInput77', textInput77);
    localStorage.setItem('textInput78', textInput78);
    localStorage.setItem('textInput79', textInput79);
    localStorage.setItem('textInput80', textInput80);
}

function loadTextInputs() {
    const textInput13 = localStorage.getItem('textInput13');
    const textInput14 = localStorage.getItem('textInput14');
    const textInput15 = localStorage.getItem('textInput15');
    const textInput16 = localStorage.getItem('textInput16');
    const textInput65 = localStorage.getItem('textInput65');
    const textInput66 = localStorage.getItem('textInput66');
    const textInput67 = localStorage.getItem('textInput67');
    const textInput68 = localStorage.getItem('textInput68');
    const textInput69 = localStorage.getItem('textInput69');
    const textInput70 = localStorage.getItem('textInput70');
    const textInput71 = localStorage.getItem('textInput71');
    const textInput72 = localStorage.getItem('textInput72');
    const textInput73 = localStorage.getItem('textInput73');
    const textInput74 = localStorage.getItem('textInput74');
    const textInput75 = localStorage.getItem('textInput75');
    const textInput76 = localStorage.getItem('textInput76');
    const textInput77 = localStorage.getItem('textInput77');
    const textInput78 = localStorage.getItem('textInput78');
    const textInput79 = localStorage.getItem('textInput79');
    const textInput80 = localStorage.getItem('textInput80');
    if (textInput13) document.getElementById('textInput13').value = textInput13;
    if (textInput14) document.getElementById('textInput14').value = textInput14;
    if (textInput15) document.getElementById('textInput15').value = textInput15;
    if (textInput16) document.getElementById('textInput16').value = textInput16;
    if (textInput65) document.getElementById('textInput65').value = textInput65;
    if (textInput66) document.getElementById('textInput66').value = textInput66;
    if (textInput67) document.getElementById('textInput67').value = textInput67;
    if (textInput68) document.getElementById('textInput68').value = textInput68;
    if (textInput69) document.getElementById('textInput69').value = textInput69;
    if (textInput70) document.getElementById('textInput70').value = textInput70;
    if (textInput71) document.getElementById('textInput71').value = textInput71;
    if (textInput72) document.getElementById('textInput72').value = textInput72;
    if (textInput73) document.getElementById('textInput73').value = textInput73;
    if (textInput74) document.getElementById('textInput74').value = textInput74;
    if (textInput75) document.getElementById('textInput75').value = textInput75;
    if (textInput76) document.getElementById('textInput76').value = textInput76;
    if (textInput77) document.getElementById('textInput77').value = textInput77;
    if (textInput78) document.getElementById('textInput78').value = textInput78;
    if (textInput79) document.getElementById('textInput79').value = textInput79;
    if (textInput80) document.getElementById('textInput80').value = textInput80;
}

function resetTextInputs() {
    document.getElementById('textInput13').value = '';
    document.getElementById('textInput14').value = '';
    document.getElementById('textInput15').value = '';
    document.getElementById('textInput16').value = '';
    document.getElementById('textInput65').value = '';
    document.getElementById('textInput66').value = '';
    document.getElementById('textInput67').value = '';
    document.getElementById('textInput68').value = '';
    document.getElementById('textInput69').value = '';
    document.getElementById('textInput70').value = '';
    document.getElementById('textInput71').value = '';
    document.getElementById('textInput72').value = '';
    document.getElementById('textInput73').value = '';
    document.getElementById('textInput74').value = '';
    document.getElementById('textInput75').value = '';
    document.getElementById('textInput76').value = '';
    document.getElementById('textInput77').value = '';
    document.getElementById('textInput78').value = '';
    document.getElementById('textInput79').value = '';
    document.getElementById('textInput80').value = '';
    localStorage.removeItem('textInput13');
    localStorage.removeItem('textInput14');
    localStorage.removeItem('textInput15');
    localStorage.removeItem('textInput16');
    localStorage.removeItem('textInput65');
    localStorage.removeItem('textInput66');
    localStorage.removeItem('textInput67');
    localStorage.removeItem('textInput68');
    localStorage.removeItem('textInput69');
    localStorage.removeItem('textInput70');
    localStorage.removeItem('textInput71');
    localStorage.removeItem('textInput72');
    localStorage.removeItem('textInput73');
    localStorage.removeItem('textInput74');
    localStorage.removeItem('textInput75');
    localStorage.removeItem('textInput76');
    localStorage.removeItem('textInput77');
    localStorage.removeItem('textInput78');
    localStorage.removeItem('textInput79');
    localStorage.removeItem('textInput80');
}

document.getElementById('textInput13').addEventListener('input', saveTextInputs);
document.getElementById('textInput14').addEventListener('input', saveTextInputs);
document.getElementById('textInput15').addEventListener('input', saveTextInputs);
document.getElementById('textInput16').addEventListener('input', saveTextInputs);
document.getElementById('textInput65').addEventListener('input', saveTextInputs);
document.getElementById('textInput66').addEventListener('input', saveTextInputs);
document.getElementById('textInput67').addEventListener('input', saveTextInputs);
document.getElementById('textInput68').addEventListener('input', saveTextInputs);
document.getElementById('textInput69').addEventListener('input', saveTextInputs);
document.getElementById('textInput70').addEventListener('input', saveTextInputs);
document.getElementById('textInput71').addEventListener('input', saveTextInputs);
document.getElementById('textInput72').addEventListener('input', saveTextInputs);
document.getElementById('textInput73').addEventListener('input', saveTextInputs);
document.getElementById('textInput74').addEventListener('input', saveTextInputs);
document.getElementById('textInput75').addEventListener('input', saveTextInputs);
document.getElementById('textInput76').addEventListener('input', saveTextInputs);
document.getElementById('textInput77').addEventListener('input', saveTextInputs);
document.getElementById('textInput78').addEventListener('input', saveTextInputs);
document.getElementById('textInput79').addEventListener('input', saveTextInputs);
document.getElementById('textInput80').addEventListener('input', saveTextInputs);