$('.alert').hide();
if (localStorage.getItem('Users') === null) {
    $.getJSON('asset/data/users.json', function (data) {
        localStorage.setItem('Users', JSON.stringify(data));
    });
}

const WarningMessage = (type, problem) => {
    console.log(problem)
    if (problem !== undefined) {
        $('.alert').addClass(type)
        $('.alert').html(problem)
        $('.alert').show('slow').delay(3000).hide('slow');
    }
}

let ProcessSignIn = (event) => {
    event.preventDefault();
    const username = $('#SignInUsername').val();
    const password = $('#SignInPassword').val();
    if (username === "" || password === "") {
        WarningMessage('alert-warning', '<b>Form Cannot Be Empty</b> : Please fill in the form according to your data.')
    } else {
        const users = JSON.parse(localStorage.getItem('Users'));
        for (let i = 0; i < users.length; i++) {
            console.log(password != users[i].password);
            if (username === users[i].username && password === users[i].password) {
                // console.log('Berhasil Terautentifikasi');
                localStorage.setItem('User', JSON.stringify(users[i]));
                window.location.href = 'pages/tabel-customers.html';
            } else if (username === users[i].username && password !== users[i].password) {
                problem = '<b>Wrong Password</b> : Password you entered is wrong, please enter the password again or select forgot password.';
            }else{
                var problem = "<b>User Not Found</b> : Username you entered is not registered.";
            }
        }
        WarningMessage('alert-warning', problem);
    }
}

let ProcessSignUp = (event) => {
    event.preventDefault();
    const username = $('#SignUpUsername').val();
    const password1 = $('#SignUpPassword1').val();
    const password2 = $('#SignUpPassword2').val();

    if (password1 !== password2) {
        WarningMessage('<b>Password are not the same</b> : Please re enter your password.')
    } else {
        const users = JSON.parse(localStorage.getItem('Users'));
        if(users==null){
            const newUser = [{
                username: username,
                password: password1
            }]
            console.log(newUser)
            $('#SignUpUsername').val('');
            $('#SignUpPassword1').val('');
            $('#SignUpPassword2').val('');
            localStorage.setItem('Users', JSON.stringify(newUser));
            WarningMessage('alert-success', 'Success : New user has been added.');
            ShowSignInForm();
        }else{

            for (let i = 0; i < users.length; i++) {
                if (users[i].username === username) {
                    var similarity = false;
                    WarningMessage('alert-success', '<b>Username Already Registered</b> : Username your enter is already registered.');
                } else if (username === '' || password1 === '' || password2 === '') {
                    var problem = '<b>Form Cannot Be Empty</b> : Please fill in the form according to your data.';
                }
            }
            WarningMessage('alert-warning', problem);
            if (similarity !== false) {
                let newUser = {
                    username: username,
                    password: password1
                }
                users.push(newUser);
                $('#SignUpUsername').val('');
                $('#SignUpPassword1').val('');
                $('#SignUpPassword2').val('');
                localStorage.setItem('Users', JSON.stringify(users));
                WarningMessage('alert-success', 'Success : New user has been added.');
                ShowSignInForm();
            }
            console.log(users)
        }
    }

}

let ProssesChangePassword = (event) => {
    event.preventDefault();
    const username = $('#ChangeUsername').val();
    const password1 = $('#ChangePassword1').val();
    const password2 = $('#ChangePassword2').val();

    if (password1 !== password2) {
        WarningMessage('<b>Password are not the same</b> : Please re enter your password.')
    } else {
        const users = JSON.parse(localStorage.getItem('Users'));
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username) {
                users[i].password = password1;
                WarningMessage('alert-success', 'Success : Your password successfully changed.');
                ShowSignInForm();
                $('.change-password-form').hide('slow');
            } else if (username === '' || password1 === '' || password2 === '') {
                var problem = '<b>Form Cannot Be Empty</b> : Please fill in the form according to your data.';
            }
        }
        WarningMessage(problem);
        localStorage.setItem('Users', JSON.stringify(users));
        console.log(users)
    }
}