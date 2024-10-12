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
    const textInput21 = document.getElementById('textInput21').value;
    const textInput22 = document.getElementById('textInput22').value;
    const textInput23 = document.getElementById('textInput23').value;
    const textInput24 = document.getElementById('textInput24').value;
    const textInput25 = document.getElementById('textInput25').value;
    const textInput26 = document.getElementById('textInput26').value;
    const textInput27 = document.getElementById('textInput27').value;
    const textInput28 = document.getElementById('textInput28').value;
    const textInput29 = document.getElementById('textInput29').value;
    const textInput30 = document.getElementById('textInput30').value;
    const textInput31 = document.getElementById('textInput31').value;
    const textInput32 = document.getElementById('textInput32').value;
    const textInput33 = document.getElementById('textInput33').value;
    const textInput34 = document.getElementById('textInput34').value;
    const textInput35 = document.getElementById('textInput35').value;
    const textInput36 = document.getElementById('textInput36').value;
    localStorage.setItem('textInput1', textInput1);
    localStorage.setItem('textInput2', textInput2);
    localStorage.setItem('textInput3', textInput3);
    localStorage.setItem('textInput4', textInput4);
    localStorage.setItem('textInput21', textInput21);
    localStorage.setItem('textInput22', textInput22);
    localStorage.setItem('textInput23', textInput23);
    localStorage.setItem('textInput24', textInput24);
    localStorage.setItem('textInput25', textInput25);
    localStorage.setItem('textInput26', textInput26);
    localStorage.setItem('textInput27', textInput27);
    localStorage.setItem('textInput28', textInput28);
    localStorage.setItem('textInput29', textInput29);
    localStorage.setItem('textInput30', textInput30);
    localStorage.setItem('textInput31', textInput31);
    localStorage.setItem('textInput32', textInput32);
    localStorage.setItem('textInput33', textInput33);
    localStorage.setItem('textInput34', textInput34);
    localStorage.setItem('textInput35', textInput35);
    localStorage.setItem('textInput36', textInput36);
}

function loadTextInputs() {
    const textInput1 = localStorage.getItem('textInput1');
    const textInput2 = localStorage.getItem('textInput2');
    const textInput3 = localStorage.getItem('textInput3');
    const textInput4 = localStorage.getItem('textInput4');
    const textInput21 = localStorage.getItem('textInput21');
    const textInput22 = localStorage.getItem('textInput22');
    const textInput23 = localStorage.getItem('textInput23');
    const textInput24 = localStorage.getItem('textInput24');
    const textInput25 = localStorage.getItem('textInput25');
    const textInput26 = localStorage.getItem('textInput26');
    const textInput27 = localStorage.getItem('textInput27');
    const textInput28 = localStorage.getItem('textInput28');
    const textInput29 = localStorage.getItem('textInput29');
    const textInput30 = localStorage.getItem('textInput30');
    const textInput31 = localStorage.getItem('textInput31');
    const textInput32 = localStorage.getItem('textInput32');
    const textInput33 = localStorage.getItem('textInput33');
    const textInput34 = localStorage.getItem('textInput34');
    const textInput35 = localStorage.getItem('textInput35');
    const textInput36 = localStorage.getItem('textInput36');
    if (textInput1) document.getElementById('textInput1').value = textInput1;
    if (textInput2) document.getElementById('textInput2').value = textInput2;
    if (textInput3) document.getElementById('textInput3').value = textInput3;
    if (textInput4) document.getElementById('textInput4').value = textInput4;
    if (textInput21) document.getElementById('textInput21').value = textInput21;
    if (textInput22) document.getElementById('textInput22').value = textInput22;
    if (textInput23) document.getElementById('textInput23').value = textInput23;
    if (textInput24) document.getElementById('textInput24').value = textInput24;
    if (textInput25) document.getElementById('textInput25').value = textInput25;
    if (textInput26) document.getElementById('textInput26').value = textInput26;
    if (textInput27) document.getElementById('textInput27').value = textInput27;
    if (textInput28) document.getElementById('textInput28').value = textInput28;
    if (textInput29) document.getElementById('textInput29').value = textInput29;
    if (textInput30) document.getElementById('textInput30').value = textInput30;
    if (textInput31) document.getElementById('textInput31').value = textInput31;
    if (textInput32) document.getElementById('textInput32').value = textInput32;
    if (textInput33) document.getElementById('textInput33').value = textInput33;
    if (textInput34) document.getElementById('textInput34').value = textInput34;
    if (textInput35) document.getElementById('textInput35').value = textInput35;
    if (textInput36) document.getElementById('textInput36').value = textInput36;
}

