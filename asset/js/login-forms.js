$('.signup-form').hide();
$('.sign-in').hide()
$('.change-password-form').hide()
// hide Sign In form and show Sign Up Form
const ShowSignUpForm = () => {
    // console.log('Clicked Me!');
    $('.signin-form').hide('slow', function () {
        $('.sign-up').hide('slow');
        $('.change-password-form').hide('slow')
        $('.signup-form').show('slow');
        $('.sign-in').show('slow');
    });
};
const ShowSignInForm = () => {
    console.log('Clicked Me!');
    $('.signup-form').hide('slow', function () {
        $('.sign-in').hide('slow');
        $('.signin-form').show('slow');
        $('.sign-up').show('slow');
    });
};

const ShowChangePasswordForm = () => {
    // console.log('Clicked Me!');
    $('.signin-form').hide('slow', function () {
        // $('.sign-up').hide('slow');
        $('.change-password-form').show('slow');
        // $('.sign-in').show('slow');
    });
};

$('#SignUp').click(function(){
    ShowSignUpForm();
});
$('#SignIn').click(function(){
    ShowSignInForm();
});
$('#ForgetPassword').click(function(){
    ShowChangePasswordForm();
});