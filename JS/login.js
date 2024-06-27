const validPassword = '1234'
const validUserName = 'check@gmail.com'

document.getElementById('submit_btn').addEventListener('click', function () {
    const userNameField = document.getElementById('input_userName');
    // console.log(userNameField)
    const userName = userNameField.value;
    // console.log(userName)

    const passwordField = document.getElementById('input_password');
    // console.log(userNameField)
    const password = passwordField.value;
    // console.log(password)

    if (userName === validUserName && password === validPassword) {
        // console.log('sign in');
        window.location.href = 'bank.html';
    }
    else {
        const p = document.createElement('p');
        p.style.color = 'red';
        p.style.fontWeight = 'bold';
        if (userName != validUserName && password != validPassword) {
            p.innerText = 'User name and password both are incorrect.';
        }
        else if (userName != validUserName) {
            p.innerText = 'User name is incorrect.';
        }
        else if (password != validPassword){
            p.innerText = 'Password is incorrect.';
        }

        document.getElementById('signin_container').appendChild(p);
    }
})


document.getElementById('sunIcon').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
    document.getElementById('login_text').style.color = 'white';
})

document.getElementById('moonIcon').addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    document.getElementById('login_text').style.color = 'black';
})