function resetTextInputs() {
    document.getElementById('textInput1').value = '';
    document.getElementById('textInput2').value = '';
    document.getElementById('textInput3').value = '';
    document.getElementById('textInput4').value = '';
    document.getElementById('textInput21').value = '';
    document.getElementById('textInput22').value = '';
    document.getElementById('textInput23').value = '';
    document.getElementById('textInput24').value = '';
    document.getElementById('textInput25').value = '';
    document.getElementById('textInput26').value = '';
    document.getElementById('textInput27').value = '';
    document.getElementById('textInput28').value = '';
    document.getElementById('textInput29').value = '';
    document.getElementById('textInput30').value = '';
    document.getElementById('textInput31').value = '';
    document.getElementById('textInput32').value = '';
    document.getElementById('textInput33').value = '';
    document.getElementById('textInput34').value = '';
    document.getElementById('textInput35').value = '';
    document.getElementById('textInput36').value = '';
    localStorage.removeItem('textInput1');
    localStorage.removeItem('textInput2');
    localStorage.removeItem('textInput3');
    localStorage.removeItem('textInput4');
    localStorage.removeItem('textInput21');
    localStorage.removeItem('textInput22');
    localStorage.removeItem('textInput23');
    localStorage.removeItem('textInput24');
    localStorage.removeItem('textInput25');
    localStorage.removeItem('textInput26');
    localStorage.removeItem('textInput27');
    localStorage.removeItem('textInput28');
    localStorage.removeItem('textInput29');
    localStorage.removeItem('textInput30');
    localStorage.removeItem('textInput31');
    localStorage.removeItem('textInput32');
    localStorage.removeItem('textInput33');
    localStorage.removeItem('textInput34');
    localStorage.removeItem('textInput35');
    localStorage.removeItem('textInput36');
}

document.getElementById('textInput1').addEventListener('input', saveTextInputs);
document.getElementById('textInput2').addEventListener('input', saveTextInputs);
document.getElementById('textInput3').addEventListener('input', saveTextInputs);
document.getElementById('textInput4').addEventListener('input', saveTextInputs);
document.getElementById('textInput21').addEventListener('input', saveTextInputs);
document.getElementById('textInput22').addEventListener('input', saveTextInputs);
document.getElementById('textInput23').addEventListener('input', saveTextInputs);
document.getElementById('textInput24').addEventListener('input', saveTextInputs);
document.getElementById('textInput25').addEventListener('input', saveTextInputs);
document.getElementById('textInput26').addEventListener('input', saveTextInputs);
document.getElementById('textInput27').addEventListener('input', saveTextInputs);
document.getElementById('textInput28').addEventListener('input', saveTextInputs);
document.getElementById('textInput29').addEventListener('input', saveTextInputs);
document.getElementById('textInput30').addEventListener('input', saveTextInputs);
document.getElementById('textInput31').addEventListener('input', saveTextInputs);
document.getElementById('textInput32').addEventListener('input', saveTextInputs);
document.getElementById('textInput33').addEventListener('input', saveTextInputs);
document.getElementById('textInput34').addEventListener('input', saveTextInputs);
document.getElementById('textInput35').addEventListener('input', saveTextInputs);
document.getElementById('textInput36').addEventListener('input', saveTextInputs);