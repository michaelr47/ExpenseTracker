const input = document.getElementById('itemExpense');
const date = document.getElementById('itemDate');
const amount = document.getElementById('itemAmount');
const submitBtn = document.getElementById('submit');

const table = document.getElementById('table');
const tbody = document.getElementById('tbody');


submitBtn.addEventListener('click', () => {
    
    const arrOfData = [
        { 
            name: input.value, 
            date: date.value, 
            amount: amount.value 
        }
     ]

     let newRow = table.insertRow();
     let cell1 = newRow.insertCell()
     let cell2 = newRow.insertCell()
     let cell3 = newRow.insertCell();

     arrOfData.forEach(input => {
        cell1.innerHTML = input.name;
        cell2.innerHTML = input.date;
        cell3.innerHTML = '$' + input.amount;
     })

    
    clearInputs();
})

function clearInputs() {
    input.value = ''
    date.value = ''
    amount.value = '';
}


