const input = document.getElementById('itemExpense');
const date = document.getElementById('itemDate');
const amount = document.getElementById('itemAmount');
const submitBtn = document.getElementById('submit');
const tbody = document.getElementById('tbody');
const table = document.getElementById('table');

table.style.borderCollapse = 'collapse';



const delBtn = document.createElement('button');
delBtn.onclick = deleteRow;
delBtn.innerHTML = 'X';


//function to clear input field AFTER clicking submit button
function clearInputs() {
    input.value = ''
    date.value = ''
    amount.value = '';
}


function deleteRow() {
        tbody.deleteRow(-1);

 }
 

submitBtn.addEventListener('click', () => {
    
    const arrOfData = [
        { 
            name: input.value, 
            date: date.value, 
            amount: amount.value
        }
     ]

    let newRow = tbody.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4Del = newRow.insertCell(3);

     arrOfData.forEach(input => {
        
        cell1.innerHTML = input.name;
        cell2.innerHTML = input.date;
        cell3.innerHTML = '$' + input.amount;
        cell4Del.append(delBtn);
     })

    clearInputs();

})