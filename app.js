const nameOfExpense = document.getElementById('itemExpense');
const date = document.getElementById('itemDate');
const amount = document.getElementById('itemAmount');
const submitBtn = document.getElementById('submit');
const tbody = document.getElementById('tbody');
const table = document.getElementById('table');
let selectedRow = null;

table.style.borderCollapse = 'collapse';


//function to clear input field AFTER clicking submit button
function clearInputs() {
    nameOfExpense.value = ''
    date.value = ''
    amount.value = '';
}


function deleteRowData(td) {

    let isTrue = true;
    if (confirm('Are you sure you want to delete this row?') !== isTrue ) {
        isTrue = false;
    } else {
        let row = td.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
 }

 let dataTypes = [
    'text',
    'date',
    'text'
];

let inputTypes = [
    'inputName',
    'inputDate',
    'inputAmount'
];
 
 function editRowData(data) {
    
    let selectedRow = data.parentElement.parentElement;
	
	for (let i = 0; i < selectedRow.cells.length - 1; i++) {
		let cell = selectedRow.cells[i]
		let input = document.createElement('input');

        cell.innerText = '';
		input.setAttribute('type', dataTypes[i]);
		input.setAttribute('id', inputTypes[i]);
		cell.append(input);
	}

    
    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';

    selectedRow.cells[3].append(updateBtn);


    updateBtn.addEventListener('click', () => {
        for (let i = 0; i < selectedRow.cells.length - 1; i++) {
			
            let cell = selectedRow.cells[i];
			let type = cell.getElementsByTagName('input')[0].type;

			if (type == "text") {
                cell.innerText = document.getElementById(inputTypes[i]).value;
			} else {
                cell.textContent = document.getElementById(inputTypes[i]).value;
            }
        }

        updateBtn.style.display = 'none';
    });

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
        cell1.textContent = input.name;
        cell2.textContent = input.date;
        cell3.textContent = '$' + input.amount;
        cell4Del.innerHTML = 
        `
            <button onclick="deleteRowData(this)" style="padding: 1px;">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button onclick="editRowData(this)">
                    Edit
            </button>
        `
     });

    clearInputs();

}

function checkValidityOnInputs() {
    // let reg = new RegExp('^[0-9]*$')
    if (!nameOfExpense.value && !date.checkValidity() && !amount.value) {
        alert('Please fill in all 3 fields.')
        submitBtn.disabled = true;
    } 
}

submitBtn.addEventListener('click', () => {
    
    checkValidityOnInputs();
    inputToTableRow();

});



