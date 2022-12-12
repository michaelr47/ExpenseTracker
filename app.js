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


function deleteRowData(d) {
    // let isTrue = true;
    // if (isTrue) {
    //     confirm('Are you sure you want to delete this row?') 
    let row = d.parentNode.parentNode;
    row.parentNode.removeChild(row);
   
        // tbody.deleteRow(row);
    // } else {
    //     isTrue = false; 
    // }
 }

 
 function editRowData(data) {
    console.log(data);
    // tbody.rows[0].cells[0].innerHTML = nameOfExpense.value;
    // tbody.rows[0].cells[1].innerHTML = date.value;
    // tbody.rows[0].cells[2].innerHTML = amount.value;
    let selectedRow = data.parentElement.parentElement;
 
    document.getElementById('itemExpense').value = selectedRow.cells[0].innerHTML;
    document.getElementById('itemDate').value = selectedRow.cells[1].innerHTML;
    document.getElementById('itemAmount').value = selectedRow.cells[2].innerHTML;
    console.log(selectedRow);
    // for (let i = 0; i < tbody.rows.length; i++) {
    //     tbody.rows[i].addEventListener('click', () => {
    //           tbody.rows[i] = nameOfExpense.value;
    //           tbody.rows[i] = date.value;
    //           tbody.rows[i] = amount.value;
        
    //     })
    // }
   

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
            <button onclick="deleteRowData(this)">
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