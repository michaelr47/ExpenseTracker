const input = document.getElementById('itemExpense');
const date = document.getElementById('itemDate');
const amount = document.getElementById('itemAmount');
const submitBtn = document.getElementById('submit');
const rowContainer = document.getElementById('tr-container');
const newTableRow = document.createElement('tr');

submitBtn.addEventListener('click', () => {
    let obj = [ 
        {
            name: input.value,
            date: date.value,
            amount: amount.value
        }
    ]
    
    obj.forEach(data => {
        console.log(data.name, data.date, data.amount);
        
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = data.name;
        td2.innerHTML = data.date;
        td3.innerHTML = '$' + data.amount;
        rowContainer.append(td1);
        rowContainer.append(td2);
        rowContainer.append(td3);
        newTableRow.append(rowContainer);
        
    });
    clearInputs();
})

function clearInputs() {
    input.value = ''
    date.value = ''
    amount.value = '';
}


// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');