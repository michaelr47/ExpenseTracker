const input = document.getElementById('itemExpense');
const date = document.getElementById('itemDate');
const amount = document.getElementById('itemAmount');
const submitBtn = document.getElementById('submit');

const table = document.getElementById('table');
table.style.borderCollapse = 'collapse';

const tbody = document.getElementById('tbody');

const delBtn = document.createElement('button');
delBtn.innerHTML = 'X';


submitBtn.addEventListener('click', () => {
    
    const arrOfData = [
        { 
            name: input.value, 
            date: date.value, 
            amount: amount.value 
        }
     ]

     let newRow = tbody.insertRow();
     let cell1 = newRow.insertCell()
     let cell2 = newRow.insertCell()
     let cell3 = newRow.insertCell();
     let cell4Del = newRow.insertCell()

     arrOfData.forEach(input => {
        
        cell1.innerHTML = input.name;
        cell2.innerHTML = input.date;
        cell3.innerHTML = '$' + input.amount;
        cell4Del.append(delBtn);

     })

    
    clearInputs();
})

//function to clear input field AFTER clicking submit button
function clearInputs() {
    input.value = ''
    date.value = ''
    amount.value = '';
}

//funcition to delete table row 
// function deleteButton() {
    
// }

