function uploadimage() {
    console.log('upload image')
}

$('#agedropdown').dropdown();

function createnewuserclick() {
    if ($('#password2').val() === $('#retypepassword2').val()) {
        firebase.auth().createUserWithEmailAndPassword($('#email2').val(), $('#password2').val()).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
}

$('#login').click(function () {
    console.log($('#email1').val(), $('#password1').val());
    firebase.auth().signInWithEmailAndPassword($('#email1').val(), $('#password1').val()).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
    });
})

function newuserclick() {
    $('#newusermodel').modal('show');
}
