const nameOfExpense = document.getElementById('itemExpense');
const date = document.getElementById('itemDate');
const amount = document.getElementById('itemAmount');
const submitBtn = document.getElementById('submit');
const tbody = document.getElementById('tbody');
const table = document.getElementById('table');


table.style.borderCollapse = 'collapse';


//function to clear input field AFTER clicking submit button
function clearInputs() {
    nameOfExpense.value = ''
    date.value = ''
    amount.value = '';
}


function deleteRowData() {
    let isTrue = true;
    if (isTrue) {
        confirm('Are you sure you want to delete this row?')
        tbody.deleteRow(-1);
    } else {
        isTrue = false;
    
    }
 }
 
 function editRowData() {

 }

 

function inputToTableRow() {
    const arrOfData = [
        { 
            name: nameOfExpense.value, 
            date: date.value, 
            amount: amount.value
        }
     ]

    let newRow = tbody.insertRow(tbody.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4Del = newRow.insertCell(3);

    arrOfData.forEach(input => {
        cell1.innerHTML = input.name;
        cell2.innerHTML = input.date;
        cell3.innerHTML = '$' + input.amount;
        cell4Del.innerHTML = `
            <button onclick="deleteRowData()">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button onclick="editRowData()">
                    Edit
            </button>
        `
     });

    clearInputs();

}

submitBtn.addEventListener('click', inputToTableRow);