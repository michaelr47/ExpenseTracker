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

 
 function editRowData(data) {
    
    let selectedRow = data.parentElement.parentElement;

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
	
	for (let i = 0; i < selectedRow.cells.length - 1; i++) {
		selectedRow.cells[i].innerText = '';
		let input = document.createElement('input');
		input.setAttribute('type', dataTypes[i]);
		input.setAttribute('id', inputTypes[i]);
		selectedRow.cells[i].append(input);
	}

    
    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update';

    selectedRow.cells[3].append(updateBtn);


    updateBtn.addEventListener('click', () => {
        for (let i = 0; i < selectedRow.cells.length; i++) {
			let cell = selectedRow.cells[i];
			if (cell.getElementsByTagName('input').type == "text") {
                cell.innerText = document.getElementById(inputTypes[i]).value;
		}	
			if (cell.getElementsByTagName('input').type == "date") {
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

submitBtn.addEventListener('click', inputToTableRow);
// submitBtn.addEventListener('click', createNewRow);

//old editRowData function 
// function editRowData(data) {
//     let selectedRow = data.parentElement.parentElement;

//     selectedRow.cells[0].innerText = ‘’
//     selectedRow.cells[1].innerText = ‘’
//     selectedRow.cells[2].innerText = ‘’

//     let input1 = document.createElement(‘input’);
//     input1.setAttribute(‘type’, ‘text’);
//     input1.setAttribute(‘id’, ‘inputName’)

//     let input2 = document.createElement(‘input’);
//     input2.setAttribute(‘type’, ‘date’);
//     input2.setAttribute(‘id’, ‘inputDate’);

//     let input3 = document.createElement(‘input’);
//     input3.setAttribute(‘type’, ‘text’);
//     input3.setAttribute(‘id’, ‘inputAmount’);

//     for (let i = 0; i < selectedRow.length; i++) {
//         let input = document.createElement(‘input’);
//         selectedRow.cells[i].append(input);
//     }

//     selectedRow.cells[0].append(input1);
//     selectedRow.cells[1].append(input2);
//     selectedRow.cells[2].append(input3);

//     const updateBtn = document.createElement(‘button’);
//     updateBtn.innerText = ‘Update’;
//     selectedRow.cells[3].append(updateBtn);

//     updateBtn.addEventListener(‘click’, () => {
//         selectedRow.cells[0].textContent = document.getElementById(‘inputName’).value;
//         selectedRow.cells[1].textContent = document.getElementById(‘inputDate’).value;
//         selectedRow.cells[2].textContent = document.getElementById(‘inputAmount’).value;
//         updateBtn.style.display = ‘none’;
//     });
// }