// ----------------------------------------------------------------------------------------------|
const nameOfExpense = document.getElementById('itemExpense'); // --------------------------------|
const date          = document.getElementById('itemDate'); // -------------------------------|   |
const amount        = document.getElementById('itemAmount'); // -------------------------|   |   |
//  ---------------------------------------------------------- ACCESSING HTML ELEMENTS ----------|
const submitBtn     = document.getElementById('submit'); // -----------------------------|   |   |
const table         = document.getElementById('table'); // ----------------------------------|   |  
const tbody         = document.getElementById('tbody'); // --------------------------------------|
// ----------------------------------------------------------------------------------------------|

// declaring variables in global scope to assign new values in functions later..
let selectedRow = null;      
let fourthCell;

//function to clear input field AFTER clicking submit button
function clearInputs() {
    nameOfExpense.value = ''
    date.value = ''
    amount.value = '';
}

//function executes upon clicking trash button to delete a specific row
function deleteRowData(el) {
    let userConfirmed = confirm('Are you sure you want to delete this row?');
    if (userConfirmed) {
        let row = el.parentNode.parentNode; 
        row.parentNode.removeChild(row);
    }
}

// array to iterate through assigning input types to inputs
 let inputTypes = [
    'text',
    'date',
    'number'
];

// array of id's to assign the input elements
let inputIDs = [                           
    'inputName',
    'inputDate',
    'inputAmount'
];


//function to to edit all 3 cells in corresponding row upon clicking edit button and appending update button
 function editRowData(data) {
    let editButton = data; // data is essentially the edit button 
    editButton.style.display = 'none'; // and display it to none on click

    let selectedRow = data.parentElement.parentElement;  // gets the row from table
    
    fourthCell = selectedRow.cells.length - 1;     // assigning variable to the last cell

    // looping through cells in a row to create inputs, assigning input types and id's and then appending them to each cell
	for (let i = 0; i < selectedRow.cells.length - 1; i++) { 
		let cell = selectedRow.cells[i];
		let input = document.createElement('input');
        input.value = cell.innerText;

        cell.innerText = ''; // clears the text content when clicking edit
		input.setAttribute('type', inputTypes[i]); 
		input.setAttribute('id', inputIDs[i]); 
		cell.append(input);
	}

    // creating update button       
    const updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update'; 
    // styling button 
    let styleBtn = updateBtn.style;
    styleBtn.backgroundColor = '#fa9b16';
    styleBtn.color = 'white';
    styleBtn.padding = 4 + 'px';
    styleBtn.border = 'none';
    styleBtn.borderRadius = 5 + 'px';
    styleBtn.cursor = 'pointer';
    
    //  and appending it into last cell         
    selectedRow.cells[fourthCell].append(updateBtn);
    // event listener on updateBtn to get new values of each cell update them to their corresponding cell
    updateBtn.addEventListener('click', () => {
        // loop through cells minus the last one 
        for (let i = 0; i < selectedRow.cells.length - 1; i++) {
            
            let cell = selectedRow.cells[i];  // asssing 'cell' to each cells there are ... 
			let type = cell.getElementsByTagName('input')[0].type; // ... getting their input types...
             
			if (type == 'text') {          // if type = text, get innerText values appended
                cell.innerText = document.getElementById(inputIDs[i]).value;
			} else if (type == 'number') {             // if type = number, get the innerText aswell AND appending '$' behind the amount
                cell.innerText = '$' + document.getElementById(inputIDs[i]).value;
            } else {      // else, which is the type = date, get the textContent appended
                cell.textContent = document.getElementById(inputIDs[i]).value;
            }
        }
        //end of loop
        
        updateBtn.style.display = 'none'; // upon clicking button, it disappears...
        editButton.style.display = 'inline'; // display edit button back when clicking updateBtn
    });

}


// funciion to get input values appended to each cell
function inputToTableRow() {
    let trNoExpenseText = document.getElementById('noDataYet'); // accessing tr html element and ........
    trNoExpenseText.style.display = 'none'; // ....... displaying it to 'none' upon clicking submit

    if (!nameOfExpense.value || !date.value || !amount.value) { return } // checking for validation on each input field
        // an array of objects to iterate through ..
    const arrOfData = [     
        { 
            name: nameOfExpense.value, 
            date: date.value, 
            amount: amount.value
        }
     ]
    // creating new rows and cells
    let newRow = tbody.insertRow(tbody.length);
    newRow.classList = 'animatedTR';
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4Del = newRow.insertCell(3);

     // utilizing forEach method to grab each input values and append it to cells
    arrOfData.forEach(input => {
        cell1.textContent = input.name;
        cell2.textContent = input.date;
        cell3.textContent = '$' + input.amount;
        cell4Del.innerHTML = 
        `
            <button onclick="deleteRowData(this)" style="
                background-color: red;
                padding: 4px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">
            <i class="fa-solid fa-trash fa-lg" style="color: whitesmoke;"></i>
            </button>
            <button onclick="editRowData(this)" style="
                background-color: #017BFE;
                color: white;
                padding: 4px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">
                    Edit
            </button>
        `
     });
     // calling this func to clear input after clicking submit btn.
    clearInputs();
    displayAndAddAmount()
}
// and of course adding an event listener to submit button 😅
submitBtn.addEventListener('click', inputToTableRow);

function displayAndAddAmount() {
    const totalAmountDiv = document.getElementById('totalAmountDiv');
    let lengthRows = tbody.rows.length;
   
    for (let i = 1; i < lengthRows; i++) {
    if (lengthRows > 4) {
        totalAmountDiv.style.display = 'block';
    }
    
  }   
}

