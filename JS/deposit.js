let showBalance = Number(document.getElementById('showBalance').innerText);

document.getElementById('btn-deposit').addEventListener('click', function () {
    const inputDeposit = document.getElementById('input_deposit');
    let valueDepositInput = Number(inputDeposit.value);

    // Error handling P tag 
    const deposit_container = document.getElementById('deposit_container');
    const p = document.createElement('p');
    p.style.marginTop = '5px';
    p.style.color = 'black';

    if (valueDepositInput >= 0) {
        let showDeposit = Number(document.getElementById('showDeposit').innerText);

        showDeposit += valueDepositInput;
        showBalance += valueDepositInput;

        document.getElementById('showDeposit').innerText = showDeposit;
        document.getElementById('showBalance').innerText = showBalance;

        inputDeposit.value = '';
    }
    else {
        console.log("Money can not be negative.");
        p.innerText = 'Money can not be negative.';
        deposit_container.appendChild(p);

        inputDeposit.value = '';
    }
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const inputWithDrawField = document.getElementById('input_withdraw');
    const showWithDrawField = document.getElementById('showWithdraw');

    let valueWithDraw = Number(inputWithDrawField.value);
    let valueShowWithDraw = Number(showWithDrawField.innerText);

    // Error handling P tag 
    const withdraw_container = document.getElementById('withdraw_container');
    const p = document.createElement('p');
    p.style.marginTop = '5px';
    p.style.color = 'red';

    if (valueWithDraw > showBalance) {
        p.innerText = 'Incorrect amount.';
        withdraw_container.appendChild(p);

        inputWithDrawField.value = '';
    }
    else if (valueWithDraw < 0) {
        p.innerText = 'Money can not be negative.';
        withdraw_container.appendChild(p);

        inputWithDrawField.value = '';
    }
    else {
        valueShowWithDraw += valueWithDraw;
        showBalance -= valueWithDraw;
        document.getElementById('showBalance').innerText = showBalance;
        showWithDrawField.innerText = valueShowWithDraw;

        inputWithDrawField.value = '';
    }
})

// Logout button route
document.getElementById('logout_btn').addEventListener('click', function(){
    if(confirm("Press ok to logout!") == true){
        window.location.href = 'index.html';
    }
})